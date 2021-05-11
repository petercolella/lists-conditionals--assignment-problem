import React from 'react';

const validationComponent = (props) => {
    let textLengthMessage = 'Text too short';

    if (props.inputLength >= 5) {
        textLengthMessage = 'Text long enough'
    }

    return (
        <div>
            <p>{textLengthMessage}</p>
        </div>
    )
}

export default validationComponent;