import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  customerData: string;

  constructor(private userService: UserService) { }   

  ngOnInit() {
  }
  fetchCustomerData() {
    debugger;
    this.userService.getCustomerData().subscribe(
      (result: string) => {
        this.customerData = result;
      }
    );
  }    

}
