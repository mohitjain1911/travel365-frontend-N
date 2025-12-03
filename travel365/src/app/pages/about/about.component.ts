import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
    name: string;
    role: string;
    avatar: string;
}

interface CompanyStat {
    label: string;
    value: string;
}

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    title = 'About Travel365';
    mission = 'Making travel accessible and memorable for everyone around the world.';

    stats: CompanyStat[] = [
        { label: 'Happy Travelers', value: '10,000+' },
        { label: 'Destinations', value: '150+' },
        { label: 'Years Experience', value: '15+' },
        { label: 'Travel Partners', value: '500+' }
    ];

    team: TeamMember[] = [
        { name: 'John Doe', role: 'CEO & Founder', avatar: '👨‍💼' },
        { name: 'Jane Smith', role: 'Travel Director', avatar: '👩‍💼' },
        { name: 'Mike Johnson', role: 'Operations Manager', avatar: '👨‍💻' },
        { name: 'Sarah Williams', role: 'Customer Success', avatar: '👩‍💻' }
    ];

    getStatsCount(): number {
        return this.stats.length;
    }

    getTeamSize(): number {
        return this.team.length;
    }

    getTeamMemberByName(name: string): TeamMember | undefined {
        return this.team.find(member => member.name === name);
    }

    getStatByLabel(label: string): CompanyStat | undefined {
        return this.stats.find(stat => stat.label === label);
    }
}
