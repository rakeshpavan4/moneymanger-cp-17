import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'

// eslint-disable-next-line
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="MoneyManagerContainer">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to Your <span className="span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="Add-History-container">
          <div className="AddTransactionContainer">
            <h1>Add Transaction</h1>
            <form className="input-container">
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                className="title-input"
                placeholder="TITLE"
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                className="amount-input"
                placeholder="AMOUNT"
              />
              <label htmlFor="type">TYPE</label>
              <select className="type-input">
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="button" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1>History</h1>
            <ul className="history-table">
              <li className="history-details">
                <p className="cell">Title</p>
                <hr className="line" />
                <p className="cell">Amount</p>
                <hr className="line" />

                <p className="cell">Type</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
