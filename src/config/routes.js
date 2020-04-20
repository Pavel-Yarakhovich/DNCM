import { lazy } from "react";

const delivery = "/delivery",
  products = "/products",
  feedbacks = "/feedbacks",
  contacts = "/contacts",
  admin = "/admin";

const Delivery = lazy(() => import("../components/Main/Delivery")),
  Products = lazy(() => import("../components/Main/Products")),
  Feedbacks = lazy(() => import("../components/Main/Feedbacks")),
  Contacts = lazy(() => import("../components/Main/Contacts")),
  Admin = lazy(() => import("../components/Main/Admin"));

export const ROUTES = [
  {
    path: delivery,
    component: Delivery,
  },
  {
    path: products,
    component: Products,
  },
  {
    path: feedbacks,
    component: Feedbacks,
  },
  {
    path: contacts,
    component: Contacts,
  },
  {
    path: admin,
    component: Admin,
  },
]