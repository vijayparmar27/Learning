const axios = require("axios");

async function apiCall(timeOut) {
  const apiRequest =  axios.get("http://172.20.11.53:3002/test");
  let timeOutt;
  let setTime = new Promise((resolve, reject) => {
    timeOutt = setTimeout(() => {
      
      console.log("setTimeOut :::");
      resolve(false);
    }, timeOut);
  });
  console.log(typeof timeOutt);;
  const data = await Promise.race([apiRequest, setTime]);
  clearTimeout(timeOutt);
  return data;
}

async function newFuction() {
  try {
    console.log("--->> newFuction :: 1");
    const data = await apiCall(1);
    if (data) {
      console.log("--->> Fuction :: data :: ", data.data);
    } else {
      console.log("--->> newFuction :: data :: ", data);
    }
  } catch (error) {
    console.log("error ::", error);
  }
}

newFuction();