import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: 'Congrats!'},
    {id: 1, text: 'hello!'},
    {id: 2, text: 'bye!'}
  ]

  constructor() { }

  update(id, text) {
    console.log(id);
    console.log(text);
    
    this.messages = this.messages.map(m => {
     return m.id === id
        ? {id, text}
        : m
    })
  }

}
