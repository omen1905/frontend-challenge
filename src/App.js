import { useState } from 'react'

import {AllCats} from "./components/AllCats";
import {FavoritesCats} from "./components/FavoritesCats";

import './App.css';

function App() {
    const [ typeComponent, setTypeComponent ] = useState('all')

    const menu = [
        {
            text: 'Все котики',
            type: 'all'
        },
        {
            text: 'Любимые котики',
            type: 'favorites'
        },
    ]

    return (
        <div className="App">


            <div className="Menu">
                {menu.map(({text, type}) =>
                    <div key={type} onClick={() => setTypeComponent(type)}
                         className={typeComponent === type ? 'LinkActive' : 'Link'}>
                        {text}
                    </div>)}
            </div>


            <div className="Components">
                {typeComponent === 'all' ? <AllCats/> : <FavoritesCats/> }
            </div>
        </div>
    );
}

export default App;
