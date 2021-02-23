import { Component, OnInit } from '@angular/core';

interface Sprinkles{
  value: String;
}

@Component({
  selector: 'app-sprinkles',
  templateUrl: './sprinkles.component.html',
  styleUrls: ['./sprinkles.component.css']
})
export class SprinklesComponent implements OnInit {

  sprinkles: Sprinkles[] = [
    {value: "No Sprinkles"},
    {value: "Primary"},
    {value: "Unicorn"},
    {value: "Pastel"},
    {value: "Gold Glitter"},
    {value: "Patriotic"},
    {value: "Black"},
    {value: "White"},
    {value: "Black & White"},
    {value: "Chocolate"},
    {value: "Sugar Crystals"},
    {value: "Red"},
    {value: "Silver"},
    {value: "Valentine"},
    {value: "Fall"},
    {value: "Christmas"},
    {value: "Snowflakes"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
