import React, { useState } from 'react'

const TryLuckPage = (props) => {

    const [userEmail, setUserMail] = useState("")
    const [userNumber, setUserNumber] = useState("+91 ")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(userEmail)
        console.log(userNumber)
        props.setStatus("phase2")
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='inputs'>
                <label htmlFor='email'>Email :</label>
                <input type={'email'} value={userEmail} onChange={(e) => setUserMail(e.target.value)} required />
            </div>
            <div className='inputs'>
                <label htmlFor='number'>Ph. Number :</label>
                <input type="text" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} maxLength="14" />
            </div>


            <button type='submit' >Try Your Luck</button>
        </form>
    )
}

export default TryLuckPage
