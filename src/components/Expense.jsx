import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatDate } from "../helpers";

import SavingsIcon from "../img/icon_savings.svg";
import FoodIcon from "../img/icon_food.svg";
import HouseIcon from "../img/icon_house.svg";
import ExpensesIcon from "../img/icon_expenses.svg";
import LeisureIcon from "../img/icon_leisure.svg";
import HealthIcon from "../img/icon_health.svg";
import SubscriptionIcon from "../img/icon_subscription.svg";

const iconDictionary = {
  savings: SavingsIcon,
  food: FoodIcon,
  house: HouseIcon,
  expenses: ExpensesIcon,
  leisure: LeisureIcon,
  health: HealthIcon,
  subscriptions: SubscriptionIcon,
};

const Expense = ({ expense, setEditExpense, deleteExpense }) => {
  const { category, name, ammount, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expense shadow">
          {" "}
          <div className="content-expense">
            <img src={iconDictionary[category]} alt="Expense Icon" />
            <div className="description-expense">
              <p className="category">{category}</p>
              <p className="name-expense">{name}</p>
              <p className="date-expense">
                Added on : {""}
                <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="ammount-expense">${ammount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
