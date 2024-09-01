import { NgModule } from '@angular/core';
import { GridUiLibraryComponent } from './grid-ui-library.component';
import { NgGridComponent } from './ng-grid/ng-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [GridUiLibraryComponent, NgGridComponent],
  imports: [AgGridModule
  ],
  exports: [GridUiLibraryComponent,NgGridComponent]
})
export class GridUiLibraryModule { }
