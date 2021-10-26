import React, { useState } from "react";
import "./expenses.css";
import ExpenseItem from "./expenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onCHangeFilter={filterChangedHandler} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
