
const expenseList = [
{
        id: '1',
        title: 'Audible Subscription',
        amount: 16,
        amountSaved: 16.77,
        dueDate: new Date("2020/01/05"),
        dueDateLabel: 'the 5th of every month',
        moneyIn: 'No Automatic Funding',
        contribution: 'Set Aside Target Amount',
        moneyOut: 'No Automatic Spending',
        note: '',
        recentTransactions: []
},
{
    id: '2',
    title: 'Emergency Fund',
    amount: 250.00,
    amountSaved: 409.19,
    dueDate: new Date("2020/01/05"),
    dueDateLabel: 'the 5th of every month',
    moneyIn: 'On Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'No Automatic Spending',
    note: '',
    recentTransactions: []
},
{
    id: '3',
    title: 'Giving',
    amount: 150,
    amountSaved: 0,
    dueDate: new Date("2020/01/05"),
    dueDateLabel: 'the 5th of every month',
    moneyIn: 'On Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'No Automatic Spending',
    note: '$40 for Moriel and $40 for HeartCry Ministries, $30 for NR, 40 for $40 for Moriel and $40 for HeartCry Ministries, $30 for NR, 40 for   ',
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
    dueDate: new Date("2020/01/05"),
    dueDateLabel: 'the 5th of every month',
    moneyIn: 'On Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'Tracfone Airtime',
    note: '',
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
    dueDate: new Date("2020/01/05"),
    dueDateLabel: 'the 5th of every month',
    moneyIn: 'On Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'Tracfone Airtime',
    note: '',
    recentTransactions: [
        {
            title: 'Capital One',
            date: new Date(),
            amount: 230
        }
    ]
},
{
    id: '6',
    title: 'Gym',
    amount: 17,
    amountSaved: 21.05,
    dueDate: new Date("2020/01/05"),
    dueDateLabel: 'the 5th of every month',
    moneyIn: 'On Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'Workout Anytime',
    note: '',
    recentTransactions: [
        {
            title: 'Workout Anytime',
            date: new Date(),
            amount: 15
        }
    ]
},
{
    id: '7',
    title: 'Hair Cuts',
    amount: 14,
    amountSaved: 45.57,
    dueDate: new Date("2020/01/05"),
    dueDateLabel: 'the 5th of every month',
    moneyIn: 'On Payday',
    contribution: 'Set Aside Target Amount',
    moneyOut: 'Oasis Spa',
    note: '',
    recentTransactions: [
        {
            title: 'Oasis Spa',
            date: new Date(),
            amount: 30
        }
    ]
},
// {
//     id: '8',
//     title: 'Rent',
//     amount: 150,
//     amountSaved: 110.01,
//     dueDate: new Date("2020/01/05"),
//     dueDateLabel: 'the 5th of every month',
//     moneyIn: 'On Payday',
//     contribution: 'Set Aside Target Amount',
//     moneyOut: 'Paypal (Sending to Mom)',
//     note: '',
//     recentTransactions: []
// },
// {
//     id: '9',
//     title: 'Spotify',
//     amount: 10.69,
//     amountSaved: 0,
//     dueDate: new Date("2020/01/05"),
//     dueDateLabel: 'the 5th of every month',
//     moneyIn: 'On Payday',
//     contribution: 'Set Aside Target Amount',
//     moneyOut: 'Spotify',
//     note: '',
//     recentTransactions: []
// },
// {
//     id: '10',
//     title: 'Vacation',
//     amount: 85,
//     amountSaved: .74,
//     dueDate: new Date("2020/01/05"),
//     dueDateLabel: 'the 5th of every month',
//     moneyIn: 'On Payday',
//     contribution: 'Set Aside Target Amount',
//     moneyOut: 'No Automatic Spending',
//     note: '',
//     recentTransactions: []
// },
// {
//     id: '11',
//     title: 'Vehicle Insurance',
//     amount: 114,
//     amountSaved: 15.04,
//     dueDate: new Date("2020/01/05"),
//     dueDateLabel: 'the 5th of every month',
//     moneyIn: 'On Payday',
//     contribution: 'Set Aside Target Amount',
//     moneyOut: 'No Automatic Spending',
//     note: '',
//     recentTransactions: []
// },
// {
//     id: '12',
//     title: 'Vehicle Oil Change',
//     amount: 13,
//     amountSaved: .05,
//     dueDate: new Date("2020/01/05"),
//     dueDateLabel: 'the 5th of every month',
//     moneyIn: 'On Payday',
//     contribution: 'Set Aside Target Amount',
//     moneyOut: 'No Automatic Spending',
//     note: '',
//     recentTransactions: []
// },
// {
//     id: '13',
//     title: 'Vehicle Tax and Registration (192/12)',
//     amount: 16,
//     amountSaved: 0,
//     dueDate: new Date("2020/01/05"),
//     dueDateLabel: 'the 5th of every month',
//     moneyIn: 'On Payday',
//     contribution: 'Set Aside Target Amount',
//     moneyOut: 'No Automatic Spending',
//     note: '',
//     recentTransactions: []
// }
]

export default expenseList;