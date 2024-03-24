"use client";
import React, { useState } from 'react';
import "./Login.css";
import { fetchData } from '@/Apis/Apis';
import { UserLoginDto } from '@/Interfaces/User/UserLoginDto';
import { Button } from '../ui/button';
import { redirect } from "next/navigation";

function Login() {

    const [userLogins, setUserLogins] = useState<UserLoginDto>({
        email: "",
        password: "",
    });

    const submitLogins = async () => {
        const response = await fetchData.login(userLogins)

        if (response.status === 200) {
            console.log('Login successful');
            console.log(response);
            redirect("/home");

        } else {
            console.error('Login failed');
            redirect("/adminloginpageponly");
        }
    };


    return (
        <>
            <div>
                <section>
                    <div className="signin">
                        <div className="content">
                            <h2>Sign In</h2>
                            <div className="form">
                                <div className="inputBox">
                                    <input name='email' onChange={e => setUserLogins({ ...userLogins, email: e.target.value })} type="email" required /> <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <input onChange={e => setUserLogins({ ...userLogins, password: e.target.value })} name='password' type="password" required /> <i>Password</i>
                                </div>
                                <div className="inputBox">
                                    <Button onClick={submitLogins} type="submit" value="Login" >Login</Button >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Login;
