import { useState, useEffect } from "react";
import Message from "./Message";
import CloseBtn from "../img/close.svg";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense,
}) => {
  const [name, setName] = useState("");
  const [ammount, setAmmount] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setAmmount(editExpense.ammount);
      setCategory(editExpense.category);
      setId(editExpense.id);
      setDate(editExpense.date);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setEditExpense({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, ammount, category].includes("")) {
      setMessage("All fields are required");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    saveExpense({ name, ammount, category, id, date });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="close modal" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`form ${animateModal ? "animate" : "close"}`}
      >
        <legend>{editExpense.name ? "Edit Expense" : "New Expense"}</legend>
        {message && <Message type="error">{message}</Message>}

        <div className="field">
          <label htmlFor="name">Expense Name</label>

          <input
            id="name"
            type="text"
            placeholder="Add the name of the expense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="ammount">Ammount</label>

          <input
            id="ammount"
            type="number"
            placeholder="Add the ammount of the expense"
            value={ammount}
            onChange={(e) => setAmmount(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""> -- Select </option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="expenses">Other Expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>

        <input
          type="submit"
          value={editExpense.name ? "Save Changes" : "Add Expense"}
        />
      </form>
    </div>
  );
};

export default Modal;
