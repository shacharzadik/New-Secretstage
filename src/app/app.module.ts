import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestapiComponent } from './testapi/testapi.component';
import { ApiService } from './Services/api.service';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageHeroimageComponent } from './homepage-heroimage/homepage-heroimage.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ArtistGridComponent } from './artist-grid/artist-grid.component';
import { EventsGridComponent } from './events-grid/events-grid.component';
import { HomepageGetinvolvedComponent } from './homepage-getinvolved/homepage-getinvolved.component';
import { ArtistSearchResultsComponent } from './artist-search-results/artist-search-results.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { ArtistProfileHeroimageComponent } from './artist-profile-heroimage/artist-profile-heroimage.component';
import { ArtistProfileHostshowComponent } from './artist-profile-hostshow/artist-profile-hostshow.component';
import { HostshowPublicShowComponent } from './hostshow-public-show/hostshow-public-show.component';
import { HostshowPrivateShowComponent } from './hostshow-private-show/hostshow-private-show.component';
import { ArtistProfileEventPrefereanceComponent } from './artist-profile-event-prefereance/artist-profile-event-prefereance.component';
import { ArtistProfileMediaComponent } from './artist-profile-media/artist-profile-media.component';
import { ArtistDashboardComponent } from './artist-dashboard/artist-dashboard.component';
import { ArtistDashboardProfileComponent } from './artist-dashboard-profile/artist-dashboard-profile.component';
import { ArtistDashboardAccoutDetailsComponent } from './artist-dashboard-accout-details/artist-dashboard-accout-details.component';
import { ArtistDashboardCalanderComponent } from './artist-dashboard-calander/artist-dashboard-calander.component';
import { ArtistDashboardMyeventsComponent } from './artist-dashboard-myevents/artist-dashboard-myevents.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboardProfileComponent } from './user-dashboard-profile/user-dashboard-profile.component';
import { UserDashboardAccountdetailsComponent } from './user-dashboard-accountdetails/user-dashboard-accountdetails.component';
import { UserDashboardCalanderComponent } from './user-dashboard-calander/user-dashboard-calander.component';
import { UserDashboardMyeventsComponent } from './user-dashboard-myevents/user-dashboard-myevents.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventRSVPComponent } from './event-rsvp/event-rsvp.component';
import { EventBuyTicketsComponent } from './event-buy-tickets/event-buy-tickets.component';
import { EventItemComponent } from './event-item/event-item.component';
import { ArtistItemComponent } from './artist-item/artist-item.component';
import { ArtistProfileAboutComponent } from './artist-profile-about/artist-profile-about.component';
import { ArtistDashboardInboxComponent } from './artist-dashboard-inbox/artist-dashboard-inbox.component';



@NgModule({
  declarations: [
    AppComponent,
    TestapiComponent,
    FooterComponent,
    NavbarComponent,
    OurstoryComponent,
    HomepageComponent,
    HomepageHeroimageComponent,
    HowItWorksComponent,
    ArtistGridComponent,
    EventsGridComponent,
    HomepageGetinvolvedComponent,
    ArtistSearchResultsComponent,
    ArtistProfileComponent,
    ArtistProfileHeroimageComponent,
    ArtistProfileHostshowComponent,
    HostshowPublicShowComponent,
    HostshowPrivateShowComponent,
    ArtistProfileEventPrefereanceComponent,
    ArtistProfileMediaComponent,
    ArtistDashboardComponent,
    ArtistDashboardProfileComponent,
    ArtistDashboardAccoutDetailsComponent,
    ArtistDashboardCalanderComponent,
    ArtistDashboardMyeventsComponent,
    UserDashboardComponent,
    UserDashboardProfileComponent,
    UserDashboardAccountdetailsComponent,
    UserDashboardCalanderComponent,
    UserDashboardMyeventsComponent,
    EventPageComponent,
    EventRSVPComponent,
    EventBuyTicketsComponent,
    EventItemComponent,
    ArtistItemComponent,
    ArtistProfileAboutComponent,
    ArtistDashboardInboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
