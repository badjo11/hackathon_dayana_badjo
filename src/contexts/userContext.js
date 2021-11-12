import React, { useReducer } from "react";
import axios from "axios";
import { APIusers } from "../config/const";
export const userContext = React.createContext();

const INIT_STATE = {
    user: null,
    failedLogin: null,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, user: action.payload };
        case "FAILED_LOGIN":
            return { ...state, failedLogin: action.payload };
        case "LOGOUT_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const UserContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const signUpUser = async (username, password, email, type) => {
        try {
            let res = await axios(APIusers);
            let user = res.data.find((user) => user.username === username);
            if (user === undefined) {
                try {
                    let { data } = await axios.post(APIusers, {
                        username,
                        password,
                        email,
                        type,
                    });
                    dispatch({
                        type: "LOGIN_USER",
                        payload: data,
                    });
                    dispatch({
                        type: "FAILED_LOGIN",
                        payload: false,
                    });
                } catch (e) {
                    console.log(e);
                }
            } else {
                dispatch({
                    type: "FAILED_LOGIN",
                    payload: true,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const loginUser = async (username, password) => {
        try {
            let res = await axios(APIusers);
            let user = res.data.find((user) => user.username === username);
            let bool = false;
            if (user) {
                bool = user.password === password ? true : false;
            }
            if (bool) {
                dispatch({
                    type: "LOGIN_USER",
                    payload: user,
                });
                dispatch({
                    type: "FAILED_LOGIN",
                    payload: false,
                });
            } else {
                dispatch({
                    type: "FAILED_LOGIN",
                    payload: true,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const setUser = (user) => {
        dispatch({
            type: "LOGIN_USER",
            payload: user,
        });
    };

    const logoutUser = () => {
        dispatch({
            type: "LOGOUT_USER",
            payload: null,
        });
    };

    return (
        <userContext.Provider
            value={{
                signUpUser,
                loginUser,
                logoutUser,
                setUser,
                user: state.user,
                state,
            }}
        >
            {props.children}
        </userContext.Provider>
    );
};

export default UserContextProvider;