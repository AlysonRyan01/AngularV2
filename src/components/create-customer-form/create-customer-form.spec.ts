import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerForm } from './create-customer-form';

describe('CreateCustomerForm', () => {
  let component: CreateCustomerForm;
  let fixture: ComponentFixture<CreateCustomerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
