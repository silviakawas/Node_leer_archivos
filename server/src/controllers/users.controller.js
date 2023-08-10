const controller = {};
const path = require('path');
const usersFile = path.resolve(__dirname, '../../data/users.json');
const fs = require('fs/promises');


controller.getUsers = async (req, res)=>{

    fs.readFile(usersFile, (err, data)=>{
        res.send(JSON.parse(data));
    });

    try{
        const data = await fs.readFile(usersFile);
        const jsonData = await JSON.parse(data);

        res.send(jsonData);

    }catch(err){
        res.send('Error al leer el archivo');
    };

};

controller.getUserById = async(req, res) =>{
    console.log(req.params.userId);
    try{
        const data = await fs.readFile(usersFile);
        const jsonData = await JSON.parse(data);
        const user = jsonData.find(user => user.userId === req.params.userId);

        res.send(user);

    }catch(err){
        res.send('Error al leer el archivo');
    };
};



module.exports = controller;