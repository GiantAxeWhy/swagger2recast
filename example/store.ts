import { Order } from "./type";
import { ResType } from "../lib/types/base.d";
import request from "@/utils/request";

//Place an order for a pet
export function* placeOrder(data: Order): ResType<Order> {
  const res = yield request.post("/store/order", {
    data: data
  });

  return res;
}

//Find purchase order by ID
export function* getOrderById(orderId: number): ResType<Order> {
  const res = yield request.get(`/store/order/${orderId}`);
  return res;
}

//Delete purchase order by ID
export function* deleteOrder(orderId: number): ResType<{}> {
  const res = yield request.delete(`/store/order/${orderId}`);
  return res;
}

//Returns pet inventories by status
export function* getInventory(): ResType<{}> {
  const res = yield request.get("/store/inventory");
  return res;
}