var request = require('sync-request');

// const LoginServer = {href:"127.0.0.1", port:"1234"};
const LoginServer = "www.blasorchester-riegelsberg.de";
const LoginServer2 = "127.0.0.1:1234";


export function postLogin(data:JSON){
    // let res = request("GET", LoginServer, {
    //     json: data,
    // })

    let ress = request("GET", LoginServer2, {
        json: data,
    })

    // if(ress.statusCode !== 200){
    //     return (res.body);
    // }

    return;
}