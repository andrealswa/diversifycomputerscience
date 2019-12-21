import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-entry-form',
  templateUrl: './user-entry-form.component.html',
  styleUrls: ['./user-entry-form.component.css']
})
export class UserEntryFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  userEntryForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  });

  submit() {

  }
}
