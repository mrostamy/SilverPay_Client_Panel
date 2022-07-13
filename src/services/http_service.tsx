import axios from 'axios'
import { toast } from 'react-toastify';
import { object } from 'yup';


// axios.interceptors.request.use(req => {

//     console.log("interceptor request sent to: " + req.url)
//     console.log(req.headers!['Authorization'])
//     return req;


// }, err => {

//     console.log("interceptor request error")
//     throw err
// });




// axios.interceptors.response.use(resp => {
//     return  resp;
// }, err => {

//     if (err.response.headers['app-error']) {
//         toast.error(err.response.headers['app-error'], { theme: "colored" })
//         throw err;
//     }


//     if (err.response.data && typeof err.response.data === 'object') {

//         let errorModels = '';

//         for (var k in err.response.data) {
//             errorModels += err.response.data[k].message + "\n";
//         }

//         throw errorModels

//     }


//     if (err.response.data.status === '401') {
//         toast.error("unAuthorize access!", { theme: "colored" })
//         throw "unAuthorize access!"
//     }


//     throw "unknown error rased!";

// })


export default axios;