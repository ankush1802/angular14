import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpushdemo',
  template: `<div>
  <app-child [ngModel]="value"></app-child>
</div>`,
  styleUrls: ['./onpushdemo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushdemoComponent implements OnInit {

  public value: any = "old value";
  
  constructor(private _changeDetector: ChangeDetectorRef){
    setTimeout(() => {
      debugger;
      this.value = "new value";
      this._changeDetector.markForCheck();
    }, 5000)
  }

  ngOnInit(): void {
  }

}
