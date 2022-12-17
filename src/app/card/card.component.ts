import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: object[] = [];

  ngOnInit(): void {
      this.products=[
        {
          id:1,
          name:'products'

        },
        {
          id:2,
          name:'products'

        },
        {
          id:3,
          name:'products'

        },
      ]
  }
}
