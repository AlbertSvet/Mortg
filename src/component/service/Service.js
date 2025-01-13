
class Server {
    apiKey = 'http://localhost:5000/mentors'
    postData = async (url) => {
            let res = await fetch(url)
            return await res.json()
    }

    getData = async () =>{
       const res =  await this.postData(this.apiKey)
       return res;
    }
}

export default Server

