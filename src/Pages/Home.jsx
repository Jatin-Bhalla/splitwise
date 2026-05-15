import './Home.css'
import Card from '../Components/Card';
import Button from '../Components/Button';
import ListBox from '../Components/ListBox';
import { useState } from "react";

export default function Home({ events }) {
  //console.log(events);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [paidBy, setPaidBy] = useState("");
  const [splitType, setSplitType] = useState("");

  const splitMethods = [
    "Equally",
    "By Percentage",
    "By shares",
    "Exact Amount"
  ];

  function calculate() {

    const total = Number(amount);

    if (!paidBy || !splitType || !total) {
      alert("Fill all fields");
      return;
    }

    if (events.length === 0) {
      alert("No friends added");
      return;
    }

    if (splitType === "Equally") {

      const peopleCount = events.length;

      const splitAmount = total / peopleCount;

      alert(`Each person pays ₹${splitAmount.toFixed(2)}`);
    }

    if (splitType === "By Percentage") {
      alert("Percentage split coming soon");
    }

    if (splitType === "By shares") {
      alert("Shares split coming soon");
    }

    if (splitType === "Exact Amount") {
      alert("Exact amount split coming soon");
    }
  }

  return (
    <div className="home-container">

      <Card
        id="one"
        showInput={true}
        showIcon={true}
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
        placeholder="0.00"
        type="text"
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

      <Button
        label="Calculate"
        onClick={calculate}
      />

    </div>
  );
}