import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent {
  @Input()
  public textTariff: string = ''

  @Input()
  public textBestseller: string = ''

  @Input()
  public textPrice: number = 0

  @Input()
  public textDays: string = ''
  
}
