import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss'
})
export class AddTransactionComponent {

  newTransaction = {
    name: '',
    amount: null,
    category: '',
    paymentMethod: ''
  };

  @Output() transactionAdded = new EventEmitter<any>();

  addTransaction() {
    if (this.newTransaction.name && this.newTransaction.amount) {
      this.transactionAdded.emit(this.newTransaction);
      this.newTransaction = { name: '', amount: null, category: '', paymentMethod: '' };
    }
  }
}
