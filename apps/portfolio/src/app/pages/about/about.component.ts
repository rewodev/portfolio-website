import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
  value: string;
}

@Component({
  selector: 're-wo-dev-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills: Skill[] = [
    { name: 'HTML / CSS', value: '90%' },
    { name: 'JavaScript / TypeScript', value: '90%' },
    { name: 'Angular', value: '95%' },
    { name: 'React', value: '40%' },
    { name: 'Java', value: '90%' },
    { name: 'nodeJS', value: '80%' },
    { name: 'Spring Boot', value: '85%' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
