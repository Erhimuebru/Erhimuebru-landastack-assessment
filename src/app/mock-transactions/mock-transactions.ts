export const mockTransactions = [
    {
        id: "TXN001",
        createdAt: new Date('2024-09-04T16:00:00'),
        name: "Office Supplies Purchase",
        amount: 12000,
        type: "Debit",
        category: "Office Supplies",
        paymentMethod: "Credit Card",
        status: "Completed",
        referenceNumber: "REF0001"
    },
    {
        id: "TXN002",
        createdAt: new Date('2024-09-04T16:00:00'),
        name: "Monthly Subscription Fee",  
        amount: 1500,
        type: "Debit",
        category: "Subscriptions",
        paymentMethod: "Bank Transfer",
        status: "Completed",
        referenceNumber: "REF0002"
       
    },
    {
       id: "TXN003",
       createdAt: new Date('2024-09-04T16:00:00'),
        name: "Client Payment",
       amount: 45000,
        type: "Credit",
        category: "Income",
        paymentMethod: "Bank Transfer",
        status: "Completed",
        referenceNumber: "REF0003",
       
    },
    {
       id: "TXN004",
       createdAt: new Date('2024-09-04T16:00:00'),
        name: "Software Subscription",
        amount: 30000,
        type: "Credit",
        category: "Refunds",
        paymentMethod: "Credit Card",
        status: "Completed",
        referenceNumber: "REF0004",
    
    }
]
