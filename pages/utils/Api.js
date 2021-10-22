export const fetchApi = async (url, data) => {
    
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return response;
        
      
}
