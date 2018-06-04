import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Feedback, ContactType } from "../shared/feedback";
import { MatSlideToggle, MatSlider } from "@angular/material";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  formerror:boolean;
  formErrors = {
    "firstname": '',
    "lastname": '',
    "telnum": '',
    "email": ''
  };
  validationMessages = {
    "firstname": {
      "required": "firstname is required",
      "minlength": "firstname must be at least 2 characters long",
      "maxlength": "firstname cannot be more than 25 characters"
    },
    "lastname": {
      "required": "lastname is required",
      "minlength": "lastname must be at least 2 characters long",
      "maxlength": "lastname cannot be more than 25 characters"
    },
    "telnum": {
      "required": "telnum is required",
      "pattern": "Telephon number must contain only numbers"
    },
    "email": {
      "required": "email is required",
      "email": "Email not in valid format"
    }
  };
  contactType = ContactType;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.formerror=true;
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: ["", [Validators.required, Validators.email]],
      agree: false,
      contacttype: "None",
      message: ""
    });

    this.feedbackForm.valueChanges.subscribe(data => this.onvaluechanged(data));
    this.onvaluechanged();
  }

  onvaluechanged(data?): any {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
          
        }
      }else{
        
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.feedbackForm.reset({
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contacttype: "None",
      message: ""

    });
  }
}
