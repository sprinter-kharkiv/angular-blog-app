import { Component, OnInit } from '@angular/core';
import { Hotel } from "../../../../store/models/hotel.model";

@Component({
  selector: 'app-hotels',
  templateUrl: 'hotels.component.html',
  styleUrls: ['hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public hotels: Hotel[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+3242353434',
      picture: 'assets/images/hotels/1.jpg',
      photos: [
        'assets/images/hotels/res.jpg',
        'assets/images/hotels/r1.jpg'
      ],
      weather:  {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'assets/images/hotels/b1.jpg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'Five Stars',
      phone: '+3242353434',
      picture: 'assets/images/hotels/2.jpg',
      photos: [
        'assets/images/hotels/res.jpg',
        'assets/images/hotels/r1.jpg'
      ],
      weather:  {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: 'assets/images/hotels/b2.jpg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Hotel name',
      address: 'Orlando',
      description: 'Lorem ipson0',
      phone: '+3242353434',
      picture: 'assets/images/hotels/3.jpg',
      photos: [
        'assets/images/hotels/res.jpg',
        'assets/images/hotels/r1.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/hotels/b3.jpg'
      },
      stars: 5
    }
  ];
  selectedHotel = 0;
  weather: Object = {};
  profile: Object = {};

  constructor() { }

  ngOnInit() {
    this.prepareWeatger(this.hotels, this.weather);
    this.prepareProfile(this.hotels, this.profile);
  }

  changeSelection(e) {
    this.selectedHotel = e;
  }

  prepareWeatger(arr, obj) {
    for(let i = 0; i < arr.length; i++){
      obj[arr[i].id] = arr[i].weather;
    }
  }
  prepareProfile(arr, obj) {
    for(let i = 0; i < arr.length; i++){
      obj[arr[i].id] = arr[i].profile;
    }
  }

}
