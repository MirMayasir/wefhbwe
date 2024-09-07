import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayflightComponent } from './displayflight/displayflight.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { HomeComponent } from './home/home.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { CovidRefundComponent } from './top-flight-routes/covid-refund/covid-refund.component';
import { HeroSectionComponent } from './travel-blogs/hero-section/hero-section.component';
import { DestinationCardsComponent } from './travel-blogs/destination-cards/destination-cards.component';
import { LatestBlogsComponent } from './travel-blogs/latest-blogs/latest-blogs.component';
import { ConnectingflightComponent } from './travel-blogs/connectingflight/connectingflight.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "mybookings", component:DisplayflightComponent},
  {path: "bookings", component:BookflightComponent},
  {path: "contactus", component:ContactusComponent},
  {path: "admin-panel", component:AdminMessageComponent},
  {path: "confirmbookings/:bookingId", component:ConfirmBookingComponent},
  {path: "covid-refund",component:CovidRefundComponent},
  {path: "hero-section",component:HeroSectionComponent},
  {path: "destination-cards",component:DestinationCardsComponent},
  {path: "latest-blogs",component:LatestBlogsComponent},
  {path: "connectingflight",component:ConnectingflightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
