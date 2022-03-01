import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  // emitting an event (links)
  @Output() featureSelected = new EventEmitter<string>(); //Output allows us to listent to the event from the parent component (app.component)

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }


}