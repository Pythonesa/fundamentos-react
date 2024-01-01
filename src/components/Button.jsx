import PropTypes from 'prop-types'

export default function Button({text}) {
    const handleClick = () => alert('No voy a hacer nada por más que hagas click!')
    return (
        <button
            onClick={handleClick}
        >{text}</button>
    )
}
Button.propTypes = {
    text: PropTypes.string.isRequired
}