const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: 'Kenzie sitohang', email: 'Kenziepempex@gmail.com' },
    { id: 2, name: 'Fadli borkuna faso', email: 'Fadliborkuna@gmail.com' },
    { id: 3, name: 'Yofi subianto', email: 'Yofisubianto@gmail.com' }
];


app.get("/api/users/:id",(req,res) => {
    res.json(users);
});

app.get("/api/users/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User tidak ada' });
    }
    res.json(users);
});

app.post("/api/users",(req,res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.delete("/api/users/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    user = users.filter(u => u.id !== userId);

    res.sendStatus(204).send("User berhasil dihapus");
});

app.put("/api/users/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        return res.status(404).json({ message: 'User tidak ada' });
    }
    user.name = name;
    user.email = email;
    res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});