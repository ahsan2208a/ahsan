import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'team', component: TeamComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
