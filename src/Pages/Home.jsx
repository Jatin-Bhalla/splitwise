import './Home.css'
import Card from '../Components/Card';
import Button from '../Components/Button';
import DropBox from '../Components/DropBox';

export default function Home() {

  function calculate() {
    alert("Expense opened");
  }

  return (
    <div className="home-container">

      <Card id ="one"
        showInput={true}
        showIcon={true}
        icon="expense-icon"
        placeholder="Enter a Description"
        description=""
      />

      <Card id ="two"
        icon="rupee-icon"
        showInput={true}
        showIcon={true}
        placeholder="0.00"
        type="text"
      />

      <div className="row">
        <p>Paid by</p>
        
        <DropBox label="you" />
      </div>

      <div className="row">
        <p>and split</p>

        <DropBox label="equally" />
      </div>

      <Button
        label="Calculate"
        onClick={calculate}
      />

    </div>
  );
}