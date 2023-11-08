import { createContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { useContext } from "react";
import { AuthContext } from "./authContext";

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080')
    const { auth } = useContext( AuthContext )

    useEffect(() => {
        if ( auth.logged ){
            connectSocket();
        }

    }, [auth, connectSocket])

    useEffect(() => {
        if ( !auth.logged ){
            disconnectSocket();
        }

    }, [auth, disconnectSocket])

    return (
        <SocketContext.Provider value={ { socket, online, } }>
            { children }
        </SocketContext.Provider>
    )
}