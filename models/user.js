module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('user',{
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        gender:{
            type:DataTypes.STRING
        }
    },{
        timestamps:true
    })

    return User;
}