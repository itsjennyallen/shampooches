import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path: "", pathMatch: 'full', component: AuthComponent},
  {path: 'pets', component: MainComponent},
  {path: 'pets/new', component: AddComponent},
  {path: 'pets/edit/:id', component: EditComponent},
  {path: 'pets/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
