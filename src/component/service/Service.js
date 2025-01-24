
class Server {
    
    makeRequest = async (url, data={}) =>{
        let res = await fetch(url, data)
        return await res.json()
    }

    getData = async (url) =>{
       return await this.makeRequest(url)
    }
    postData = async (data) =>{
        return await this.makeRequest(this.apiKey,{
            method: 'POST',
            body: data
        })
    }
}

export default Server




