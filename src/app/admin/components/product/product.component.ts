import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../core/model/Product';

@Component({
  selector: 'mt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product: Product;
  @Output() delete = new EventEmitter<Product>();
  @Output() edit = new EventEmitter<Product>();
}
