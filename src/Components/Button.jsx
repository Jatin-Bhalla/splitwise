import './Button.css'

export default function Button(props) {


    return(
        <div id="button-container">
            <button onClick={props.onClick}>
                {props.label}
            </button>
        </div>
    )
}