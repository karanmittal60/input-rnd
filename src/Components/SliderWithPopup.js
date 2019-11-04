import React, {Component} from 'react';

function SliderWithPopup (propa) {

    const handleInputChange = () => {


    }

    var oldSliderVal = -1;

    var bubble = document.getElementById('bubble');
    var sliderInput = document.getElementById('sliderInput');
    function init()
    {

        sliderInput.addEventListener('mousemove', moveBubble);
        sliderInput.addEventListener('mousedown', show);
        sliderInput.addEventListener('mouseup', hide);
    }

    var show = function(e)
    {
        bubble.style.left = e.clientX-(bubble.offsetWidth/2)+'px';
        bubble.style.opacity = '1';
    }

    var hide = function()
    {
        bubble.style.opacity = '0';
    }

    var moveBubble = function(e)
    {
        if(oldSliderVal !== '0' && oldSliderVal !== '100')
        {
            bubble.style.left = e.clientX-(bubble.offsetWidth/2)+'px';
        }
        var sliderVal = sliderInput.value
        bubble.innerHTML = sliderVal;
        oldSliderVal = sliderVal;
    }
    return (
        <div>
            <input id="sliderInput" type="range" min="0" max="100"
                   ng-model="cellphoneSelectedRange"
                   onChange={handleInputChange}
            />

            <div id="bubble" className='bubble'></div>
        </div>
    );
}

export default SliderWithPopup;