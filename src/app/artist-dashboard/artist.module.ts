import { ArtistDashboardComponent } from './artist-dashboard.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArtistDashboardProfileComponent } from './artist-dashboard-profile/artist-dashboard-profile.component';
import { ArtistDashboardAccoutDetailsComponent } from './artist-dashboard-accout-details/artist-dashboard-accout-details.component';
import { ArtistDashboardCalanderComponent } from './artist-dashboard-calander/artist-dashboard-calander.component';
import { ArtistDashboardInboxComponent } from './artist-dashboard-inbox/artist-dashboard-inbox.component';
import { ArtistDashboardMyeventsComponent } from './artist-dashboard-myevents/artist-dashboard-myevents.component';



@NgModule({
  imports: [CommonModule, ArtistRoutingModule],
  declarations: [
    ArtistDashboardComponent,
    ArtistDashboardProfileComponent,
    ArtistDashboardInboxComponent,
    ArtistDashboardAccoutDetailsComponent,
    ArtistDashboardMyeventsComponent,
    ArtistDashboardCalanderComponent
]
})
export class ArtistModule {}