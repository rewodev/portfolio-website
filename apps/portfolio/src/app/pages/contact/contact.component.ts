import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 're-wo-dev-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  get name(): FormControl {
    return <FormControl>this.form.get('name');
  }
  get email(): FormControl {
    return <FormControl>this.form.get('email');
  }
  get message(): FormControl {
    return <FormControl>this.form.get('message');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      subject: [],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field);
        control && control.markAsTouched({ onlySelf: true });
      });
      return;
    }
    console.log(this.form);
  }
}
