const pagination=(query,count)=>{
    const page=Number.parseInt(query.page);
    const size=Number.parseInt(query.size);
    let pageQuery=0
    let sizeQuery=count

    if(!Number.isNaN(page) && page > 0){
        pageQuery = page - 1
    }
    
    if(!Number.isNaN(size) && size > 0){
        sizeQuery = size
    }

    return{
        limit: sizeQuery,
        offset: pageQuery * sizeQuery
    }
}

module.exports = pagination