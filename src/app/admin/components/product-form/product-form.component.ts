import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../core/model/Product';

@Component({
  selector: 'mt-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnChanges {
  form: FormGroup;
  @Input() product: Product;
  @Output() onCancel = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<Product>();

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      promo: formBuilder.group({
        requiredAmount: '',
        priceAmount: '',
      })
    });
  }

  ngOnChanges() {
    this.form.reset();
    this.form.patchValue(this.product);
  }

  save() {
    const { value } = this.form;
    const product = {
      ...value,
      id: this.product.id,
    };

    if (!(value.promo.requiredAmount && value.promo.priceAmount)) {
      delete product.promo;
    }
    this.onSubmit.emit(product);
  }
}
