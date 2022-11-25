import React from 'react'

const ResultsPage = (props) => {

    function copyCode() {
        // console.log(`SPINTHEWHEEL${props.offer}`)
        navigator.clipboard.writeText(`SPINTHEWHEEL${props.offer}`)
        alert("Code Copied !")
    }

    return (
        <div className='resultDiv'>
            <p>You've Won </p>
            <div>
                <div>
                    <span id='myInput'>{props.offer} % Off</span>
                </div>
                <div>
                    <button onClick={() => copyCode()} >Copy Code</button>
                </div>
            </div>
        </div>
    )
}

export default ResultsPage
