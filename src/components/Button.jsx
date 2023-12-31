import PropTypes from 'prop-types'

export default function Button(props) {
    return (
        <button>{props.text}</button>
    )
}
Button.propTypes = {
    text: PropTypes.string.isRequired
}