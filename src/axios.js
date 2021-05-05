import Axios from 'axios';
// https://eetya.herokuapp.com/"
// http://3.139.94.179/
// https://class-room-59.site/
const instance=Axios.create({
    baseURL:"http://localhost:4000/",
    headers:{ 'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*' }
});
export default instance;