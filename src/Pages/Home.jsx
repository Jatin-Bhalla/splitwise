import "./Home.css";
import Card from "../Components/Card";
import Button from "../Components/Button";
import ListBox from "../Components/ListBox";
import { useState } from "react";

export default function Home({ events, logs = [], setLogs }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState("");

  const [paidBy, setPaidBy] = useState("");
  const [splitType, setSplitType] = useState("");

  const [percentages, setPercentages] = useState({});
  const [shares, setShares] = useState({});
  const [exact, setExact] = useState({});

  const splitMethods = [
    "Equally",
    "Percentage",
    "ByShares",
    "ExactAmount",
  ];

  const Total = Number(amount);
  const people = [...events];

  // ---------- INPUT HANDLERS ----------
  function handlePercentageChange(person, value) {
    setPercentages((prev) => ({
      ...prev,
      [person]: Number(value),
    }));
  }

  function handleShareChange(person, value) {
    setShares((prev) => ({
      ...prev,
      [person]: Number(value),
    }));
  }

  function handleExactChange(person, value) {
    setExact((prev) => ({
      ...prev,
      [person]: Number(value),
    }));
  }

  // ---------- CALCULATE ----------
  function calculate() {
    if (!description.trim()) {
      alert("Enter description");
      return;
    }

    if (!amount || Total <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (!splitType) {
      alert("Select split method");
      return;
    }

    if (events.length === 0) {
      alert("No friends added");
      return;
    }

    if (!paidBy) {
      alert("Select who paid");
      return;
    }

    let result = [];

    // ---------------- EQUALLY ----------------
    if (splitType === "Equally") {
      const splitAmount = Total / people.length;

      result = people.map((person) => {
        if (person === paidBy) {
          return `${person} paid ₹${Total}`;
        }

        return `${person} owes ₹${splitAmount.toFixed(
          2
        )} to ${paidBy}`;
      });
    }

    // ---------------- PERCENTAGE ----------------
    else if (splitType === "Percentage") {
      let totalPercentage = 0;

      events.forEach((person) => {
        totalPercentage += Number(percentages[person] || 0);
      });

      if (totalPercentage !== 100) {
        alert("Total percentage must equal 100%");
        return;
      }

      result = events.map((person) => {
        const share =
          (Total * Number(percentages[person] || 0)) / 100;

        if (person === paidBy) {
          return `${person} paid ₹${Total}`;
        }

        return `${person} owes ₹${share.toFixed(2)} to ${paidBy}`;
      });
    }

    // ---------------- BY SHARES ----------------
    else if (splitType === "ByShares") {
      let totalShares = 0;

      events.forEach((person) => {
        totalShares += Number(shares[person] || 0);
      });

      if (totalShares <= 0) {
        alert("Enter valid shares");
        return;
      }

      result = events.map((person) => {
        const personShare =
          (Total * Number(shares[person] || 0)) / totalShares;

        if (person === paidBy) {
          return `${person} paid ₹${Total}`;
        }

        return `${person} owes ₹${personShare.toFixed(
          2
        )} to ${paidBy}`;
      });
    }

    // ---------------- EXACT AMOUNT ----------------
    else if (splitType === "ExactAmount") {
      let totalExact = 0;

      events.forEach((person) => {
        totalExact += Number(exact[person] || 0);
      });

      if (Math.abs(totalExact - Total) > 0.01) {
        alert("Exact amounts must equal total amount");
        return;
      }

      result = events.map((person) => {
        const value = Number(exact[person] || 0);

        if (person === paidBy) {
          return `${person} paid ₹${Total}`;
        }

        return `${person} owes ₹${value.toFixed(2)} to ${paidBy}`;
      });
    }

    setOutput(result.join("\n"));

    // ---------------- SAVE LOG ----------------
    const logData = {
      description,
      amount: Total,
      splitType,
      paidBy,
      result,
      participants: [...events],
    };

    setLogs([...logs, logData]);
  }

  return (
    <div className="home-container">
      {/* DESCRIPTION */}
      <Card
        id="one"
        showInput={true}
        showIcon={true}
        showOutput={false}
        icon="expense-icon"
        placeholder="Enter a Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* AMOUNT */}
      <Card
        id="two"
        icon="rupee-icon"
        showInput={true}
        showIcon={true}
        showOutput={false}
        placeholder="0.00"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* PAID BY */}
      <div className="row">
        <p>Paid by</p>

        <ListBox
          label="people"
          items={events}
          selected={paidBy}
          setSelected={setPaidBy}
        />
      </div>

      {/* SPLIT TYPE */}
      <div className="row">
        <p>and split</p>

        <ListBox
          label="Choose Method"
          items={splitMethods}
          selected={splitType}
          setSelected={setSplitType}
        />
      </div>

      {/* -------- DYNAMIC RENDERING LIST -------- */}

      {/* PERCENTAGE INPUTS */}
      {splitType === "Percentage" && (
        <div className="split-list">
          <h3>Enter Percentage</h3>

          {events.map((person) => (
            <div className="split-item" key={person}>
              <label>{person}</label>

              <input
                type="number"
                placeholder="0%"
                value={percentages[person] || ""}
                onChange={(e) =>
                  handlePercentageChange(person, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      )}

      {/* SHARES INPUTS */}
      {splitType === "ByShares" && (
        <div className="split-list">
          <h3>Enter Shares</h3>

          {events.map((person) => (
            <div className="split-item" key={person}>
              <label>{person}</label>

              <input
                type="number"
                placeholder="Shares"
                value={shares[person] || ""}
                onChange={(e) =>
                  handleShareChange(person, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      )}

      {/* EXACT AMOUNT INPUTS */}
      {splitType === "ExactAmount" && (
        <div className="split-list">
          <h3>Enter Exact Amount</h3>

          {events.map((person) => (
            <div className="split-item" key={person}>
              <label>{person}</label>

              <input
                type="number"
                placeholder="₹0.00"
                value={exact[person] || ""}
                onChange={(e) =>
                  handleExactChange(person, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      )}

      {/* BUTTON */}
      <Button label="Calculate" onClick={calculate} />

      {/* OUTPUT */}
      <Card
        id="three"
        showOutput={true}
        output={output}
        showIcon={false}
      />
    </div>
  );
}