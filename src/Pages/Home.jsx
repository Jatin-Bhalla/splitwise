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

  const splitMethods = ["Equally", "Percentage", "ByShares", "ExactAmount"];

  const Total = Number(amount);
  const people = [...events];

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
        return `${person} owes ₹${splitAmount.toFixed(2)} to ${paidBy}`;
      });

      setOutput(result.join("\n"));
    }

    // ---------------- PERCENTAGE ----------------
    if (splitType === "Percentage") {
      let totalPercentage = 0;

      events.forEach((person) => {
        totalPercentage += percentages[person] || 0;
      });

      if (totalPercentage !== 100) {
        alert("Total percentage must equal 100%");
        return;
      }

      result = events.map((person) => {
        const share = (Total * (percentages[person] || 0)) / 100;

        if (person === paidBy) {
          return `${person} paid ₹${Total}`;
        }
        return `${person} owes ₹${share.toFixed(2)} to ${paidBy}`;
      });

      setOutput(result.join("\n"));
    }

    // ---------------- BY SHARES ----------------
    if (splitType === "ByShares") {
      let totalShares = 0;

      events.forEach((person) => {
        totalShares += shares[person] || 0;
      });

      if (totalShares <= 0) {
        alert("Enter valid shares");
        return;
      }

      result = events.map((person) => {
        const personShare = (Total * (shares[person] || 0)) / totalShares;

        if (person === paidBy) {
          return `${person} paid ₹${Total}`;
        }
        return `${person} owes ₹${personShare.toFixed(2)} to ${paidBy}`;
      });

      setOutput(result.join("\n"));
    }

    // ---------------- EXACT AMOUNT ----------------
    if (splitType === "ExactAmount") {
      let totalExact = 0;

      events.forEach((person) => {
        totalExact += exact[person] || 0;
      });

      if (Math.abs(totalExact - Total) > 0.01) {
        alert("Exact amounts must equal total amount");
        return;
      }

      result = events.map((person) => {
        const value = exact[person] || 0;

        if (person === paidBy) {
          return `${person} paid ₹${Total}`;
        }
        return `${person} owes ₹${value.toFixed(2)} to ${paidBy}`;
      });

      setOutput(result.join("\n"));
    }

    // ---------------- LOGS FIXED ----------------
    const logData = {
      description,
      amount: Total,
      splitType,
      paidBy,
      result,
    };

    setLogs([...logs, logData]);
  }

  return (
    <div className="home-container">
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

      <div className="row">
        <p>Paid by</p>
        <ListBox
          label="people"
          items={events}
          selected={paidBy}
          setSelected={setPaidBy}
        />
      </div>

      <div className="row">
        <p>and split</p>
        <ListBox
          label="Choose Method"
          items={splitMethods}
          selected={splitType}
          setSelected={setSplitType}
        />
      </div>

      <Button label="Calculate" onClick={calculate} />

      <Card id="three" showOutput={true} output={output} showIcon={false} />
    </div>
  );
}