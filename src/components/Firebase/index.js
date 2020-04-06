import React from 'react';

const FirebaseContext = React.createContext(null);
const FirebaseProvider = () =>
    <FirebaseContext.Provider value={"Hallo"}>
        {children}
    </FirebaseContext.Provider>

const Firebase = () => {
    return (
        <>
            <p>Firebase</p>
        </>
    )
}

export default Firebase;
export { FirebaseProvider, FirebaseContext };
