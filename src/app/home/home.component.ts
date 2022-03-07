import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

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

  public districts: string[] = ['Quận, huyện'];

  public vietnamData = [
    {
      city: 'Chọn tỉnh, thành phố',
      district: []
    },
    {
      city: 'Hà Nội',
      district: ["Quận Ba Đình","Huyện Ba Vì","Quận Bắc Từ Liêm","Quận Cầu Giấy","Huyện Chương Mỹ","Huyện Đan Phượng","Huyện Đông Anh","Quận Đống Đa","Huyện Gia Lâm","Quận Hà Đông","Quận Hai Bà Trưng","Huyện Hoài Đức","Quận Hoàn Kiếm","Quận Hoàng Mai","Quận Long Biên","Huyện Mê Linh","Huyện Mỹ Đức","Quận Nam Từ Liêm","Huyện Phú Xuyên","Huyện Phúc Thọ","Huyện Quốc Oai","Huyện Sóc Sơn","Thị xã Sơn Tây","Quận Tây Hồ","Huyện Thạch Thất","Huyện Thanh Oai","Huyện Thanh Trì","Quận Thanh Xuân","Huyện Thường Tín","Huyện Ứng Hòa"]
    },
    {
      city: 'Hải Phòng',
      district: ["Quận Đồ Sơn","Quận Dương Kinh","Quận Hải An","Quận Hồng Bàng","Quận Kiến An","Quận Lê Chân","Quận Ngô Quyền","Huyện An Dương","Huyện An Lão","Huyện Bạch Long Vĩ","Huyện Cát Hải","Huyện Kiến Thụy","Huyện Thủy Nguyên","Huyện Tiên Lãng","Huyện Vĩnh Bảo"]
    },
    {
      city: 'Thừa Thiên Huế',
      district: ["Thành phố Huế","Thị xã Hương Thủy","Huyện A Lưới","Huyện Nam Đông","Huyện Phong Điền","Huyện Phú Lộc","Huyện Phú Vang","Huyện Quảng Điền"]
    },
    {
      city:'Đà Nẵng',
      district: ["Quận Cẩm Lệ","Quận Hải Châu","Quận Liên Chiểu","Quận Ngũ Hành Sơn","Quận Sơn Trà","Quận Thanh Khê","Huyện Hòa Vang","Huyện Hoàng Sa"]
    },
    {
      city: 'TP Hồ Chí Minh',
      district: ["Quận 1","Quận 2","Quận 3","Quận 4","Quận 5","Quận 6","Quận 7","Quận 8","Quận 9","Quận 10","Quận 11","Quận 12","Quận Bình Tân","Quận Bình Thạnh","Quận Gò Vấp","Quận Phú Nhuận","Quận Tân Bình","Quận Tân Phú","Quận Thủ Đức","Huyện Bình Chánh","Huyện Cần Giờ","Huyện Củ Chi","Huyện Hóc Môn","Huyện Nhà Bè"]
    }
  ];

  public counter = 0;
  public counterBinhPhuong = 0;

  constructor(private common: CommonService) { }

  public ngOnInit(): void {
    console.log('vietnamData = ', this.vietnamData);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

  public changeCity(event: any): void{
    const city = event.target.value;
    if(!city){
      return;
    }
    //Cách 1:
    // const search = this.vietnamData.filter((data) => data.city === city); //city bên phải chính là cái city mình chọn (city gán = event.targer.value)
    // if(search && search.length>0){
    //   this.districts = search[0].district;
    // }

    //Cách 2:
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];  //Trong mảng vietnamData, tìm ra 1 phần tử có city bằng city mình chọn, rồi kiểm tra xem trong phần tử đó (ptu này là 1 object) có thuộc tính district hay không, nếu có thì gán vào mảng districts, nếu không thì trả về 1 mảng rỗng
  }
}
