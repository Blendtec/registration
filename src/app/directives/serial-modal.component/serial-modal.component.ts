import { Component } from '@angular/core';

@Component({
  selector: 'app-serial-modal',
  templateUrl: './serial-modal.component.html',
  styleUrls: ['./serial-modal.component.css']
})
export class SerialModalComponent {

  public showing: Boolean = false;

  public show(): void {
    this.showing = true;
  }

  public hide(): void {
    this.showing = false;
  }

}
