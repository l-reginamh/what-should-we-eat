import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "nes.css/css/nes.min.css";
import "./App.css";

function App() {
  const [whatToEat, setWhatToEat] = useState(-1)
  const midValleyFoodHalal = ["MyeongDong Topokki", "Madam Kwan's", "NALE - The Nasi Lemak Company", "BananaBro", "Alexis Bistro", "Plan B", "Aeon Food Market", "Amarin", "Red Red Botak Head Restaurant", "Sepiring", "Nando's", "Original Penang Kayu Nasi Kandar", "Chili's Grill & Bar", "Upeh", "Ah Cheng Laksa", "Carl's Jr.", "Stuff'd", "Ko Hyang", "Ali, Muthu & Ah Hock", "The Chicken Rice Shop", "The Manhattan Fish Market", "DubuYo", "Sukiya Tokyo Bowls & Noodles", "4Fingers Crispy Chicken", "BBQ Town", "A&W", "Penang Flavours Express", "Madam Jean Pan Mee", "Coliseum Cafe & Grill Room", "Nyonya Colors", "Hoshino Coffee", "Pulau Ketam Yong Tau Foo", "SeoulNami Korean BBQ", "Sushi Zanmai", "Sushi Jiro", "The Travelling Duck", "Killer Gourmet Burgers KGB", "Sushi King", "Mogu Yakiniku", "Manjoe Taiwanese Dumplings", "Secret Recipe", "Bungkus Kaw Kaw", "I Love Yoo!", "Tamago EN", "Oriental Kopi", "Don Don Donki", "CU Mart", "TukTuk", "Christine's Bakery", "Burger King", "dipndip", "Chateraise", "Komugi", "Lavender", "myBurgerLab", "San Francisco Coffee Express"]

  const decideForMe = () => {
    const randomNumber = Math.floor(Math.random() * midValleyFoodHalal.length);
    setWhatToEat(randomNumber);
  };

  return (
    <div className="App">
      <div className="nes-container is-rounded">
        <p>Decide For Me!</p>
        <button type="button" className="nes-btn is-success" onClick={decideForMe}>Let's Go!</button>
        <div className='mt-3'>
          {whatToEat > -1 && <div className="nes-container is-rounded is-dark">{midValleyFoodHalal[whatToEat]}</div>}
        </div>
      </div>
    </div>
  )
}

export default App
