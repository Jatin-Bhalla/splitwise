import "./Card.css";

export default function Card({showInput,showIcon, icon ,title, description , placeholder, type , value , onChange}) {

  //or use props and  props.title and props.description
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {showIcon &&(
        <span className={'card-icon ${icon}'}></span>
      )}
      {showInput &&(
      <input type= {type}
       placeholder={placeholder} 
         value={value}
  onChange={onChange}/>
      )}

    </div>
  );
}