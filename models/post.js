module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define('post',{
        name:{
            type:DataTypes.STRING
        },
        title:{
            type:DataTypes.STRING
        },
        content:{
            type:DataTypes.STRING
        },
        user_id:{
            type:DataTypes.INTEGER
        }
    },{
        timestamps:true
    })

    return Post
}