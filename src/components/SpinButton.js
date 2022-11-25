import React from 'react'

const SpinButton = (props) => {

    return (
        <div className='spinPage'>
            <button id='spinButton' onClick={() => props.handleSpin()}>SPIN</button>
        </div>
    )
}

export default SpinButton
