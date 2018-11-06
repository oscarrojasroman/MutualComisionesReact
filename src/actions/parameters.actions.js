import { parametersConstants } from '../constants';
import { parametersService} from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

export const parametersActions = {
   add,
   addUf,
   update
};

function add(sellerType, workerMaximunAmount,commissionFactor,commissionGift) {
    return dispatch => {
        parametersService.add(sellerType, workerMaximunAmount,commissionFactor,commissionGift)
            .then(
                parameter => { 
                    dispatch(success(parameter));
                    history.go('/Parametros');
                    dispatch(alertActions.success('Add successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(parameter) { return { type: parametersConstants.SUCCESS , parameter}}
    function failure(error) { return { type: parametersConstants.ERROR, error } }
}

function update(id,sellerType, workerMaximunAmount,commissionFactor,commissionGift) {
    return dispatch => {
        parametersService.add(id,sellerType, workerMaximunAmount,commissionFactor,commissionGift)
            .then(
                parameter => { 
                    dispatch(success(parameter));
                    history.go('/Parametros');
                    dispatch(alertActions.success('Update successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(parameter) { return { type: parametersConstants.UPDATE_SUCCESS , parameter}}
    function failure(error) { return { type: parametersConstants.ERROR, error } }
}

function addUf(value,date) {
    return dispatch => {
        parametersService.addUf(value,date)
            .then(
                parameter => { 
                    dispatch(success(parameter));
                    history.go('/Parametros');
                    dispatch(alertActions.success('Add successful'));
                    alert('Uf Agregada Correctamente');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(parameter) { return { type: parametersConstants.SUCCESS , parameter}}
    function failure(error) { return { type: parametersConstants.ERROR, error } }
}



/* function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                () => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
} */