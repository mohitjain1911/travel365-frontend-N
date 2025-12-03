import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    title = 'Welcome to Travel365';
    subtitle = 'Your Gateway to Amazing Destinations';

    features = [
        {
            icon: '🌍',
            title: 'Worldwide Destinations',
            description: 'Explore destinations across all continents'
        },
        {
            icon: '✈️',
            title: 'Best Deals',
            description: 'Find the best travel deals and packages'
        },
        {
            icon: '🏨',
            title: 'Premium Hotels',
            description: 'Book stays at top-rated accommodations'
        },
        {
            icon: '🎫',
            title: 'Easy Booking',
            description: 'Simple and secure booking process'
        }
    ];

    getFeatureCount(): number {
        return this.features.length;
    }

    getFeatureByIndex(index: number) {
        return this.features[index];
    }
}
