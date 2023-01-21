import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

export interface IProfile {
    name: string;
	position: string;
	picture: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'stats-preview-card';

	profiles: IProfile[] = [
		{
            name: 'Bill Mahoney',
		    position: 'Produce owner',
		    picture: '/assets/photo1.png',
        },
		{
            name: 'Shae Le',
		    position: 'Tech Lead',
		    picture: '/assets/photo3.png',
        },
		{
            name: 'Griff Richards',
		    position: 'Developer',
		    picture: '/assets/photo5.png',
        },
		{
            name: 'Saba Cabrera',
		    position: 'Art Director',
		    picture: '/assets/photo2.png',
        },
		{
            name: 'Skylah Lu',
		    position: 'UX Designer',
		    picture: '/assets/photo4.png',
        },
		{
            name: 'Stan John',
		    position: 'Developer',
		    picture: '/assets/photo6.png',
        },
	]

	isMobileOrTablet$!: Observable<boolean>;
	isTablet$!: Observable<boolean>;
	isDesktop$!: Observable<boolean>;

	vm$: Observable<{
		isMobile: boolean;
		isTablet: boolean;
		isDesktop: boolean;
	}> | undefined;
	
	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit() {
		this.isMobileOrTablet$ = this.breakpointObserver.observe('(width <= 992px)').pipe(map((state: BreakpointState) => state.matches));
		/* this.isTablet$ = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.Tablet]).pipe(map((state: BreakpointState) => state.matches));
		this.isDesktop$ = this.breakpointObserver.observe(Breakpoints.XLarge).pipe(map((state: BreakpointState) => state.matches)); */

		/* this.vm$ = combineLatest([
			this.isMobile$,
			this.isTablet$,
			this.isDesktop$
		]).pipe(map(([isMobile, isTablet, isDesktop]) => ({isMobile, isTablet, isDesktop}))); */
	}
}