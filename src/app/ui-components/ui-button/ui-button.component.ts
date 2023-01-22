import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {
  @Input()
  public text: string = ''

  @Input()
  public backgroundColor: string = '#fff'

  @Input()
  public marginTop: string = '0'

  @Output()
  public readonly buttonClick = new EventEmitter;

  public submit(): void {
    this.buttonClick.emit();
  }
}

