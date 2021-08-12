import { Skill } from '@re-wo-dev/model';
import { Component, Input } from '@angular/core';

/**
 * Component for displaying skill bars.
 */
@Component({
  selector: 're-wo-dev-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  /**
   * The skills to display.
   */
  @Input() skills!: Skill[];
}
