export default function Button (props) {
    console.log('BUTTON RENDER')
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.children}
        </button>
    )
}