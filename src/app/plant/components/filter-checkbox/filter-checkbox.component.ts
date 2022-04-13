import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() public checkbox: boolean | undefined = false;
  @Output() public checkedEvent = new EventEmitter<boolean>();

  constructor(
    private filterService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe(params => {
    //   this.checkbox = this.handleCheckboxes(this.name);
    // });
  }

  private handleCheckboxes(checkboxName: string): boolean {
    const checked = this.route.snapshot.queryParamMap.get(checkboxName);
    return checked === 'true';
  }

  onCheckboxChange(evt: any) {
    // toggle checkbox
    const checked = evt.target.checked;
    // this.checkbox = checked;
    this.checkedEvent.emit(checked);

    this.router.navigate(['plant'], {
      queryParams: {
        [this.attribute]: checked ? true : null
      },
      queryParamsHandling: 'merge'
    });
  }
}
