
class Server {
    
    makeRequest = async (url, data={}) =>{
        let res = await fetch(url, data)
        return await res.json()
    }

    getData = async (url) =>{
       return await this.makeRequest(url)
    }
    postData = async (url,data) =>{
        return await this.makeRequest(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
    }
}

export default Server




