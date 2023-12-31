import imgReactnecita from './assets/images/Reactnecita.png'
import Button from './components/Button'
import HappyParagraph from './components/HappyParagraph'


const Header = () => {
  const title = 'Hola, soy Reactnecita!'
  return(
    <div className="head-container">
      <img className="avatar" src={imgReactnecita} alt="Reactnecita's Avatar" />
      <h1 className="text-center">{title}</h1>
    </div>
  )
}

export default function App () {
  const happy = true
  const fruits = ['🍇', '🍓', '🍍', '🥝']
  return (
    <>
      <Header/>
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

