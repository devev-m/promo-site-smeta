import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss']
})
export class UiFormComponent {
  
  public readonly form = new FormGroup({
    email: new FormControl('', Validators.email),
  });

  @Output()
  public readonly buttonClick = new EventEmitter;

  public submit(): void {
    this.buttonClick.emit();
  }
}
