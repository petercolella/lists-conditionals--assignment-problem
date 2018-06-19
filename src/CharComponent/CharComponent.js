import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="char">
            <p>{props.character}</p>
        </div>
    )
}

export default charComponent;