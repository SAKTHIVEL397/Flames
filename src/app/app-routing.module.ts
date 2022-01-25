import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: 'result', component: ResultComponent },
  { path: '', component: MainComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
