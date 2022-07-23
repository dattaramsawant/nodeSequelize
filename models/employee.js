module.exports=(sequelize,DataTypes)=>{
    const Employee=sequelize.define('employee',{
        name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        }
    },{
        timestamps:true,
        paranoid:true
    })

    return Employee;
}