import React, {useState} from "react";

import SignIn from './SignIn'
import SignUp from './SignUp'


const Auth = () => {
    const [newUser, setNewUser] = useState(true)

    return newUser ? <SignUp setNewUser={setNewUser}/> : <SignIn setNewUser={setNewUser}/>;
}


export default Auth;