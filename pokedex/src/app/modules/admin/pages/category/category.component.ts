import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../shared/services/category.service';
import { Category, CategoryBody } from '../../../../shared/models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoriesComponent implements OnInit {
  cargaDatos: 'none' | 'loading' | 'done' | 'error' = "none";
  createCategoryState: 'none' | 'loading' | 'done' | 'error' = "none";
  categories: Category[] = [];
  showFormCategory: 'none' | 'edit' | 'add' = 'none';
  formCategory: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    this.formCategory = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
    });

  }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.cargaDatos = 'loading';
    this.categoryService.list().subscribe({
      next: (data) => {
        this.cargaDatos = 'done',
        this.categories = data;
      },
      error: (_) => {
        this.cargaDatos = 'error';
      }
    });
  }
  addCategory() {
    this.showFormCategory = "add";
    this.createCategoryState = 'none';
  }

  removeCategory(category: Category) {
    category.remove = true;
  }
  confirmDelete(categoryId: number) {
    this.categoryService.remove(categoryId).subscribe({
      next: (res) => {
        // this.listAll();
        this.categories = this.categories.filter(c => c.id != categoryId);
      },
      error: (err) => {}
    });
  }
  cancelDelete(category: Category) {
    category.remove = false;
  }

  createCategory(){
    console.log(this.formCategory);
    this.createCategoryState = 'loading';
    this.categoryService.create(this.formCategory.value as CategoryBody).subscribe({
      next: (data) => {
        this.createCategoryState = 'done';
        // this.listAll();
        this.categories.push(data);
      },
      error: (err) => {
        this.createCategoryState = 'error';
      }
    });
  }
}