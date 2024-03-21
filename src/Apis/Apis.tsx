import { CreateOrder } from "@/Interfaces/Order/CreateOrderInterface";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
const localUrl = process.env.NEXT_PUBLIC_LOCALHOST_SITE_URL;

export const fetchData = {
  addOrder: async (newOrder: CreateOrder) => {
    const result = await axios.post(`https://codemastersapis.com:81/CreateOrder`, newOrder);
    return result;
  },
};
