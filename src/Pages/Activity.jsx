import { useState } from "react";
import "./Activity.css";

export default function Activity({ logs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="activity-container">

      {logs.length === 0 && (
        <p style={{ color: "#aaa" }}>No activity yet</p>
      )}

      {logs.map((item, index) => (
        <div className="activity-card" key={index}>

          <div
            className="activity-header"
            onClick={() => toggle(index)}
          >
            <h3>{item.description}</h3>
            <span>₹{item.amount}</span>
          </div>

          {openIndex === index && (
            <div className="activity-body">

              <p>
                <strong>Split Type:</strong> {item.splitType}
              </p>

              <p>
                <strong>Paid By:</strong> {item.paidBy}
              </p>

              <div className="activity-result">
                {Array.isArray(item.result) &&
                  item.result.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))
                }
              </div>

            </div>
          )}

        </div>
      ))}
    </div>
  );
}