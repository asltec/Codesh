import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../api/product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public file: File;
  public selecionarFiles: FileList;
  public products: any = [];

  public formData = new FormData();

  constructor(private productApiService: ProductApiService) { }

  ngOnInit(): void {
    this.listProducts();
    this.showFileName();
    
  }

  public showFileName(){
    $(document).on('change', 'input[type="file"]', function (event) { 
      var filename = $(this).val();
      if (filename == undefined || filename == ""){
      $(this).next('.label-upload').html('No file chosen');
      }
      else 
      { $(this).next('.label-upload').html(event.target.files[0].name); }
  });
  }

  public listProducts() {
    this.productApiService.getList().subscribe((product) => {
      this.products = product;
    })
  }

  removeProduct(id: number) {
    if (window.confirm('Are you sure you want to delete this product?')) {
      this.productApiService.deleteProduct(id).subscribe((data) => {
        console.log(data);
        this.listProducts();
      })
    }
  }

  onSubmit() {
    this.productApiService.sendFileProduct(this.formData).subscribe(res => {
      console.log(res);
      alert('File Uploaded Successfully')
    },
      (error) => {
        alert('Something Went Wrong !!!')
      })
  }

  uploadFileProduct(files: FileList) {
    this.formData.append('products', files[0]);
  }

}





