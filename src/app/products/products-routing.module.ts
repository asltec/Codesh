import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProductsUpdateComponent } from './components/products-update/products-update.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
    },
    {
        path: ':id',
        component: ProductsUpdateComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],

    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule {

}