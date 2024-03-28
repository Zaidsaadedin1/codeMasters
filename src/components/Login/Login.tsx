"use client";
import React, { useState, useEffect } from "react";
import "./Login.css";
<<<<<<< HEAD
import { fetchData } from "@/Apis/Apis";
import { UserLoginDto } from "@/Interfaces/User/UserLoginDto";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

function Login() {
  const [userLogins, setUserLogins] = useState<UserLoginDto>({
    email: "",
    password: "",
  });
  const router = useRouter();

  const submitLogins = async () => {
    const response = await fetchData.login(userLogins);

    if (response.status === 200) {
      console.log("Login successful");
      console.log(response);
      router.push("/AdminPanel");
    } else {
      console.error("Login failed");
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
                  <input
                    name="email"
                    onChange={(e) =>
                      setUserLogins({ ...userLogins, email: e.target.value })
                    }
                    type="email"
                    required
                  />
                  <i>Email</i>
                </div>
                <div className="inputBox">
                  <input
                    onChange={(e) =>
                      setUserLogins({ ...userLogins, password: e.target.value })
                    }
                    name="password"
                    type="password"
                    required
                  />
                  <i>Password</i>
                </div>
                <div className="inputBox">
                  <Button onClick={submitLogins} type="submit" value="Login">
                    Login
                  </Button>
                </div>
              </div>
=======
import { fetchData } from '@/Apis/Apis';
import { UserLoginDto } from '@/Interfaces/User/UserLoginDto';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useAuthintications } from '@/Contexts/AuthProvider';

function Login() {
    const { setToken } = useAuthintications();

    const [userLogins, setUserLogins] = useState<UserLoginDto>({
        email: "",
        password: "",
    });
    const router = useRouter();

    const submitLogins = async () => {
        const response = await fetchData.login(userLogins);
        if (response.status === 200 && response.data.token) {
            setToken(response.data.token);
            router.push("/admin-panel");
        } else {
            router.push("/login");
        }
    };

    return (
        <>
            <div>
                <section>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <div className="signin">
                        <div className="content">
                            <h2>Sign In</h2>
                            <div className="form">
                                <div className="inputBox">
                                    <input
                                        name="email"
                                        onChange={(e) => setUserLogins({ ...userLogins, email: e.target.value })}
                                        type="email"
                                        required
                                    />
                                    <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <input
                                        onChange={(e) => setUserLogins({ ...userLogins, password: e.target.value })}
                                        name="password"
                                        type="password"
                                        required
                                    />
                                    <i>Password</i>
                                </div>
                                <div className="inputBox">
                                    <Button onClick={submitLogins} type="submit" value="Login">
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
>>>>>>> 76b20dc00f39b12bc8940e614cefa3be4bd73d1e
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
