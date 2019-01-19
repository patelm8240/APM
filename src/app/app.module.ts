import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({

  declarations: [
    WelcomeComponent,
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:WelcomeComponent},
      {path:'',redirectTo:'home', pathMatch:'full'},
      {path:'**',component:WelcomeComponent},
    ]),
    ProductModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
