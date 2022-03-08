import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public userName: any;
  public formdata: any;

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      userName: new FormControl()
    });
  }
  onClickSubmit(data: any){
    this.userName = data.userName;
  }
}
