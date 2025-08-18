import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PermanentjobsComponent } from './components/permanentjobs/permanentjobs.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { trainerGuard } from './guards/trainer.guard';
import { canexitGuard } from './guards/canexit.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'careers',
    component: CareersComponent,
    children: [
      { path: '', component: PermanentjobsComponent },
      { path: 'permanent', component: PermanentjobsComponent },
      { path: 'contract', component: ContractjobsComponent },
    ]
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    canDeactivate: [canexitGuard]
  },
  { path: 'users', component: UsersComponent },
  { path: 'userdetails/:id', component: UserdetailsComponent },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then((x) => x.ProductListComponent)
    // component: ProductListComponent
  },
  { path: 'productdetails', component: ProductdetailsComponent },
  {
    path: 'uploadvideo',
    component: UploadVideoComponent,
    canActivate: [trainerGuard]
  },
  { path: '**', component: NotfoundComponent }
];
