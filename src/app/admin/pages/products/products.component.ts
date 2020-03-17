import {Component} from '@angular/core';
import {ProductsService} from '../../../core/services/products.service';
import {Product} from '../../../core/model/Product';

@Component({
  selector: 'mt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  list = this.productsService.list;

  editing: Partial<Product>;

  constructor(
    private readonly productsService: ProductsService
  ) {}

  edit(product: Product): void {
    this.editing = product;
  }

  delete(product): void {
    this.productsService.delete(product);
  }

  onCancel() {
    this.editing = null;
  }

  onSubmit(product: Product) {
    this.editing = null;
    if (product.id) {
      this.productsService.update(product);
    } else {
      this.productsService.create(product);
    }
  }

  create() {
    this.editing = {};
  }
}
