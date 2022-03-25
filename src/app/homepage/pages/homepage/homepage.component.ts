import { Component, OnInit } from '@angular/core';
import { plants } from 'src/app/api/plants.api';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    let sliced = plants.slice(0, 7);
    console.log(sliced);
  }
}
