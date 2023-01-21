import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [AppComponent, ProfileComponent],
	imports: [BrowserModule, LayoutModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
