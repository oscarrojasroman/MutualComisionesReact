import { config } from '../helpers';

export const parametersService = {
    add,
    addUf,
    updateParameter
};

function add(sellerType, workerMaximunAmount,commissionFactor,commissionGift) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sellerType, workerMaximunAmount,commissionFactor,commissionGift })
    };

    return fetch(config.apiUrl + '/SellerRangeParameter/', requestOptions)
    .then(handleResponse, handleError) 
    .then(parameter => {
        if (parameter && parameter.add) {
            localStorage.setItem('parameter', JSON.stringify(parameter));              
        }
        return parameter;
    });
}

function addUf(value,date) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value,date})
    };

    return fetch(config.apiUrl + '/Ufparameter/', requestOptions)
    .then(handleResponse, handleError) 
    .then(parameter => {
        if (parameter && parameter.add) {
            localStorage.setItem('parameter', JSON.stringify(parameter));              
        }
        return parameter;
    });
}

 function updateParameter(parameter) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parameter)
    };

    return fetch(config.apiUrl + '/SellerRangeParameter/' + parameter.id, requestOptions).then(handleResponse, handleError);
}

/*  
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