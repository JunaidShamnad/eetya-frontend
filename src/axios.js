import Axios from 'axios';
// https://eetya.herokuapp.com/"
// http://3.139.94.179/
const instance = Axios.create({
    baseURL:"http://localhost:4000",
    // baseURL:"https://eetya.herokuapp.com/",
    headers:{ 'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*' }
});
export default instance;