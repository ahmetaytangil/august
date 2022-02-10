import React, { useContext, useState, useEffect } from "react"
import { auth, database } from '../Firebase'
import firebase from "firebase";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [databaseState, setdatabaseState] = useState({
        currentUser_cart: null,
        currentUser_lastVisited: null
    });

    var provider = new firebase.auth.GoogleAuthProvider();

    function writeUserData(userId, cart, lastVisited) {
        if (lastVisited !== null) {
            database.ref('users/' + userId).set({
                cart: cart,
                lastVisited: lastVisited
            });
            setdatabaseState({ currentUser_cart: cart, currentUser_lastVisited: lastVisited });
        } else {
            database.ref('users/' + userId).set({
                cart: cart
            });
            setdatabaseState({ currentUser_cart: cart, currentUser_lastVisited: null });
        }
    }

    function writeLastVisitedData(userId, cart, lastVisited) {
        if (cart !== null) {
            database.ref('users/' + userId).set({
                cart: cart,
                lastVisited: lastVisited
            });
            setdatabaseState({ currentUser_cart: cart, currentUser_lastVisited: lastVisited });
        } else {
            database.ref('users/' + userId).set({
                lastVisited: lastVisited
            });
            setdatabaseState({ currentUser_cart: null, currentUser_lastVisited: lastVisited });
        }
    }

    function signup(email, password, firstName, lastName) {
        auth.createUserWithEmailAndPassword(email, password).then(function (result) {
            return result.user.updateProfile({
                displayName: firstName + " " + lastName
            })
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function googleLogin() {
        auth.signInWithPopup(provider).then((result) => {
            const user = result.user;
            setCurrentUser(user);
        }).catch((error) => {
            console.error(error.errorMessage);
            console.error(error.errorCode);
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
            if (user !== null) {
                const dbRef = database.ref();
                dbRef.child("users").child(user.uid).get().then((snapshot) => {
                    if (snapshot.exists()) {
                        let cart = snapshot.val().cart;
                        let lastVisited = snapshot.val().lastVisited;
                        if (cart !== undefined && lastVisited !== undefined) {
                            setdatabaseState({ currentUser_cart: cart, currentUser_lastVisited: lastVisited });
                        } else if (cart !== undefined && lastVisited === undefined) {
                            setdatabaseState(prevState => { return { ...prevState, currentUser_cart: cart } });
                        } else if (cart === undefined && lastVisited !== undefined) {
                            setdatabaseState(prevState => { return { ...prevState, currentUser_lastVisited: lastVisited } });
                        }
                    } else {
                        alert("No data available");
                    }
                }).catch((error) => {
                    console.error(error);
                });
            }
        })
        return () => {
            unsubscribe
        }
    }, [currentUser]);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        googleLogin,
        writeUserData,
        databaseState,
        writeLastVisitedData
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}