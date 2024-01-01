export default function FruitsList() {
    const fruits = ['🍇', '🍓', '🍍', '🥝', '🍉']
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