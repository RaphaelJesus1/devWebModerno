import { Link } from "react-router-dom";

export default props =>
    <Link to={props.href}>
        <i className={`fa fa-${props.i}`}></i> {props.children}
    </Link>