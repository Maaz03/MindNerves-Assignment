import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  list: any[] = [];
  itemsList: any[] = [];
  constructor(private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('orderData')) {
      this.list = JSON.parse(localStorage.getItem('orderData'));
    }
  }

  showDetails(item) {
    this.itemsList = item.itemsList;
  }

  back() {
    this.route.navigate(['']);
  }
}
