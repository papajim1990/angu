import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from "@angular/material";
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {username:"",password:"",remember:false};
  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  onSubmit(){
    this.dialogRef.close();
    alert("User is:"+this.user.username);
  }
}
