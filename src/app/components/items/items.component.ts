import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { mockTransactions } from '../../mock-transactions/mock-transactions';
import { FilterComponent } from '../filter/filter.component';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';

interface Transaction {
  id?: string;
  createdAt: Date;
  name: string;
  amount: number;
  type?: string;
  category: string;
  paymentMethod: string;
  status?: string;
  referenceNumber?: string;
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    FilterComponent,
    AddTransactionComponent,
  ],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  Title: string = 'Erhimuebru-lendastack-assessment';
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  selectedTransactionIndex: number | null = null;
  newTransaction: Transaction = {
    id: '',
    createdAt: new Date(),
    name: '',
    amount: 0,
    category: '',
    paymentMethod: '',
  };
  searchTerm: string = '';

  ngOnInit(): void {
    this.transactions = mockTransactions;
    this.filteredTransactions = this.transactions;
  }

  openModal(index: number) {
    this.selectedTransactionIndex = index;
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  onBackgroundClick(event: MouseEvent) {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && !modalContent.contains(event.target as Node)) {
      this.closeModal();
    }
  }

  closeModal() {
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  confirmDelete() {
    if (this.selectedTransactionIndex !== null) {
      this.deleteTransaction(this.selectedTransactionIndex);
    }
    this.closeModal();
  }

  deleteTransaction(index: number): void {
    this.transactions.splice(index, 1);
    this.filteredTransactions = this.transactions;
  }

  searchTransactions(): void {
    if (this.searchTerm) {
      this.filteredTransactions = this.transactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredTransactions = this.transactions;
    }
  }

  onTransactionAdded(transaction: any) {
    this.transactions.push(transaction);
    this.filteredTransactions = this.transactions;
  }

  onSearch(searchTerm: string) {
    if (searchTerm) {
      this.filteredTransactions = this.transactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredTransactions = this.transactions;
    }
  }
}
