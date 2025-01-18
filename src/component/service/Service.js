
class Server {
    apiKey = 'http://localhost:5000/'


    makeRequest = async (url, data={}) =>{
        let res = await fetch(url, data)
        return await res.json()
    }

    getData = async (id) =>{
       return await this.makeRequest(this.apiKey + id)
    }
    postData = async (data) =>{
        return await this.makeRequest(this.apiKey,{
            method: 'POST',
            body: data
        })
    }
}

export default Server




