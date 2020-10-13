import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsComponent } from './components/products/products.component';
import { ProductRoutingModule } from './products-routing.module';
import { ProductsUpdateComponent } from './components/products-update/products-update.component';




@NgModule({
    declarations: [
        ProductsComponent,
        ProductsUpdateComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ProductRoutingModule
    ],

})
export class ProductModule { }