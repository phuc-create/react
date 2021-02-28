import React,{useContext} from 'react'
import { UserContext } from './userContext'

function ConText() {
    const msg = useContext(UserContext);
    return ( <div>
    <h1>show below</h1>
    <h1>{msg}</h1>
        </div>
    )
}

export default ConText;