<<<<<<< HEAD
import React from "react";
import "./AdminPannel.css";
function AdminPanel() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>showSpeed</strong>
            </td>
            <td>15</td>
            <td>The speed of the show/reveal</td>
          </tr>
          <tr>
            <td>
              <strong>showEasing</strong>
            </td>
            <td>'linear'</td>
            <td>The easing of the show/reveal</td>
          </tr>
          <tr>
            <td>
              <strong>hideSpeed</strong>
            </td>
            <td>50</td>
            <td>The speed of the hide/conceal</td>
          </tr>
          <tr>
            <td>
              <strong>hideEasing</strong>
            </td>
            <td>'linear'</td>
            <td>The easing of the hide/conceal</td>
          </tr>
          <tr>
            <td>
              <strong>width</strong>
            </td>
            <td>'auto'</td>
            <td>
              The width that the data will be truncated to -{" "}
              <em>('auto' or px amount)</em>
            </td>
          </tr>
          <tr>
            <td>
              <strong>ellipsis</strong>
            </td>
            <td>true</td>
            <td>Set to true to enable the ellipsis</td>
          </tr>
          <tr>
            <td>
              <strong>title</strong>
            </td>
            <td>false</td>
            <td>Set to true to show the full data on hover</td>
          </tr>
          <tr>
            <td>
              <strong>afterShow</strong>
            </td>
            <td> $.noop</td>
            <td>The callback fired after the show/reveal</td>
          </tr>
          <tr>
            <td>
              <strong>afterHide</strong>
            </td>
            <td>$.noop</td>
            <td>The callback fired after the hide/conceal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
=======
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
>>>>>>> 76b20dc00f39b12bc8940e614cefa3be4bd73d1e
}

export default AdminPanel;
