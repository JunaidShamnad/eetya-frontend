import Axios from 'axios';
// https://eetya.herokuapp.com/"
// http://3.139.94.179/
const instance=Axios.create({
    baseURL:"https://eetya.herokuapp.com/",
    headers:{ 'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*' }
});
export default instance;