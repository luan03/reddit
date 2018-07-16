import * as React from 'react';

const Counter = (props: any) => {
    return <span className="counter">
                <span className="control up fas fa-caret-up" onClick={props.up} />
                <span className="total">{props.votes}</span>
                <span className="control down fas fa-caret-down" onClick={props.down} />
            </span>
}

export default Counter