import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  id=0 ;
  constructor(  private  activatedRoute: ActivatedRoute ) {}
  ngOnInit(): void{
    this.id = this.activatedRoute.snapshot.params['id']
  }

}
