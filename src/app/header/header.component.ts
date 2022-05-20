import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  // emitting an event (links)
  // @Output() featureSelected = new EventEmitter<string>(); //Output allows us to listent to the event from the parent component (app.component)

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

}