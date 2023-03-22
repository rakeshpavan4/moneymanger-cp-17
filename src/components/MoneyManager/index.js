import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'

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
  state = {MoneyList: [], titleInput: '', amountInput: ''}

  OnAdd = event => {
    event.preventDefault()
    const {titleInput, amountInput} = this.state

    const newMoneyList = {
      id: v4(),
      title: titleInput,
      amount: amountInput,
    }

    this.setState(prevstate => ({
      MoneyList: [...prevstate.MoneyList, newMoneyList],
      titleInput: '',
      amountInput: '',
    }))
  }

  onTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  render() {
    const {MoneyList, titleInput, amountInput} = this.state
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
            <form className="input-container" onSubmit={this.OnAdd}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                className="title-input"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onTitleInput}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                value={amountInput}
                className="amount-input"
                placeholder="AMOUNT"
                onChange={this.onAmountInput}
              />
              <label htmlFor="type">TYPE</label>
              <select className="type-input">
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.displayText}>
                    {each.optionId}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
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
              {MoneyList.map(each => (
                <TransactionItem key={each.id} details={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
