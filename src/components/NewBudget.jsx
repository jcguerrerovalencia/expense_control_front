import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (budget < 0) {
      setMessage("Not a valid budget");
      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };

  return (
    <div className="container-budget container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
          <label>Define Budget</label>
          <input
            className="new-budget"
            type="number"
            placeholder="Add your budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Add" />
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
