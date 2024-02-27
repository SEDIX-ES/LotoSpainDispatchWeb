import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss','./queries/filtros.component-mobile.scss']
})
export class FiltrosComponent {

  @Output() dateSelected = new EventEmitter<Date>();
  @Output() filterChanged = new EventEmitter<string>();

  selectDate!: Date;
  searchText: string = '';



  onSearchTextChanged(){
    this.filterChanged.emit(this.searchText);
  }

  onDateSelected(){
    this.dateSelected.emit(this.selectDate);
  }
}
