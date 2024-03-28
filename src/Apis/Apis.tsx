import { CreateOrder } from "@/Interfaces/Order/CreateOrderInterface";
import { UserLoginDto } from "@/Interfaces/User/UserLoginDto";
import axios from "axios";


export const fetchData = {
  addOrder: async (newOrder: CreateOrder) => {
<<<<<<< HEAD
    const result = await axios.post(
      `https://localhost:44330/CreateOrder`,
      newOrder
    );
    return result;
  },
  login: async (userLogins: UserLoginDto) => {
    const result = await axios.post(
      `https://localhost:44330/Login`,
      userLogins
    );
=======
    const result = await axios.post(`https://codemastersapi-production.up.railway.app/CreateOrder`, newOrder);
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
>>>>>>> 76b20dc00f39b12bc8940e614cefa3be4bd73d1e
    return result;
  },
};
