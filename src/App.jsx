import Button from './components/Button'
import HappyParagraph from './components/HappyParagraph'
import Header from './components/header/HeaderContainer'



export default function App () {
  const happy = true
  const fruits = ['🍇', '🍓', '🍍', '🥝']
  return (
    <>
      <Header />
      <Button text={happy ? 'Botoncito feliz' : 'Botoncito triste'}/>
      <HappyParagraph isHappy={happy}/>
      <ul>
        {
          fruits.map((fruit, id) => (
            <li key={id}>{fruit}</li>
          ))
        }
      </ul>
    </>
  )
}

