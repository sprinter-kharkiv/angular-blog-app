import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-profile',
  templateUrl: './hotel-profile.component.html',
  styleUrls: ['./hotel-profile.component.scss']
})
export class HotelProfileComponent implements OnInit {

  @Input() profile;

  constructor() { }

  ngOnInit() {
  }

}
