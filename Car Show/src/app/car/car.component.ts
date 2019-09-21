import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars = [
    {
      brand: 'Suzuki',
      model: 'Vitara Brezza',
      price: 1200000,
      img: 'https://www.motorbeam.com/wp-content/uploads/Maruti-Vitara-Brezza.jpg'
    },
    {
      brand: 'Hyndai',
      model: 'Kona-Electric',
      price: 2500000,
      img: 'https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Cars/April/CR-Cars-InlineHero-2019-Hyundai-Kona-EV-f-4-19'
    },
    {
      brand: 'Honda',
      model: 'Jazz',
      price: 800000,
      img: 'https://www.motorbeam.com/wp-content/uploads/Honda-Jazz-Features-1.jpg'
    },
    {
      brand: 'Tata',
      model: 'Nexon',
      price: 750000,
      img: 'https://www.motorbeam.com/wp-content/uploads/Tata-Nexon-Mileage.jpg'
    },
    {
      brand: 'Mahindra',
      model: 'Marrazo',
      price: 1070000,
      img: 'https://etimg.etb2bimg.com/photo/67284655.cms'
    },
  ]
  carData:any='';

  sendfunc(car){
    this.carData = car;
  }
  constructor() { }

  ngOnInit() {
  }

}
