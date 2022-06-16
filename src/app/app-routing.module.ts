import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { OnpushdemoComponent } from './onpushdemo/onpushdemo.component'; 
import { StandanlonedemoComponent } from './standanlonedemo/standanlonedemo.component';
 
const routes: Routes = [
  {path:'',component:HomeComponent, title: 'Welcome' },  
  { path: 'contactus', component: ContactusComponent,title: 'Contact Us' },
  {path: 'standalonedemo',component:StandanlonedemoComponent, title: 'standalonedemo'},
  { path: 'onpush', component: OnpushdemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule extends TitleStrategy {
  updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    if(pageTitle != undefined){
      document.title = "${pageTitle}";
    }
  }
  
}
