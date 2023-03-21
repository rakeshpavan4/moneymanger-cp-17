// Write your code here
import {Component} from 'react'
import TransactionItem from '../TransactionItem'
import './index.css'

class MoneyDetails extends Component {
  render() {
    return (
      <div className="MoneyDetailsContainer">
        <div className="balanceContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
          <div className="balanceInfo">
            <p>Your Balance</p>
            <p data-testid="balanceAmount">Rs 0</p>
          </div>
        </div>
        <div className="incomeContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
          <div className="incomeInfo">
            <p>Your Income</p>
            <p data-testid="incomeAmount">Rs 0</p>
          </div>
        </div>
        <div className="expensesContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
          <div className="expensesInfo">
            <p>Your Expenses</p>
            <p data-testid="expensesAmount">Rs 0</p>
          </div>
        </div>
        <TransactionItem />
      </div>
    )
  }
}
export default MoneyDetails
