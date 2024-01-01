import Button from './components/Button'
import HappyParagraph from './components/HappyParagraph'
import Header from './components/header/HeaderContainer'
import Fruits from './components/FruitsList'


export default function App () {
  const happy = true
  const fruits = ['🍇', '🍓', '🍍']
  const fruits2 = ['🍉', '🍎', '🥝']
  return (
    <>
      <Header />
      <Button text={happy ? 'Botoncito feliz' : 'Botoncito triste'}/>
      <HappyParagraph isHappy={happy}/>
      <Fruits fruits={fruits}/>
      <Fruits fruits={fruits2}/>
    </>
  )
}

