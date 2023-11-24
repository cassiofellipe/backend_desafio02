import { app } from "../app.js";

export const routes = () => {
    app.get('/', (req, res) => {
        res.send({
            name: 'Cássio',
        });
    });
}