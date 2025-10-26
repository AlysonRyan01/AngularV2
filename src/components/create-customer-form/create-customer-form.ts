import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';
import { ProgressBar } from 'primeng/progressbar';

@Component({
  selector: 'app-create-customer-form',
  imports: [FormsModule, InputMaskModule, ProgressBar],
  templateUrl: './create-customer-form.html',
  styleUrl: './create-customer-form.scss',
})
export class CreateCustomerForm {
  private _messageService = inject(MessageService);
  isLoading : boolean = false;

  customerName:string = '';
  customerEmail: string = '';
  customerPhone: string = '';
  customerDocument: string = '';

  async createCustomer() {
    this.isLoading = true;
    const formIsValid = this.validate();

    if (!formIsValid) {
      this.isLoading = false;
      return;
    }

    this.successSnackBar('Dados validados');
    this.isLoading = false;
  }

  successSnackBar(message:string) {
    this._messageService.add({ severity: 'success', summary: 'Sucesso!', detail: message, life: 3000 });
  }

  errorSnackBar(message:string) {
    this._messageService.add({ severity: 'error', summary: 'Erro!', detail: message, life: 3000 });
  }

  validate() : boolean {
    if (this.customerName.length < 5 || this.customerName.length > 50) {
      this.errorSnackBar('O nome deve ter entre 5 e 50 caracteres');
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.customerEmail)) {
      this.errorSnackBar('Digite um E-mail válido');
      return false;
    }

    const phone = this.customerPhone.replace(/\D/g, '');
    if (phone.length < 10 || phone.length > 11) {
      this.errorSnackBar('O telefone deve ter 10 ou 11 números');
      return false;
    }

    const document = this.customerDocument.replace(/\D/g, '');
    if (document.length < 11 || document.length > 14) {
      this.errorSnackBar('Documento inválido');
      return false;
    }

    return true;
  }
}
