import axios from 'axios';

export const getUsers = async() => {
   const response= await axios.get("https://jsonplaceholder.typicode.com/users");
   console.log('response', response);
   return response.data;
}