import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type btnVariants = "primary" | "secondary"
@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() variant: btnVariants = "primary"
  @Input("btn-text") btnText: String = ""
  @Output("submit") onSubmit = new EventEmitter()


  submit() {
    this.onSubmit.emit()
  }
}
