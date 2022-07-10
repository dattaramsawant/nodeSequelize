const order=(props)=>{
    const query=props
    delete query.page
    delete query.size
    delete query.search

    const queryArray=Object.keys(query)
    const finalQuery=[]
    if(queryArray.length > 0){
        queryArray.map(data=>{
            finalQuery.push([data,query[data]])
        })
    }

    return finalQuery;
}

module.exports=order;