import React, {useState} from 'react';
import './App.css';
import Input from './Input'


import CustomInput from './CustomInput'
import CustomizedSlider from "./MaterialUi";

function App(props) {
    const [state, setState] = useState({
        value: 0,
    })
    return (
        <div className="App">
            <h1>Range Sample</h1>
            {/*<Input/>*/}

            <CustomInput />

            <div>
                {/*<CustomizedSlider/>*/}


            </div>
        </div>
    );
}

export default App;
