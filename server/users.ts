"use server"
import {auth} from "@/lib/auth"

export const signInUser = async (email: string, password: string) => {
    try{

        const response = await auth.api.signInEmail({
            body: {
                email,
                password
            }, // returns a response object instead of data
        });
        return { success: true, message: "sign in successful" };
    } catch (error) {
        const e=error as Error;
        return { success: false, message: e.message || "failed to sign in" };
    }
}

export const signUpUser = async (email: string, password: string,name: string) => {
    try{
await auth.api.signUpEmail({
    body: {
        email,
        password,
        name,
    },
})
    return { success: true, message: "sign up successful" };
        
    }catch(error){
        const e=error as Error;
        return { success: false, message: e.message || "failed to sign up" };
    }
}