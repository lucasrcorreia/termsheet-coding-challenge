import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Deal } from 'src/app/shared/interfaces/deal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
  private deals: Deal[] = [];
  private maxId: number = 0;
  public deals$ = new BehaviorSubject<Deal[] | undefined>(undefined);

  loadInitialDeals(): void {
    setTimeout(() => {
      this.deals = environment.mockedDeals;
      this.maxId = Math.max(...this.deals.map(deal => deal.id));
      this.deals$.next(this.deals);
    }, 1000)
  }

  createDeal(name: string, purchasePrice: number, address: string, NOI: number): void {
    this.deals$.next(undefined);
    this.maxId++;
    const newDeal = Deal(this.maxId, name, purchasePrice, address, NOI);
    setTimeout(() => {
      this.deals.push(newDeal);
      this.deals$.next(this.deals);
    }, 1000)
  }
}
