// import { RequestPushMsg } from '../../apiService';
// get(url,successCallback,errorCallback)
// post(url,data,successCallback,errorCallback)

export function post(url,data,successCallback,errorCallback){
    fetch(url, {       
        method: 'POST', 
        headers: {
              Accept: 'application/json',  
             'Content-Type': 'application/json',    
         }, 
       body: JSON.stringify(data),        
     }).then((response) => response.json())   
              .then((responseJson) => { 
                successCallback(responseJson)
                  return responseJson
     })
     .catch((error) => { 
         console.log(error) 
         errorCallback(error)
        });
}

export function get(url,successCallback,errorCallback){
    fetch(url, {       
        method: 'GET', 
        headers: {
              Accept: 'application/json',  
             'Content-Type': 'application/json',    
         }, 
       body: "",        
     }).then((response) => response.json())   
              .then((responseJson) => { 
                successCallback(responseJson)
                  return responseJson
     })
     .catch((error) => { 
         console.log(error) 
         errorCallback(error)
        });
}