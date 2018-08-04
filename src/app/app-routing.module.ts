import { HomepageComponent } from "./homepage/homepage.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "artist",
    loadChildren: '../app/artist-dashboard/artist.module#ArtistModule'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
    })
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
