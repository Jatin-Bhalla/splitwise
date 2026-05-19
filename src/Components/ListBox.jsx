import { useState , useEffect} from "react";


export default function ListBox({
  label,
  items = [],
  selected,
  setSelected,
}) {
  const [isOpen, setAsOpened] = useState(false);

  function togglelistBox() {
    setAsOpened(!isOpen);
  }

  function handleSelect(item) { 
    setSelected(item);
    setAsOpened(false);
  }

  return (
    <div
      className="listBox"
      style={{
        position: "relative",
        display: "inline-block",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <button
        onClick={togglelistBox}
        style={{
          padding: "12px 18px",
          borderRadius: "10px",
          border: "1px solid #b026ff",
          backgroundColor: "#1a001f",
          color: "#f0cfff",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 0 12px #b026ff",
          transition: "0.3s",
        }}
      >
        {selected || label}
      </button>

      {isOpen && (
        <ul
          className="droplistBox"
          style={{
            position: "absolute",
            top: "65px",
            left: 0,
            zIndex: 1000,
            listStyle: "none",
            padding: 0,
            margin: 0,
            width: "220px",
            border: "1px solid #b026ff",
            borderRadius: "12px",
            backgroundColor: "#140018",
            boxShadow: "0 0 20px rgba(176, 38, 255, 0.8)",
            overflow: "hidden",
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              style={{
                padding: "14px",
                cursor: "pointer",
                color: "#f5d9ff",
                backgroundColor: "#1f0028",
                borderBottom:
                  index !== items.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3a004d";
                e.target.style.boxShadow = "0 0 10px #c44dff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#1f0028";
                e.target.style.boxShadow = "none";
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}