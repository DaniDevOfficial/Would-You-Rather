import React, { useState} from 'react'

export function Account({setUserName}) {

    return(
        <>
            <h1>Account</h1>
            <form>
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" className='UserNameInput' maxLength={20}onChange={(e) => setUserName(e.target.value)} />
            </form>
        </>
    )
}