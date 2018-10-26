import { config } from '../helpers';

export const parametersService = {
    add
};

function add(sellerType, workerMaximunAmount,commissionFactor,commissionGift) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sellerType, workerMaximunAmount,commissionFactor,commissionGift })
    };

    return fetch(config.apiUrl + '/SellerRangeParameter', requestOptions).then(handleResponse, handleError);
}

/* function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(config.apiUrl + '/users/' + user.id, requestOptions).then(handleResponse, handleError);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(config.apiUrl + '/users/' + id, requestOptions).then(handleResponse, handleError);
} */

function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            response.text().then(text => reject(text));
        }
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}