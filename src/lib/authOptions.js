import { dbConnect } from "./dbConnect";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // Sign in with {name} button
            name: 'Email and Password',
            // Form inputs
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Email" },
                password: { label: "Password", type: "password", placeholder: "Enter password" },
            },
            async authorize(credentials, req) {
                const {email, password} = credentials;
                const user = await dbConnect("users").findOne({email});
                if(!user) return null;
                const isPasswordOk = await bcrypt.compare(password, user.password);
                if(isPasswordOk) return user;
                return null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }){
            try{
                const payload = {
                    ...user,
                    provider: account.provider,
                    providerId: account.providerAccountId,
                    createdAt: new Date().toISOString()
                };
                if(!user?.email){
                    return false;
                }
                const isExist = await dbConnect("users").findOne({
                    email: user.email,
                });
                if(!isExist){
                    const result = await dbConnect("users").insertOne(payload);
                }
                return true;
            }
            catch(error){
                return false;
            }
        },
        async session({ session, token, user }){
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }){
            if(user){
                token.email = user.email;
            }
            return token;
        }
    }
}