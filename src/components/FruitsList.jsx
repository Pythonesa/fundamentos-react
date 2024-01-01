export default function FruitsList() {
    const fruits = ['🍇', '🍓', '🍍', '🥝', '🍉']
    return (
        <ul>
            {
                fruits.map((fruit, id) => (
                    <li key={id}>{fruit}</li>
                ))
            }
        </ul>
    )
}