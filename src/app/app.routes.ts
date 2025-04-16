import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StageDetailsIhebComponent } from './components/stage-details-iheb/stage-details-iheb.component';
import { StagesIngIhebComponent } from './components/stages-ing-iheb/stages-ing-iheb.component';
import { AddStageIngIhebComponent } from './components/add-stage-ing-iheb/add-stage-ing-iheb.component';

export const routes: Routes = [
  { path: '', redirectTo: 'stages', pathMatch: 'full' },
  { path: 'stages', component: StagesIngIhebComponent },
  { path: 'add', component: AddStageIngIhebComponent },
  { path: 'detail/:id', component: StageDetailsIhebComponent },
  { path: '**', component: NotFoundComponent },
];
