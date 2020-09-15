// CRUD calls to be used

export const get = (url) => {
    return fetch(url, {
        method: 'GET'
    });
};

export const post = (url, params) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
    });
};

export const put = (url, params) => {
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(params)
    });
};

export const remove = (url) => {
    return fetch(url, {
        method: 'DELETE'
    });
};
