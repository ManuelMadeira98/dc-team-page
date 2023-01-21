import { Component, Input } from '@angular/core';
import { IProfile } from '../app.component';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
	@Input() profile!: IProfile;
}
