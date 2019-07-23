class Api {

    // DEV API
    // static host = 'http://private-43135-nikreuhapps.apiary-mock.com/';
    // PROD API
    static host = 'https://nikreuh.herokuapp.com/';

    static headers(){
        return{
            'Accept': 'application/json, text/plain, text/json, text/html',
            'Content-Type': 'application/json',
            // 'apikey': 'bb9d3e49a26fe25a66022f9379d93e9b8b400b48',
            // 'dataType': 'json',
            // 'X-Mashape-Key':,
        }
    }

    static get(route){
        return this.xhr(route, null, 'GET');
    }

    static put(route, params){
        return this.xhr(route, params, 'PUT');
    }

    static post(route, params){
        return this.xhr(route, params, 'POST');
    }

    static delete(route, params){
        return this.xhr(route, params, 'DELETE');
    }

  
    static xhr(route, params, verb){

        const url = this.host + route;
        // const url = `${host}${route}`;

        // alert(JSON.stringify(params));
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);

        options.headers = Api.headers();

        return fetch(url, options).then( resp => {

            // alert(JSON.stringify(resp));
            
            let json = resp.json();

            if(resp.ok){
                return json;
            }
            
            // return json.then(err => {throw err});
        })
        // .then(json => json.results);
    }
}

export default Api;