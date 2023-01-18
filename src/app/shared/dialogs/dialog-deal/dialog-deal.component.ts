import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DealsService } from '../../services/deals/deals.service';

@Component({
  selector: 'app-dialog-deal',
  templateUrl: './dialog-deal.component.html',
  styleUrls: ['./dialog-deal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDealComponent {
  @Output() closeDialog = new EventEmitter<null>();
  private dealsService = inject(DealsService);
  public dealForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    address: new FormControl<string>('', [Validators.required]),
    purchasePrice: new FormControl<number|null>(null, [Validators.required, Validators.min(1)]),
    NOI: new FormControl<number|null>(null, [Validators.required, Validators.min(1)]),
  });

  createDeal(): void {
    const form = this.dealForm.value;
    if (form.name && form.purchasePrice && form.address && form.NOI)
      this.dealsService.createDeal(form.name, form.purchasePrice, form.address, form.NOI);
      this.close();
  }

  validateFormField(field: 'address'|'name'|'NOI'|'purchasePrice'): boolean {
    return this.dealForm.controls[field].invalid && (this.dealForm.controls[field].dirty || this.dealForm.controls[field].touched);
  }

  close(): void {
    this.closeDialog.emit();
  }

  preventParentClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
