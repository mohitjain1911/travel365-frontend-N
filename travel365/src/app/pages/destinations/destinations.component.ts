import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Destination {
    id: number;
    name: string;
    country: string;
    image: string;
    price: number;
    rating: number;
}

@Component({
    selector: 'app-destinations',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './destinations.component.html',
    styleUrl: './destinations.component.scss'
})
export class DestinationsComponent {
    title = 'Popular Destinations';

    destinations: Destination[] = [
        {
            id: 1,
            name: 'Paris',
            country: 'France',
            image: '🗼',
            price: 1200,
            rating: 4.8
        },
        {
            id: 2,
            name: 'Tokyo',
            country: 'Japan',
            image: '🗾',
            price: 1500,
            rating: 4.9
        },
        {
            id: 3,
            name: 'New York',
            country: 'USA',
            image: '🗽',
            price: 1000,
            rating: 4.7
        },
        {
            id: 4,
            name: 'Dubai',
            country: 'UAE',
            image: '🏙️',
            price: 1300,
            rating: 4.6
        },
        {
            id: 5,
            name: 'Bali',
            country: 'Indonesia',
            image: '🏝️',
            price: 800,
            rating: 4.8
        },
        {
            id: 6,
            name: 'Rome',
            country: 'Italy',
            image: '🏛️',
            price: 1100,
            rating: 4.7
        }
    ];

    getDestinationCount(): number {
        return this.destinations.length;
    }

    getDestinationById(id: number): Destination | undefined {
        return this.destinations.find(d => d.id === id);
    }

    getDestinationsByPriceRange(min: number, max: number): Destination[] {
        return this.destinations.filter(d => d.price >= min && d.price <= max);
    }

    getAverageRating(): number {
        const sum = this.destinations.reduce((acc, d) => acc + d.rating, 0);
        return sum / this.destinations.length;
    }
}
