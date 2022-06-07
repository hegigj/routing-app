import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {debounceTime, filter, tap} from "rxjs/operators";
import {FormControl, Validators} from "@angular/forms";
import {OnEdit} from "../on-edit";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnEdit {
  id?: string;
  usernameControl: FormControl;
  isDirty: boolean;

  constructor(private activatedRoute: ActivatedRoute) {
    this.usernameControl = new FormControl('', Validators.required);
    this.isDirty = false;
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    // this.id = this.activatedRoute.snapshot.params.USER_ID;
    // this.activatedRoute.paramMap
    //   .pipe(
    //     filter(paramMap => paramMap.has('USER_ID')),
    //     tap(console.log)
    //   )
    //   .subscribe((paramMap) => this.id = paramMap.get('USER_ID'));
    this.activatedRoute.data.subscribe(({ user }) => {
      const { id, username } = user;
      this.id = id;
      this.usernameControl.setValue(username);
    });

    this.usernameControl.valueChanges
      .pipe(
        debounceTime(750),
        tap(console.log),
        tap(() => this.isDirty = this.usernameControl.dirty)
      )
      .subscribe();
  }

}
