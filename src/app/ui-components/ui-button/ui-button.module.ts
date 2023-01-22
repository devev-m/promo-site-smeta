import { NgModule } from '@angular/core';
import { UiButtonComponent } from './ui-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
      UiButtonComponent
   ],
   imports: [
      CommonModule
   ],
   exports: [
      UiButtonComponent
   ],
 })
 export class UiButtonModule {}