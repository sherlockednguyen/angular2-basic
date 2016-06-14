import {Component} from '@angular/core';
import { HeroFormComponent } from './hero-form.component';

@Component({
    selector: 'my-app',
    template:
    `
    	<h1>My First Angular 2 App</h1>
    	<hero-form></hero-form>
    `,
    directives: [HeroFormComponent]

})
export class AppComponent {
}
