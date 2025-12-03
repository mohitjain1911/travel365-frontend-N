import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { DestinationsComponent, Destination } from './destinations.component';

describe('DestinationsComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DestinationsComponent]
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        expect(component.title).toBe('Popular Destinations');
    });

    it('should have 6 destinations', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        expect(component.destinations.length).toBe(6);
    });

    it('should return correct destination count', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        expect(component.getDestinationCount()).toBe(6);
    });

    it('should get destination by id', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        const destination = component.getDestinationById(1);
        expect(destination).toBeDefined();
        expect(destination?.name).toBe('Paris');
    });

    it('should return undefined for invalid destination id', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        const destination = component.getDestinationById(999);
        expect(destination).toBeUndefined();
    });

    it('should filter destinations by price range', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        const filtered = component.getDestinationsByPriceRange(1000, 1200);
        expect(filtered.length).toBeGreaterThan(0);
        filtered.forEach(dest => {
            expect(dest.price).toBeGreaterThanOrEqual(1000);
            expect(dest.price).toBeLessThanOrEqual(1200);
        });
    });

    it('should calculate average rating', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        const avgRating = component.getAverageRating();
        expect(avgRating).toBeGreaterThan(0);
        expect(avgRating).toBeLessThanOrEqual(5);
    });

    it('should have all required destination properties', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        const component = fixture.componentInstance;
        component.destinations.forEach(destination => {
            expect(destination.id).toBeDefined();
            expect(destination.name).toBeDefined();
            expect(destination.country).toBeDefined();
            expect(destination.image).toBeDefined();
            expect(destination.price).toBeGreaterThan(0);
            expect(destination.rating).toBeGreaterThan(0);
        });
    });

    it('should render title in template', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Popular Destinations');
    });

    it('should render all destination cards', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const cards = compiled.querySelectorAll('.destination-card');
        expect(cards.length).toBe(6);
    });

    it('should render destination names', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Paris');
        expect(compiled.textContent).toContain('Tokyo');
        expect(compiled.textContent).toContain('Bali');
    });

    it('should render book now buttons', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const buttons = compiled.querySelectorAll('.book-button');
        expect(buttons.length).toBe(6);
    });

    it('should render prices', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const priceElements = compiled.querySelectorAll('.price');
        expect(priceElements.length).toBe(6);
    });

    it('should render ratings', () => {
        const fixture = TestBed.createComponent(DestinationsComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const ratingElements = compiled.querySelectorAll('.rating');
        expect(ratingElements.length).toBe(6);
    });
});
