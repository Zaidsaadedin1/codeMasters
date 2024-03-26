import { CreateOrder } from "@/Interfaces/Order/CreateOrderInterface";
import { UserLoginDto } from "@/Interfaces/User/UserLoginDto";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
const localUrl = process.env.NEXT_PUBLIC_LOCALHOST_SITE_URL;

export const fetchData = {
  // addOrder: async (newOrder: CreateOrder) => {
  //   const result = await axios.post(`https://www.codemastersapis.com:81/CreateOrder`, newOrder);
  //   return result;
  // },
  addOrder: async (newOrder: CreateOrder) => {
    fetch("https://codemastersapi-production.up.railway.app/CreateOrder", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  },
  getAllOrders: async (token: string | null) => {
    const result = await axios.get(`https://codemastersapi-production.up.railway.app/GetAllOrders`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`
      }

    });
    return result;
  },
  login: async (userLogins: UserLoginDto) => {
    const result = await axios.post(`https://codemastersapi-production.up.railway.app/Login`, userLogins, {
      withCredentials: true,
      headers: {
      }
    });
    return result;
  }
};
