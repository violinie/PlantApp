import { Component, OnInit } from '@angular/core';
import { plants } from 'src/app/api/plants.api';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public sliced = plants.slice(plants.length - 3, plants.length);

  ngOnInit(): void {}
}
