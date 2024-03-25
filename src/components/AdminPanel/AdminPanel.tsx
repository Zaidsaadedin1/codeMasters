'use client';

import React, { useEffect, useState } from 'react';
import { fetchData } from '@/Apis/Apis';
import "./AdminPanel.css";
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

function AdminPanel() {
    const [usersOrders, setUsersOrders] = useState<object[]>([]);
    const [token, setToken] = useState<string | null>("");

    const router = useRouter();

    useEffect(() => {
        getAllUsersOrders();
    }, [token]);

    const getAllUsersOrders = async () => {
        try {
            const token: string | null = localStorage.getItem('token');
            setToken(token);
            if (token) {
                const ordersResponse = await fetchData.getAllOrders(token);
                setUsersOrders(ordersResponse.data);
            } else {
                router.push("/login");
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push("/login");
    };

    return (
        <>
            <div>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>University</th>
                            <th>Major</th>
                            <th>PhoneNumber</th>
                            <th>Description</th>
                            <th>CreatedAt</th>
                            <th>StartDate</th>
                            <th>DeadlineDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersOrders.map((order: any) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.firstName}</td>
                                <td>{order.lastName}</td>
                                <td>{order.university}</td>
                                <td>{order.major}</td>
                                <td>{order.phoneNumber}</td>
                                <td>{order.description}</td>
                                <td>{order.createdAt}</td>
                                <td>{order.startDate}</td>
                                <td>{order.deadlineDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminPanel;
