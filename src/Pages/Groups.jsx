import { useState } from "react";
import "./Groups.css";

export default function Groups({ logs = [] }) {
  const [box, setBox] = useState(null);

  function toggle(i) {
    setBox(box === i ? null : i);
  }

  return (
    <div className="activity-container">

      {logs.length === 0 && (
        <p style={{ color: "#aaa" }}>No Groups Formed</p>
      )}

      {logs.map((item, i) => (
        <div key={i} className="activity-card">

          <div
            className="activity-header"
            onClick={() => toggle(i)}
          >
            <h3>{item.description}</h3>

            <div className="people-row">
              {(item.participants || []).map((person, idx) => (
                <div key={idx} className="circle">
                  {person?.charAt(0).toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {box === i && (
            <div className="activity-body">
              <p>Paid ₹{item.amount} by {item.paidBy}</p>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}