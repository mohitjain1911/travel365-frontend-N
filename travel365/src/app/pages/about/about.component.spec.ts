import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutComponent]
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        expect(component.title).toBe('About Travel365');
    });

    it('should have correct mission', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        expect(component.mission).toBe('Making travel accessible and memorable for everyone around the world.');
    });

    it('should have 4 stats', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        expect(component.stats.length).toBe(4);
    });

    it('should have 4 team members', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        expect(component.team.length).toBe(4);
    });

    it('should return correct stats count', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        expect(component.getStatsCount()).toBe(4);
    });

    it('should return correct team size', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        expect(component.getTeamSize()).toBe(4);
    });

    it('should get team member by name', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        const member = component.getTeamMemberByName('John Doe');
        expect(member).toBeDefined();
        expect(member?.role).toBe('CEO & Founder');
    });

    it('should return undefined for invalid team member name', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        const member = component.getTeamMemberByName('Invalid Name');
        expect(member).toBeUndefined();
    });

    it('should get stat by label', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        const stat = component.getStatByLabel('Happy Travelers');
        expect(stat).toBeDefined();
        expect(stat?.value).toBe('10,000+');
    });

    it('should return undefined for invalid stat label', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        const stat = component.getStatByLabel('Invalid Label');
        expect(stat).toBeUndefined();
    });

    it('should have all required stat properties', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        component.stats.forEach(stat => {
            expect(stat.label).toBeDefined();
            expect(stat.value).toBeDefined();
        });
    });

    it('should have all required team member properties', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        const component = fixture.componentInstance;
        component.team.forEach(member => {
            expect(member.name).toBeDefined();
            expect(member.role).toBeDefined();
            expect(member.avatar).toBeDefined();
        });
    });

    it('should render title in template', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('About Travel365');
    });

    it('should render mission in template', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Making travel accessible and memorable');
    });

    it('should render all stat cards', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const statCards = compiled.querySelectorAll('.stat-card');
        expect(statCards.length).toBe(4);
    });

    it('should render all team cards', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const teamCards = compiled.querySelectorAll('.team-card');
        expect(teamCards.length).toBe(4);
    });

    it('should render company story', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Our Story');
        expect(compiled.textContent).toContain('Founded in 2010');
    });

    it('should render team section heading', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('Meet Our Team');
    });

    it('should render stat values', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('10,000+');
        expect(compiled.textContent).toContain('150+');
    });

    it('should render team member names', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.textContent).toContain('John Doe');
        expect(compiled.textContent).toContain('Jane Smith');
    });
});
