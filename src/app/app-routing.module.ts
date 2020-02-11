import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';


const routes: Routes = [{
  path : '',
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)

},
  { path: '', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
