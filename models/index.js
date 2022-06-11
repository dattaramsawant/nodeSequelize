const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.database,config.username,config.password,config);

sequelize.authenticate()
    .then(res=>{
        console.log('database connected')
    })
    .catch(error=>{
        console.log(error)
    })

const db={}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
