import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Component for displaying the contact form page/section.
 */
@Component({
  selector: 're-wo-dev-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /**
   * The contact form group.
   */
  form!: FormGroup;

  /**
   * Getter for the name form control.
   */
  get name(): FormControl {
    return <FormControl>this.form.get('name');
  }

  /**
   * Getter for the email form control.
   */
  get email(): FormControl {
    return <FormControl>this.form.get('email');
  }

  /**
   * Getter for the message form control.
   */
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

  /**
   * Handles the submit event of the form.
   * Validates all controls if form is invalid.
   */
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
