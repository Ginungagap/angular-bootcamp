import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'boot-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {
  @Input() product: any;


  form: FormGroup;

  categories: any[] = [{
    label: 'BMW'
  }, {
    label: 'Mercedes'
  }, {
    label: 'Zhyguli'
  }, {
    label: 'Audi'
  }, {
    label: 'Toyota'
  }];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [{value: null, disabled: true}, Validators.minLength(5)],
      description: [null, Validators.pattern('[a-zA-Z]')],
      price: [null, Validators.maxLength(3)],
      category: null,
      imgUrl: [null, this.validateUrl],
      isHidden: null,
    });

    this.form.valueChanges.subscribe(value => {
      Object.assign(this.product, value);
      console.log(this.form);
    });
    if (this.product) {
      this.form.patchValue(this.product, {emitEvent: false});
      // console.log(this.form.value);
      // this.form.reset();
      // console.log(this.form.value);
      this.form.get('name').setValidators([Validators.required]);
    }

    // disable-enable field
    this.form.get('isHidden').valueChanges.subscribe(value => {
      if (value) {
        this.form.get('price').disable({emitEvent: false});
      } else {
        this.form.get('price').enable();
      }
    });
  }

  // custom validator
  validateUrl(control: AbstractControl) {
    if (control.value && !control.value.startsWith('http')) {
      return {validImgUrl: true};
    } else {
      return null;
    }
  }
}
