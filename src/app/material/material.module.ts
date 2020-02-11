import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



const MAT_MODULES = [MatCardModule,MatToolbarModule,MatButtonModule]
@NgModule({
  declarations: [],
  imports: [
    ...MAT_MODULES
  ],
  exports:[...MAT_MODULES]
})
export class MaterialModule { }
