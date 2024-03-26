import { CreateOrder } from "@/Interfaces/Order/CreateOrderInterface";
import { UserLoginDto } from "@/Interfaces/User/UserLoginDto";
import axios from "axios";


export const fetchData = {
  addOrder: async (newOrder: CreateOrder) => {
    const result = await axios.post(`https://www.codemastersapis.com:81/CreateOrder`, newOrder);
    return result;
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
