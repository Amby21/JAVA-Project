const getProducts = async ()=>{
    // can be found on mdn
    const response = await  fetch('http://18.224.59.15:8080/api/products/', 
        {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
    return response.json();
}

const updateProduct = async (id,body) =>{

    const strigifiedBody = JSON.stringify(body);
    const response = await  fetch('http://18.224.59.15:8080/api/products/' + id, 
        {
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
            },
            body:strigifiedBody      
        }
        )
    return  response.json();
}

const deleteProduct = async (id) =>{
 
    const response = await  fetch('http://18.224.59.15:8080/api/products/' + id, 
        {
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
    return  response.json();

}

const addProduct = async (body) =>{

    const strigifiedBody = JSON.stringify(body);
    const response = await  fetch('http://18.224.59.15:8080/api/products/', 
        {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
            },
            body:strigifiedBody      
        }
        )
    return  response.json();
}