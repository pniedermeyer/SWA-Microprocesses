var request = require('sync-request');

//const LoginServer = {href:"127.0.0.1", port:"1234"};
const LoginServer = 'http://google.com:81';


export function postLogin(data:JSON){
    let res = request("GET", LoginServer, {
        json: data,
    })

    if(res.statusCode !== 200){
        return (res.body);
    }

    return;
}