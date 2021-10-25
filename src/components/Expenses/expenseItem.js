import ExpenseDate from './expenseDate';
import Card from '../UI/Card';
import './expenseItem.css'
import { useState } from 'react';

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler} >Click me!</button>
    </Card>
  )
};

export default ExpenseItem