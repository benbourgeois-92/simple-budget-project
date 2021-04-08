
const expenseList = [
{
        id: '1',
        title: 'Dummy Expense Title',
        amount: 16,
        amountSaved: 2,
        dueDate: 'the 5th of every month',
        moneyIn: 'Payday/No Automatic Funding',
        contribution: 'Reach Target Balance/Set Aside Target Amount',
        moneyOut: 'No Automatic Spending',
        recentTransactions: []
},
{
    id: '2',
    title: 'Emergency Fund',
    amount: 250,
    amountSaved: 2000,
    dueDate: 'the 5th of every month',
    moneyIn: 'Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'No Automatic Spending',
    recentTransactions: []
},
{
    id: '3',
    title: 'Giving',
    amount: 150,
    amountSaved: 0,
    dueDate: 'the 5th of every month',
    moneyIn: 'Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'No Automatic Spending',
    recentTransactions: [
        {
            title: 'Heartcry',
            date: new Date(),
            amount: 40
        },
        {
            title: 'Moriel',
            date: new Date(),
            amount: 35
        }
]
},
{
    id: '4',
    title: 'Phone',
    amount: 20,
    amountSaved: 23.32,
    dueDate: 'the 5th of every month',
    moneyIn: 'Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'Tracfone Airtime',
    recentTransactions: [
        {
            title: 'Tracfone Airtime',
            date: new Date(),
            amount: 10
        }
    ]
},
{
    id: '5',
    title: 'Vehicle Payment',
    amount: 230,
    amountSaved: 115,
    dueDate: 'the 5th of every month',
    moneyIn: 'Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'Tracfone Airtime',
    recentTransactions: [
        {
            title: 'Capital One',
            date: new Date(),
            amount: 230
        }
    ]
}
]

export default expenseList;