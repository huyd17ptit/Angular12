import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Quang Huy';
  public age = 25;
  public traiCay = ['Táo','Nho','Cam','Xoài'];
  public traiCay2 = [
    {ten: 'Táo', gia: 12, haGia: false},
    {ten: 'Nho', gia: 15, haGia: true},
    {ten: 'Cam', gia: 10, haGia: false},
    {ten: 'Xoài', gia: 5, haGia: true}
  ];

  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay = ', this.traiCay);
  }
}
