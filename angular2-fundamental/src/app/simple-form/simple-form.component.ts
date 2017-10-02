import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      <input #myRef type="text" [(ngModel)]="message" />
      <button (click)="update.emit({text: message})">Click me!</button>
    </p>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message
  @Output() update = new EventEmitter()

  constructor() {}

  ngOnInit() {
  }

}
