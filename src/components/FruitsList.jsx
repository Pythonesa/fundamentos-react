import PropTypes from 'prop-types'

export default function FruitsList({fruits}) {
    
    return (
        <div className="panel">
        <ul>
            {
                fruits.map((fruit, id) => (
                    <li key={id}>{fruit}</li>
                ))
            }
        </ul>
        </div>
    )
}

FruitsList.propTypes = {
    fruits: PropTypes.array.isRequired
}