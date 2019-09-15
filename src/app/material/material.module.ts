import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'


const MAT_MODULES = [MatCardModule]
@NgModule({
  declarations: [],
  imports: [
    ...MAT_MODULES
  ],
  exports:[...MAT_MODULES]
})
export class MaterialModule { }
