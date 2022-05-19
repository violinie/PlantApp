import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../filters/data.service';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterCheckboxComponent implements OnInit {
  @Input() public attribute: 'petFriendly' | 'hydroponics' | 'purifyAir' | '' =
    '';
  @Input() public name: string = '';

  public checkbox: boolean | undefined = false;

  constructor(
    private filterService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.checkbox = this.handleCheckboxes(this.attribute);
    });
  }

  private handleCheckboxes(checkboxName: string): boolean {
    const checked = this.route.snapshot.queryParamMap.get(checkboxName);
    return checked === 'true';
  }

  onCheckboxChange(evt: any) {
    // toggle checkbox
    const checked = evt.target.checked;

    this.router.navigate(['plant'], {
      queryParams: {
        [this.attribute]: checked ? true : null
      },
      queryParamsHandling: 'merge'
    });
  }
}
