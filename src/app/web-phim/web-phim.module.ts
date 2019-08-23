import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPhimComponent } from './web-phim.component';
import { WebPhimRoutingModule } from './web-phim-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShareModule } from '../_core/shared/share.module';


@NgModule({
  declarations: [
    WebPhimComponent,
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    WebPhimRoutingModule,
    ShareModule
  ]
})
export class WebPhimModule { }
