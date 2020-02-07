import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  productList: Iproduct[];
  productDesc: Iproduct;
  constructor(private dService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productList = this.dService.getProducts();
    this.getProduct;
  }

addToCart(p: Iproduct){
  this.dService.addToCart(p);
}

getProduct(){
  const id = this.route.snapshot.paramMap.get('id');
  const productName = this.route.snapshot.paramMap.get('productName');

  this.dService.getProduct(id).subscribe(
    item => this.productDesc = item
  )
}

}
