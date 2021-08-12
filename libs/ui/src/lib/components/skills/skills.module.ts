import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { IntersectionObserverModule } from '../../directives';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, IntersectionObserverModule],
  exports: [SkillsComponent]
})
export class SkillsModule {}
