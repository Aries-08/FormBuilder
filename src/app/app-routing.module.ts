import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormPreviewResolver } from './form-preview-resolver.service';

const routes: Routes = [
  { path: 'preview', component: FormPreviewComponent, resolve: {generatedHtmlCode: FormPreviewResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
