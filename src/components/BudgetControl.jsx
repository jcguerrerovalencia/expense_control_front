import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  budget,
  expenses,
  setExpenses,
  setBudget,
  setIsValidBudget,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.ammount + total,
      0
    );
    const totalAvailable = budget - totalSpent;

    //Calculate percentage
    const newPercentage = (
      100 -
      ((budget - totalSpent) / budget) * 100
    ).toFixed(2);

    setPercentage(newPercentage);

    setSpent(totalSpent);
    setAvailable(totalAvailable);
  }, [expenses]);

  const formatAmmount = (ammount) => {
    return ammount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const result = confirm("Do you want to reset budget and expenses?");
    if (result) {
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="container-budget containter shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={percentage}
          text={`${percentage}% spent`}
        />
      </div>
      <div className="content-budget">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget:</span> {formatAmmount(budget)}
        </p>
        <p className={`${available < 0 ? "negative" : ""}`}>
          <span>Available:</span> {formatAmmount(available)}
        </p>
        <p>
          <span>Spent:</span> {formatAmmount(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
