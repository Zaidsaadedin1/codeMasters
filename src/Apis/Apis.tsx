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
    return result;
  },
};
