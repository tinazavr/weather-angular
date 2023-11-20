import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-controls',
  templateUrl: './search-controls.component.html',
  styleUrls: ['./search-controls.component.scss'],
})
export class SearchControlsComponent {
  city: string = 'Polohy';

  @Output() submitCity: EventEmitter<string> = new EventEmitter<string>();

  changeCity(): void {
    this.submitCity.emit(this.city);
  }
}
