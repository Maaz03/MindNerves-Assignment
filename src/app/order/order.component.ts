import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  orderList: any[] = [];

  constructor(private formBuilder: FormBuilder,private route: Router) {}

  ngOnInit() {
    localStorage.clear();
    this.createForm();
  }

  createForm() {
    this.orderForm = this.formBuilder.group({
      orderNo: [],
      purchaseDate: [],
      customerName: [],
      totalAmount: [],
      itemsList: this.formBuilder.array([])
    })
    this.addItems();
    this.addItems();
  }

  get items() {
    return this.orderForm.controls['itemsList'] as FormArray;
  }

  addItems() {
    this.items.push(this.createItems());
  }

  createItems(): FormGroup {
    return this.formBuilder.group({
      itemName: [],
      quantity: [],
      pricePerUnit: [],
      totalAmount: []
    })
  }

  deleteRow(index: number) {
    this.items.removeAt(index);
  }

  save() {
    this.orderList.push(this.orderForm.value);
    localStorage.setItem("orderData",JSON.stringify(this.orderList));
  }

  viewDetails() {
    this.route.navigate(['view-details']);
  }

  reset() {
    this.createForm();
  }
}
