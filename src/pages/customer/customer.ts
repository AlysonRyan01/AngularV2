import { Component } from '@angular/core';
import { CreateCustomerForm } from '../../components/create-customer-form/create-customer-form';

@Component({
  selector: 'app-customer',
  imports: [CreateCustomerForm],
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
})
export class Customer {

}
