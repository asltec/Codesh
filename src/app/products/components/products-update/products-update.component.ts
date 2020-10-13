import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../../api/product-api.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {

  public editForm: FormGroup;
  //submitted = false;

  constructor(private formBuilder: FormBuilder,
    private productApiService: ProductApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.iniciarForm();

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.preencherForm(id);
  }

  private iniciarForm() {
    this.editForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      type: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  private preencherForm(id) {
    this.productApiService.getById(id).subscribe(product => {
      if (product) {
        this.editForm.patchValue({
          title: product.title,
          type: product.type,
          price: product.price
        });
      }
    })
  }

  get myForm() {
    return this.editForm.controls;
  }

  onSubmit() {
    if (!this.editForm.valid) {
      return false;
    } else {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.productApiService.updateProduct(id, this.editForm.value)
        .subscribe(res => {
          this.router.navigateByUrl('/employees-list');
          console.log('Product updated successfully!')
        }, (error) => {
          console.log(error)
        })
    }

    this.router.navigate(['/products']);
  }
}


