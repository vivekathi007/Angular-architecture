import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetitleComponent } from './pagetitle.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [PagetitleComponent],
  imports: [CommonModule,MatToolbarModule],
  exports:[PagetitleComponent]
})
export class PagetitleModule {}
