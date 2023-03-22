// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details} = props
  const {title, amount, optionId} = details

  return (
    <li className="historyRow">
      <div className="cell">
        {' '}
        <p>{title}</p>
      </div>

      <hr className="line" />
      <div className="cell">
        {' '}
        <p>Rs {amount}</p>
      </div>

      <hr className="line" />
      <div className="delete-row">
        <p>{optionId}</p>
        <button type="button" className="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="deleteimg"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
