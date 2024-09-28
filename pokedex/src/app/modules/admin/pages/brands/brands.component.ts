import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../../shared/services/brand.service';
import { Brand, BrandBody } from '../../../../shared/models/brand';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  cargaDatos: 'none' | 'loading' | 'done' | 'error' = "none";
  createBrandState: 'none' | 'loading' | 'done' | 'error' = "none";
  brands: Brand[] = [];
  showFormBrand: 'none' | 'edit' | 'add' = 'none';
  formBrand: FormGroup;
  constructor(
    private brandService: BrandService,
    private fb: FormBuilder
  ) {
    this.formBrand = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
    });

  }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.cargaDatos = 'loading';
    this.brandService.list().subscribe({
      next: (data) => {
        this.cargaDatos = 'done',
        this.brands = data;
      },
      error: (_) => {
        this.cargaDatos = 'error';
      }
    });
  }
  addBrand() {
    this.showFormBrand = "add";
    this.createBrandState = 'none';
  }

  removeBrand(brand: Brand) {
    brand.remove = true;
  }
  confirmDelete(brandId: number) {
    this.brandService.remove(brandId).subscribe({
      next: (res) => {
        // this.listAll();
        this.brands = this.brands.filter(b => b.id != brandId);
      },
      error: (err) => {}
    });
  }
  cancelDelete(brand: Brand) {
    brand.remove = false;
  }

  createBrand(){
    console.log(this.formBrand);
    this.createBrandState = 'loading';
    this.brandService.create(this.formBrand.value as BrandBody).subscribe({
      next: (data) => {
        this.createBrandState = 'done';
        // this.listAll();
        this.brands.push(data);
      },
      error: (err) => {
        this.createBrandState = 'error';
      }
    });
  }
}
