import axios from 'axios';
const baseUrl = 'https://97e6-102-89-3-70.ngrok.io'
export const apiFunctions = {
    getBallotData : async () => getAPIs('/api/getBallotData')
}

export const getAPIs = (path) => {
      return new Promise((resolve,reject)=>{
        axios
            .get(`${baseUrl}${path}`)
            .then(result => {
              resolve(result.data);
            })
            .catch(error => {
                let msg = "Something went wrong";
                if(error?.response?.data) msg = error?.response?.data
                reject({status: 400, msg});
            })
      })
  }