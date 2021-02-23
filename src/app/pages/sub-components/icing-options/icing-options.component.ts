import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Colors{
  value: String;
}

@Component({
  selector: 'app-icing-options',
  templateUrl: './icing-options.component.html',
  styleUrls: ['./icing-options.component.css']
})
export class IcingOptionsComponent implements OnInit {

  colors: Colors[] = [
    {value: "White"},
    {value: "Chocolate"},
    {value: "White Whipped"},
    {value: "Chocolate Whipped"},
    {value: "Asparagus Green"},
    {value: "Bright Green"},
    {value: "Green"},
    {value: "Teal"},
    {value: "Royal Blue"},
    {value: "Blue"},
    {value: "Purple Iris"},
    {value: "Red"},
    {value: "Hot Pink"},
    {value: "Pink Thread"},
    {value: "Coral"},
    {value: "Amaryllis Yellow"},
    {value: "Yellow"},
    {value: "Neon Orange"},
    {value: "Grey"},
    {value: "Black"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
