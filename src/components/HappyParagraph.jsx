import PropTypes from 'prop-types'

export default function HappyParagraph(props) {
    return (
        <p>{props.isHappy ? 'Soy un párrafo feliz' : 'Soy un párrafo triste'}</p>
    )
}

HappyParagraph.propTypes = {
    isHappy: PropTypes.bool.isRequired
}