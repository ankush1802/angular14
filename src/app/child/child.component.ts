import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `<div (click)="click()">Current Value: {{value}}.
  Click me to force change detection</div>`,
  styleUrls: ['./child.component.css'],
  inputs: ['value'],  
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChildComponent),
    multi: true
  }],
})
export class ChildComponent implements OnInit {

  constructor() { }
  public value: any;
    
    public onChange: (_: any) => void = (_: any) => {
        // do nothing
    };
    public onTouched: () => void = () => {
        // do nothing
    };

    public writeValue(value: any): void {
        this.value = value;
    }

    public click():void { 
      debugger;
      this.value = "child new value";
      // event just forces angular to re run change detection
    }

    public registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    public registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  ngOnInit(): void {
  }

}
