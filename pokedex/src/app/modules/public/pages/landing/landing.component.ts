import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService
  ){ }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.list().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error(err), 
    });
  }
}
