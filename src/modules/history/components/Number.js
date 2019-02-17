import React from 'react';

const Number = (props) => {
    return (
        <div className="card mb-1">
            <div className="card-body">
                <p className="card-text">{props.number}</p>
            </div>
        </div>
    );
}

export default Number;