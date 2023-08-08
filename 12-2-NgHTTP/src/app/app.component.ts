import { Component } from '@angular/core';
import { ProductsService } from './products.service'; // added

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '12-2-NgHTTP';
  products!: any[];

  constructor(private productsService: ProductsService) { } // added

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
    });
  }

}
