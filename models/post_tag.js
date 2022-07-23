module.exports=(sequelize,DataTypes)=>{
    const post_tag=sequelize.define('post_tag',{
        postId:{
            type:DataTypes.INTEGER
        },
        
    },{
        timestamps:true
    })

    return post_tag;
}