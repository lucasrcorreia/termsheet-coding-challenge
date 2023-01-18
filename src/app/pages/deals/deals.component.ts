import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Deal } from 'src/app/shared/interfaces/deal';
import { DealsService } from './deals.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealsComponent implements OnInit{
  dealsService = inject(DealsService);
  spinner = inject(NgxSpinnerService);
  deals$ = this.dealsService.deals$.pipe(
    map(deals => deals?.sort(this.sortByName))
  );
  createDialogOpen = false;

  ngOnInit(): void {
    this.dealsService.loadInitialDeals();
    this.spinner.show();
  }

  private sortByName(a: Deal, b: Deal): number {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
}
