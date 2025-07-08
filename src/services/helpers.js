
// export const Apiurl="http://172.16.4.126:1337/api"
export const Apiurl="https://be.hsls.gamyam.co/api"


export const apiGetService = async (uri, params) => {
    const queryString = new URLSearchParams(params).toString();
    let url = `${Apiurl}${uri}`;
    if (queryString) {
      url = `${url}?${queryString}`;
    }
    try {
      const response = await fetch(url, 
        // {
        //      headers: getHeaders()

        //  }
        );
   
  
      if (!response.ok) {
       
        const resError = await response.json();
        console.log(resError,"resError")
        let jsonError=""
        if(typeof(resError)==="object"){
          jsonError= JSON.stringify(resError)
        }else{
          jsonError=resError
        }
        if (jsonError) {
          // throw new Error(jsonError);
          console.log(jsonError)
        }
      }
      // console.log(await response.json(),"hhhhhhh")
   
      return await response.json();
    } catch (error) {
      // throw error;
      console.log(error)
    }
  };
  export const apiPostService = async (
    uri = "",
    payload = {},
   
    type
  ) => {
    try {
      const response = await fetch(`${Apiurl}${uri}`, {
        // method: "POST",
        // headers: getHeaders(type),
        body: type?payload:JSON.stringify(payload),
      });
      
 
      if (!response.ok) {
        const resError = await response.json();
        
        let jsonError=""
        if(typeof(resError)==="object"){
          jsonError= JSON.stringify(resError)
        }else{
          jsonError=resError
        }
        if (jsonError) {
          throw new Error(jsonError);
        }
      }
  
      // Handle the response based on the specified responseType
        
        return await response.json();
       
   
    } catch (error) {
      console.error("API Post Service Error:", error);
      // throw error;
    }
  };
  

  
  

