import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {Feedback,ContactType} from "../shared/feedback";
import {MatSlideToggle,MatSlider} from "@angular/material";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
feedbackForm:FormGroup;
feedback:Feedback;
contactType = ContactType ;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: ["",Validators.required],
      lastname:["",Validators.required],
      telnum:["",Validators.required],
      email:["",Validators.required],
      agree:false,
      contacttype:"None",
      message:""
    });
  }
  onSubmit(){
    this.feedback=this.feedbackForm.value;
    this.feedbackForm.reset({
      firstname: "",
      lastname:"",
      telnum:"",
      email:"",
      agree:false,
      contacttype:"None",
      message:""

    });
  }
}
