
import bcrypt from "bcrypt";
export const signup = (app) => {
    app.get('/users', (req, res) => { 
        res.json(users)
    });

    app.post('/users', async (req, res) => {
        try{
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user = {name: req.body.name, email: req.body.email, password: hashedPassword, telefones: req.body.telefones};
            users.push(user);
            res.status(201).send();
        } catch {
            res.status(500).send();
        }
    })
}

const users = [];