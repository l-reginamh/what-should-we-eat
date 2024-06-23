import { useState } from 'react'
import restaurantData from './assets/json/restaurant.json';
import "nes.css/css/nes.min.css";
import "./App.css";
import Preferences from './components/Preferences';

function App() {
  interface PreferencesForms {
      halal: string;
      mall: string;
      cuisine: string
  }
  
  const [whatToEat, setWhatToEat] = useState<string | undefined>("")
  const [preferences, setPreferences] = useState("no");
  const [preferencesForm, setPreferencesForm] = useState({
    halal: '',
    mall: '',
    cuisine: ''
  })

  const handlePreferences = (preferences: string) => {
      setPreferences(preferences);
  }

  const handlePreferencesForm = (preferences: PreferencesForms) => {
      setPreferencesForm(preferences);
  }

  const decideForMe = () => {
    if (preferences == "no") {
      const randomNumber = Math.floor(Math.random() * restaurantData.length);
      const data = restaurantData.find((d) => d.ID == randomNumber);
      setWhatToEat(data?.Name);
    }
    else {
      const filteredRestaurants = restaurantData.filter((d) => { return d.Halal == "yes" })
      let randomNumber = Math.floor(Math.random() * restaurantData.length);
      let found = false;
      while(!found) {
        const data = filteredRestaurants.find((d) => d.ID == randomNumber);
        if (data?.Name != undefined) {
          setWhatToEat(data?.Name);
          found = true;
        }
        randomNumber = Math.floor(Math.random() * restaurantData.length);
      }
    }
  };

  return (
    <div className="App size-full">
      <div className='text-2xl mb-3 text-center size-full'>What are we eating?</div>
      <Preferences preferences={preferences} preferencesForm={preferencesForm} onSelectPreferences={handlePreferences} onSelectPreferencesForm={handlePreferencesForm}></Preferences>
      <button type="button" className="nes-btn is-success size-full mt-3 mb-3" onClick={decideForMe}>Let's Go!</button>
      { (whatToEat != "") && <><div className="nes-container is-rounded is-centered size-full mt-3">{whatToEat}</div></> }
      
      {/* <div className="nes-container is-rounded">
        <h3>Decide For Me!</h3>
        <button type="button" className="nes-btn is-success" onClick={decideForMe}>Let's Go!</button>
        <div className='mt-3'>
          {whatToEat > -1 && <div className="nes-container is-rounded">{restaurantData[whatToEat].Name}</div>}
        </div>
      </div> */}
      <dialog className="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
        <form method="dialog">
          <p className="title">{whatToEat}</p>
          <menu className="dialog-menu">
            <button className="nes-btn">Cancel</button>
            <button className="nes-btn is-primary">Confirm</button>
          </menu>
        </form>
      </dialog>
      <dialog className="nes-dialog is-dark is-rounded" id="error-dialog">
        <form method="dialog">
          <p className="title">{whatToEat}</p>
          <menu className="dialog-menu">
            <button className="nes-btn">Cancel</button>
            <button className="nes-btn is-primary">Confirm</button>
          </menu>
        </form>
      </dialog>
    </div>
  )
}

export default App
