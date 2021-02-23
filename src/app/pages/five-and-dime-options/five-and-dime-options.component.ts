import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-five-and-dime-options',
  templateUrl: './five-and-dime-options.component.html',
  styleUrls: ['./five-and-dime-options.component.css']
})
export class FiveAndDimeOptionsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}