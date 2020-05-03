import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetGalleryComponent } from './asset-gallery/asset-gallery.component';

const routes: Routes = [
  { path: '', component: AssetGalleryComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
