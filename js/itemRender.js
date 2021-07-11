const url = 'http://clone1.undefcat.io/api/v1/products/new?page=';

function loadItem() {

    let page = 1; 
    let pageRespones = [];

    return fetch(`${url}${page}`)
        .then(res => res.json())
        .then(json => json.data);
            
}

export default loadItem;
