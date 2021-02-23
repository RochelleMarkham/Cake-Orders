import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  datePickerConfig = {
    format: 'MM/DD/YYYY'
  }

  ngOnInit(): void {
  }

}
