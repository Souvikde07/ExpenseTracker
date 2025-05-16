import React from "react";
import { AuthContextType, UserType } from "../types";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { firestore } from "../.expo/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const authContext = createContext<AuthContextType | null>(null);
const auth = getAuth();

export const AuthProvider: React.FC <{ children: React.ReactNode }> = ({ //FC - Functional Component
    children,
})=>{
    const [user, setUser] = useState<UserType>(null);

    const login = async (email: string, password: string) => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            return { success: true };
        }catch(error:any){
            let msg= error.message;
            return { success: false, msg };
        }
    };
    const register = async (email: string, password: string, name: string) => {
        try{
            let response= await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(firestore,"users", response?.user?.uid), {
                name,
                email,
                uid: response?.user?.uid,
            });
            return { success: true };
        }catch(error:any){
            let msg= error.message;
            return { success: false, msg };
        }
    };
    const updateUserData = async(uid:string)=>{ //This func is used to update the user state in the app and not update the user data in the firebase
        try{
            const docRef= doc(firestore, "users", uid);
            const docSnap= await getDoc(docRef);

            if(docSnap.exists()){
                const data = docSnap.data();
                const userData: UserType = {
                    uid: data?.uid,
                    name: data.name || null,
                    email: data.email || null,
                    image: data.image || null,
                };
                setUser({ ...userData });
            }
        }catch(error:any){
            let msg= error.message;
            //return { success: false, msg };
            console.log('error: ', msg);
        }
    }
    const contextValue: AuthContextType = {
        user,
        setUser,
        login,
        register,
        updateUserData,
    };
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )
};

export const useAuth = ():AuthContextType => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be wrapped inside AuthProvider');
    }
    return context;
};