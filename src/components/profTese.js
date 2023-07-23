import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function profTese() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user, isAuthenticated} = useAuth0();
    return (
            isAuthenticated && (
            <div>
                {user?.picture && <img src={user.picture}  alt={user.name} />}
                <h2>{user.name}</h2>
                <ul>
                    {Object.keys(user).map((ObjKey , i) => <li key={i}> {ObjKey}: {user[ObjKey]}</li> )}
                </ul>
            </div>
            )
        );
}

export default profTese;