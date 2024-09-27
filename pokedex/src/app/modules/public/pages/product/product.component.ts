import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../shared/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, productBody } from '../../../../shared/models/product';
import { state } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  cargaDatos: 'none' | 'loading' | 'done' | 'error' = "none";
  createProductState: 'none' | 'loading' | 'done' | 'error' = "none";
  Product: Product[] = [];
  showFormProduct: 'none' | 'edit' | 'add' = 'none';
  formProduct: FormGroup;
  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ){
    this.formProduct = this.fb.group({
      code:['',[Validators.required, Validators.maxLength(6)]],
      name:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description:['',[Validators.required, Validators.minLength(20)]],
      price:['',[Validators.required]],
      stock:['',[Validators.required]],
      state:['',[Validators.required]],
    });
  }
  ngOnInit(): void{
    this.listAll();
  }
  listAll(){
    this.cargaDatos = 'loading';
    this.productService.list().subscribe({
      next:(data) => {
        this.cargaDatos = 'done',
        this.Product = data;
      },
      error: (_) => {
        this.cargaDatos = 'error';
      }
    });
  }
  AddProduct() {
    this.showFormProduct = 'add';
    this.createProductState = 'none';
  }
  RemoveProduct(product:Product) {
    product.remove = true;
  }
  confirmDelete(productId:number){
    this.productService.remove(productId).subscribe({
      next: () => {
        this.Product = this.Product.filter(p => p.id != productId);
      },
      error: () => {}
    });
  }
  cancelDelete(product:Product){
    product.remove = false;
  }
  createProduct(){
    console.log(this.formProduct);
    this.createProductState = 'loading';
    this.productService.create(this.formProduct.value as productBody).subscribe({
      next: (data) => {
        this.createProductState = 'done';
        this.products.push(data);
      },
      error: () => {
        this.createProductState = 'error';
      }
    });
  }

}
