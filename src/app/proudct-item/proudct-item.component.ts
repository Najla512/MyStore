import { Component ,Input} from '@angular/core';
import {proudctslist}from '../models/proudcts_list'


@Component({
  selector: 'app-proudct-item',
  templateUrl: './proudct-item.component.html',
  styleUrls: ['./proudct-item.component.css']
})
export class ProudctItemComponent {

  @Input() product: proudctslist
constructor(){
  this.product=new proudctslist;
}
  addToCart(){}
}
