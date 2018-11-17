import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent {

  @ViewChild('txtProgress')
  public txtProgress: ElementRef;

  @Input('name')
  public leyend: string = 'Leyend';
  @Input()
  public progress: number = 50;

  @Output()
  public valueChanged: EventEmitter<number> = new EventEmitter();

  public onChange(newValue: number): void {
    this.progress = newValue >= 100 ? 100 : newValue <= 0 ? 0 : newValue;
    this.txtProgress.nativeElement.value = this.progress;
    this.valueChanged.emit(this.progress);
  }

  public changeValue(value): void {
    if ((this.progress >= 100 && value > 0 || (this.progress <= 0 && value < 0))) {
      return;
    }
    this.progress += value;
    this.valueChanged.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }

}
