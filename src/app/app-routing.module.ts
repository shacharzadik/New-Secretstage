import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from  '@angular/router'

const routes:Routes = [
    {
        path: 'homepage',
        component: HomepageComponent,
        // canActivate: [AuthGuard],
        children: [
        //   {
        //     // path: 'home',
        //     // component: HomeComponent,
        //     // canActivate: [AuthGuard],


        //   }
    // {
    //     path: '',
    //     redirectTo: '/login',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: '**',
    //     redirectTo: '/login',
    //     pathMatch: 'full'
         ]
        }

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: false
      })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
export const RoutingComponents=[
    HomepageComponent

]