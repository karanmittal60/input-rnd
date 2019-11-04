import React, {useState} from 'react'

function CustomInput() {

//     var valueHover = 0;
//     function calcSliderPos(e) {
//         // console.log("==parseInt(e.target.getAttribute('max'),10)==", parseInt(e.target.getAttribute('max'),10));
//         // console.log("==parseInt(e.target.getAttribute('max'),10)==", parseInt(e.target.getAttribute('max')));
//         // console.log("==clientWidth js==", e.target.clientWidth);
//         return (e.offsetX / e.target.clientWidth) *  parseInt(e.target.getAttribute('max'),10);
//     }
//
// //attach to slider and fire on mousemove
//     if (document.getElementById('seekslider') !== null) {
//         document.getElementById('seekslider').addEventListener('mousemove', function(e) {
//             valueHover = calcSliderPos(e).toFixed(2);
//             document.getElementById('durtimeText').innerHTML = valueHover;
//         });
//     }
//
//     if (document.getElementById('seekslider') !== null) {
//         document.getElementById('seekslider').addEventListener('change', function (e) {
//             var valueSeeked = e.target.value;
//             document.getElementById('seek').innerHTML = valueSeeked;
//             document.getElementById('test').innerHTML = valueSeeked === valueHover;
//         });
//     }


    // const [mouseOver, setMouseOver] = useState('500');
    // const bodilyInjuryLimitMouseOver = (event: any) => {
    //     console.log("event", event);
    //     event.target.addEventListener('mousemove', (e: any) => {
    //         let hoverValue = ((e.offsetX / e.target.clientWidth) * parseInt(event.target.max, 10)).toFixed(0);
    //         console.log("==hoverValue==", hoverValue);
    //         setMouseOver(hoverValue)
    //     })
    // };


    const [state, setState] =  useState({
        value: 0,
        hoverValue: 0
    });

    const onChangeRange = (event) => {
        console.log("==event==", event);
        let {value} = event.target

        setState((prevState) => {
            return {...prevState, value: value}
        });

        // code for tooltip
        // console.log("==event ==", event);
        let {max, min,clientWidth} = event.target
        // console.log("==max, min, value==", max, min, value, clientWidth);

        var range = max - min;

        var position = ((value - min) / range) * 100;
        //
        console.log("==range==", range);
        console.log("==position==", position);

        var positionOffset = Math.round(clientWidth * position / 100) - (clientWidth / 2);

        console.log("==positionOffset==", positionOffset);
        var output = document.getElementById('output');
        console.log("==output==", output);

        let pos = 'calc(' + position + '% - ' + positionOffset + 'px)'

        console.log("==pos==", pos);
        document.getElementById("output").style.left = pos;
        /*code for tooltip end here */

        /*css tricks*/
        // let newPoint = (value - min) / (max - min);
        // console.log("==newpoint===", newPoint);
        // let  offset = -1.3;
        //
        // let newPlace = 0;
        // if (newPoint < 0) {
        //     newPlace = 0;
        // } else if (newPoint > 1) {
        //     newPlace = clientWidth;
        // }else {
        //     newPlace = clientWidth * newPoint + offset; offset -= newPoint;
        // }
        //
        // document.getElementById("output").style.left = newPlace;
        // document.getElementById("output").style.marginLeft = offset + "%";

    };

    const onMouseOver = (event) => {
        event.target.addEventListener('mousemove', (e) => {
            let hoverValue = ((e.offsetX / e.target.clientWidth) * parseInt(e.target.max, 10)).toFixed(0);
            setState((prevState) => {
                return {...prevState, hoverValue }
            })
        })


    }
    return (
        <div>
            <h1>CustomInput</h1>
            <div className='input-container'>
                <input id="seekslider"
                       type="range"
                       min="0"
                       max="100"
                       value={state.value}
                       step="1"
                       style={{width:"300px"}}
                       title={state.hoverValue}
                       onChange={onChangeRange}
                       className='slider'
                       onMouseOver={onMouseOver}
                />
                <span id='output' className='output'>{state.value}</span>
            </div>
                <br/>
            <div>
                valueHover : <span>{state.hoverValue}</span><br/>
                valueSeeked :  <span>{state.value}</span><br/>
                valueHover expect to be equal valueSeeked : <span>{state.hoverValue === state.value ? true : false}</span><br/>

            </div>
        </div>
    )
}

export default CustomInput;