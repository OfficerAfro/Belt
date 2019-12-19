import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: "", pathMatch: "full", component: AppComponent},
  {path: 'edit/:_id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
