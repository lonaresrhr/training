import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-data-binding',
  templateUrl: './two-data-binding.component.html',
  styleUrls: ['./two-data-binding.component.scss'],
})
export class TwoDataBindingComponent implements OnInit {
  inputValue: string = 'default';
  ngModelValue: string = 'model';
  redColor: string = 'tomato';
  constructor() {}

  ngOnInit(): void {}
  onInputChange(event: any) {
    this.inputValue = event.target.value;
  }
}
