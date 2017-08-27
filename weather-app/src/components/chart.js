import React                          from 'react';
import _                              from 'lodash';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { SparklinesReferenceLine }    from 'react-sparklines';

function average(numbers) {
    return _.round(_.sum(numbers) / numbers.length);
};

export default (props) => {
    return (
        <div>
            <Sparklines svgWidth={180} svgHeight={100} data={props.data}>
                <SparklinesLine color={props.colour} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>
        </div>
    );
}