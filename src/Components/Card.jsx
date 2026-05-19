import "./Card.css";

export default function Card({
  showInput,
  showIcon,
  showOutput,
  output,
  icon,
  title,
  description,
  placeholder,
  type,
  value,
  onChange
}) {

  return (
    <div className="card">

      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}

      {/* INPUT CARD */}
      {showInput && (
        <div className="input-card">

          {showIcon && (
            <span className={`card-icon ${icon}`}></span>
          )}

          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />

        </div>
      )}

      {/* OUTPUT CARD */}
      {showOutput && (
        <div className="output-box">

          {showIcon && (
            <span className={`card-icon ${icon}`}></span>
          )}

          <pre>{output}</pre>

        </div>
      )}

    </div>
  );
}