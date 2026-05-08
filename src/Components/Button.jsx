import './Button.css'

export default function Button(props) {


    return(
        <div id="button-container">
            <button onClick={props.calculate}>
                {props.label}
            </button>
        </div>
    )
}