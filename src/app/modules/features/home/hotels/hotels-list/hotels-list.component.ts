import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  @Input() hotels;
  @Input() selected;

  @Output() changeSelection: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectHotel(hotel) {
    this.changeSelection.emit(hotel.id);
  }

}
