import { signup } from "../controllers/signup.js";

export const routes = (app) => {
    signup(app);
};