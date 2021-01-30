export default props =>
    <a href={`#${props.href}`}>
        <i className={`fa fa-${props.i}`}></i> {props.children}
    </a>