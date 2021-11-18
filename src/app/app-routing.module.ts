import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreAddComponent } from './components/score-add/score-add.component';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  { path:'Score-add', component:ScoreAddComponent },
  { path:'Score-list', component:ScoreListComponent },
  { path:'Student-list', component:StudentListComponent },
  { path:'Student-list/:id/Score-add', component:ScoreAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
