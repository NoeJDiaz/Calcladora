import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botonclear',
  templateUrl: './botonclear.component.html',
  styleUrls: ['./botonclear.component.css']
})
export class BotonclearComponent implements OnInit {
@Output() onClick = new EventEmitter();

  handlerClick(){
    this.onClick.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
