var request = require('sync-request');

const LoginServer = {href:"127.0.0.1", port:"1234"};
const SignUpServer = {href:"127.0.0.1", port:"1235"};
const ReturnDataServer = {href:"127.0.0.1", port:"1236"};


export function postLogin(data:string){
    let res = request("POST", LoginServer, {
        json: data,
    })

    if(res.statusCode !== 200){
        return (res.body);
    }

    return res.body;
}

export function postSighUp(data:string){
    let res = request("POST", SignUpServer, {
        json: data,
    })

    if(res.statusCode !== 200){
        return (res.body);
    }

    return res.body;
}

export function getData(data:string){
    let res = request("GET", ReturnDataServer, {
        json: data,
    })

    if(res.statusCode !== 200){
        return (res.body);
    }

    return res.body;
}