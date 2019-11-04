import React, {useState} from 'react';

function ReactSliderWithValueBubble () {

    const [value, setValue] = useState(0);

    const onRangeChange = (event) => {

        let {value} = event.target;

        setValue(value)

        let {max, min,clientWidth} = event.target
        console.log("==max, min, value==", max, min, value, clientWidth);

        var range = max - min;

        var position = ((value - min) / range) * 100;

        var positionOffset = Math.round(clientWidth * position / 100) - (clientWidth / 2);

        let pos = 'calc(' + position + '% - ' + positionOffset + 'px)'

        document.getElementById('rangeVal').style.left = pos;
        // $('input[type="range"]').on('input', function() {
        //
        //     var control = $(this),
        //         controlMin = control.attr('min'),
        //         controlMax = control.attr('max'),
        //         controlVal = control.val(),
        //         controlThumbWidth = control.data('thumbwidth');
        //
        //     var range = controlMax - controlMin;
        //
        //     var position = ((controlVal - controlMin) / range) * 100;
        //     var positionOffset = Math.round(controlThumbWidth * position / 100) - (controlThumbWidth / 2);
        //     var output = control.next('output');
        //
        //     output
        //         .css('left', 'calc(' + position + '% - ' + positionOffset + 'px)')
        //         .text(controlVal);
        //
        // });
    }
    return (
        <form>

            <div className="range-control">
                <input id="inputRange" type="range"
                       min="0" max="100" step="5"
                       value={value}
                       data-thumbwidth="20"
                       onChange={(e) => onRangeChange(e)}
                />
                <output name="rangeVal" id='rangeVal'>{value}</output>
            </div>

        </form>
    );
}

export default ReactSliderWithValueBubble;