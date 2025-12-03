import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have title "Travel365"', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.title).toBe('Travel365');
  });

  it('should have current year', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const currentYear = new Date().getFullYear();
    expect(app.currentYear).toBe(currentYear);
  });

  it('should have 3 navigation links', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.navLinks.length).toBe(3);
  });

  it('should have correct navigation paths', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.navLinks[0].path).toBe('/home');
    expect(app.navLinks[1].path).toBe('/destinations');
    expect(app.navLinks[2].path).toBe('/about');
  });

  it('should have correct navigation labels', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.navLinks[0].label).toBe('Home');
    expect(app.navLinks[1].label).toBe('Destinations');
    expect(app.navLinks[2].label).toBe('About');
  });

  it('should return correct nav links count', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.getNavLinksCount()).toBe(3);
  });

  it('should render title in header', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.logo')?.textContent).toContain('Travel365');
  });

  it('should render navigation menu', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navMenu = compiled.querySelector('.nav-menu');
    expect(navMenu).toBeTruthy();
  });

  it('should render all navigation links', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(3);
  });

  it('should render footer with copyright', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const footer = compiled.querySelector('.main-footer');
    expect(footer).toBeTruthy();
    expect(footer?.textContent).toContain('Travel365');
    expect(footer?.textContent).toContain('All rights reserved');
  });

  it('should render router outlet', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const routerOutlet = compiled.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

  it('should have main header', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('.main-header');
    expect(header).toBeTruthy();
  });

  it('should have main content area', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const mainContent = compiled.querySelector('.main-content');
    expect(mainContent).toBeTruthy();
  });

  it('should render current year in footer', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const currentYear = new Date().getFullYear().toString();
    expect(compiled.textContent).toContain(currentYear);
  });
});
