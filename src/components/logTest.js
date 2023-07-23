import { useAuth0 } from '@auth0/auth0-react';
function logTest() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
      };


    return (

        !isAuthenticated && (
        <button style={buttonStyle} onClick={() => { loginWithRedirect() }}>
            LogIn
        </button>
    )

    );
}

export default logTest;