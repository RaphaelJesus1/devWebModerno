import './Display.css'

export default props =>
    <div className={`display ${props.historic ? "historic":""}`}>
        {props.value}
    </div>