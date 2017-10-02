import { Component, Inject } from '@angular/core'
import { MailService } from './mail.service'

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let message of mail.messages">{{message.text}}</li>
    </ul>
      <app-simple-form
        *ngFor="let message of mail.messages"
        [message]="message.text"
        (update)="onUpdate(message.id, $event.text)">
      </app-simple-form>
  `,
  styleUrls: []
})
export class AppComponent {
  constructor(@Inject('mail') private mail){}
  onUpdate(id, text) {
    this.mail.update(id, text)
  }
}
