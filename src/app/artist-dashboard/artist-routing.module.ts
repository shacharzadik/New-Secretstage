import { ArtistDashboardComponent } from './artist-dashboard.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtistDashboardCalanderComponent } from './artist-dashboard-calander/artist-dashboard-calander.component';
import { ArtistDashboardMyeventsComponent } from './artist-dashboard-myevents/artist-dashboard-myevents.component';
import { ArtistDashboardAccoutDetailsComponent } from './artist-dashboard-accout-details/artist-dashboard-accout-details.component';
import { ArtistDashboardInboxComponent } from './artist-dashboard-inbox/artist-dashboard-inbox.component';
import { ArtistDashboardProfileComponent } from './artist-dashboard-profile/artist-dashboard-profile.component';


const routes: Routes = [
    { path: "dashboard", component: ArtistDashboardComponent},
    { path: "profile", component: ArtistDashboardProfileComponent},
    { path: "inbox", component: ArtistDashboardInboxComponent},
    { path: "details", component: ArtistDashboardAccoutDetailsComponent},
    { path: "events", component: ArtistDashboardMyeventsComponent},
    { path: "calander", component: ArtistDashboardCalanderComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ArtistRoutingModule { }