import React, {Fragment, useState} from 'react';
import InputRange from 'react-input-range';

// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'


function Input() {

    const [state, setState] = useState({
        price: 0
    })
    const changeInputRange = (event) => {

        console.log("==event==", event);


        // setState(prevState => {
        //     return {...prevState, price: event.target.value}
        // })

    }
    return (
        <Fragment>
            <h1>Input</h1>
            <div className='range-sample'>
                <input type="range"
                       name='price'
                       min='0'
                       max='500'
                       step='50'
                       // value={state.price}
                       onChange={(e) => changeInputRange(e)}
                />
                <span>{state.price}</span>
            </div>

            <div>
                <h1>react-input-range</h1>
                <InputRange
                    maxValue={20}
                    minValue={0}
                    value={10}
                    onChange={value => setState({ price:value })}
                />
                <InputRange
                    formatLabel={value => `${value}cm`}
                    value={state.price}
                    onChange={value => setState({ price:value })} />
            </div>
            <div>
                <h1>react-rangeslider</h1>
                <div className='slider'>
                    <Slider
                        min={0}
                        max={100}
                        value={state.price}
                        // onChangeStart={this.handleChangeStart}
                        onChange={value => setState({ price:value })}
                        // onChangeComplete={this.handleChangeComplete}
                        // step={50}
                        // orientation={String}
                        // reverse={true}
                        tooltip={true}
                        // labels={Object}
                        // handleLabel={String}
                        // format={Function}
                        // onChangeStart={Function}
                        // onChange={Function}
                        // onChangeComplete={Function}
                    />
                    <div className='value'>{state.price }</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Input