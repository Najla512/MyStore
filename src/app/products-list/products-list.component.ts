import { Component ,OnInit, Output} from '@angular/core';
import {proudctslist}from '../models/proudcts_list'
import { ProudtslistService } from '../services/proudtslist.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
    proudct:proudctslist[]=[] ;

  constructor(private httpService: ProudtslistService) { }

  ngOnInit():void{
    this.httpService.getUsers().subscribe( res => {
      this.proudct = res;
    
    })

  }

  
  }
