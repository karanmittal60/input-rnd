import React, {useState} from 'react';
import './App.css';
import Input from './Input'


import CustomInput from './CustomInput'
import CustomizedSlider from "./MaterialUi";
import ReactSliderWithValueBubble from "./Components/ReactSliderWithValueBubble";
import SliderWithPopup from "./Components/SliderWithPopup";
import InputRangeSlider from "./Components/InputRangeSlider";

function App(props) {
    const [state, setState] = useState({
        value: 0,
    })
    return (
        <div>
            <h1>Range Sample</h1>
            {/*<Input/>*/}

            {/*<CustomInput />*/}

            <div>
                {/*<CustomizedSlider/>*/}


            </div>


            {/*<ReactSliderWithValueBubble/>*/}

            {/*<SliderWithPopup/>*/}

            <InputRangeSlider/>
        </div>
    );
}

export default App;
