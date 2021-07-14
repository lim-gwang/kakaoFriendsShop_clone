
class urlData {
    constructor(data, paging) {
        this.data = data;
        this.paging = paging;
    }
}

const test = new urlData()


function loadItem() {

    const url = 'http://clone1.undefcat.io/api/v1/products/new?page=';

    fetch(url)
        .then(res => res.json())
        .then(json => {
            const paging = json.paging.current;
            const test = url
            
        });
    
    

    function paging() {

        return fetch(url)
        .then(res => res.json())
        .then(json => json.data);
    }

    return paging();
            
}

export default loadItem;
