import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent]
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.componentInstance;
        expect(component.title).toBe('Welcome to Travel365');
    });

    it('should have correct subtitle', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.componentInstance;
        expect(component.subtitle).toBe('Your Gateway to Amazing Destinations');
    });

    it('should have 4 features', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.componentInstance;
        expect(component.features.length).toBe(4);
    });

    it('should return correct feature count', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.componentInstance;
        expect(component.getFeatureCount()).toBe(4);
    });

    it('should return feature by index', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.componentInstance;
        const feature = component.getFeatureByIndex(0);
        expect(feature).toBeDefined();
        expect(feature.icon).toBe('🌍');
        expect(feature.title).toBe('Worldwide Destinations');
    });

    it('should have all required feature properties', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.componentInstance;
        component.features.forEach(feature => {
            expect(feature.icon).toBeDefined();
            expect(feature.title).toBeDefined();
            expect(feature.description).toBeDefined();
        });
    });

    it('should render title in template', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Welcome to Travel365');
    });

    it('should render subtitle in template', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Your Gateway to Amazing Destinations');
    });

    it('should render all features', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const featureCards = compiled.querySelectorAll('.feature-card');
        expect(featureCards.length).toBe(4);
    });

    it('should render feature icons', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('🌍');
        expect(compiled.textContent).toContain('✈️');
        expect(compiled.textContent).toContain('🏨');
        expect(compiled.textContent).toContain('🎫');
    });

    it('should render CTA button', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const button = compiled.querySelector('.cta-button');
        expect(button).toBeTruthy();
        expect(button?.textContent).toContain('Start Your Journey');
    });
});
