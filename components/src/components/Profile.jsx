
function Profile({ ...props }) {
    return (
        <img
            style={props.style}
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
        />
    )
}

export default Profile