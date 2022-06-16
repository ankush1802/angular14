import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standanlonedemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standanlonedemo.component.html',
  styleUrls: ['./standanlonedemo.component.css']
})
export class StandanlonedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
