import Expense from "./Expense";

const ExpenseList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  filteredExpenses,
}) => {
  return (
    <div className="list-expenses container">
      {filter ? (
        <>
          <h2>
            {filteredExpenses.length > 0
              ? "Expenses"
              : "There are no expenses in this category"}
          </h2>
          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {expenses.length > 0 ? "Expenses" : "There are no expenses to show"}
          </h2>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
