module.exports = (app) => {
    app.get('/users', (req, res) => {
        res.send('Hello Get World!');
    });
    
    app.post("/users", (req, res) => { 
        res.send('Hello Post World!');
    });
    app.delete("/users", (req, res) => { 
        res.send('Hello Delete World!');
    });
    app.put("/users", (req, res) => { 
        res.send('Hello Put World!');
    });
}
