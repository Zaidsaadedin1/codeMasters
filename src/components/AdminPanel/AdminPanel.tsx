'use client';

import React, { useEffect, useState } from 'react';
import { fetchData } from '@/Apis/Apis';
import "./AdminPanel.css";
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { useAuthintications } from '@/Contexts/AuthProvider';

function AdminPanel() {
    const [usersOrders, setUsersOrders] = useState<object[]>([]);
    const { token } = useAuthintications();
    const router = useRouter();

    useEffect(() => {
        getAllUsersOrders();
    }, [token]);

    const getAllUsersOrders = async () => {
        try {
            if (token) {
                const ordersResponse = await fetchData.getAllOrders(token);
                setUsersOrders(ordersResponse.data);
                console.log(ordersResponse)
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
    function formatDate(dateString: string) {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }

        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);

        return (
            <div className="flex flex-col justify-items-center bg-#f1f1f1 w-[10rem]">
                <label>{`${day}-${month}-${year}`}</label>
                <label>{`${hours}:${minutes}:${seconds}`}</label>
            </div>
        );
    }



    return (
        <>
            <div className="flex justify-end ">
                <Button className="bg-gray-600" onClick={handleLogout}>Logout</Button>
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
                                <td>{formatDate(order.createAt)}</td>
                                <td>{formatDate(order.startAtDate)}</td>
                                <td>{formatDate(order.deadLineDate)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminPanel;
