import React from "react";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({
  budget,
  setBudget,
  setExpenses,
  isValidBudget,
  setIsValidBudget,
  expenses,
}) => {
  return (
    <header>
      <h1>Expense Planner</h1>

      {isValidBudget ? (
        <BudgetControl
          budget={budget}
          setBudget={setBudget}
          expenses={expenses}
          setExpenses={setExpenses}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
