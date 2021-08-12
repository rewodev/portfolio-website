import { Component } from '@angular/core';
import { Skill } from '@re-wo-dev/model';

/**
 * Component for displaying the about me page/section.
 */
@Component({
  selector: 're-wo-dev-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  /**
   * The list of skills.
   */
  skills: Skill[] = [
    { name: 'HTML / CSS / SASS', value: '90%' },
    { name: 'JavaScript / TypeScript', value: '90%' },
    { name: 'C#', value: '75%' },
    { name: 'Angular', value: '95%' },
    { name: 'AngularJS', value: '70%' },
    { name: 'React', value: '40%' },
    { name: 'Java', value: '90%' },
    { name: 'node.js', value: '80%' },
    { name: 'Spring Boot', value: '85%' }
  ];
}
