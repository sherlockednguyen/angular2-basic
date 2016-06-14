import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Hero } from './hero';


@Component({
	selector: 'hero-form',
	templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent{
	powers = [
		'Really Smart', 'Super Flexible',
		'Super hot', 'Weather changer'
	];
	active: boolean = true;

	model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
	submitted = false;

	onsubmit(){
		this.submitted = true;
	}

	get diagnostic() { return JSON.stringify(this.model);}

	newHero(){
		this.model = new Hero(42, '', '');
		this.active = false;
		setTimeout(() => this.active = true, 0);
	}
}