import { parametersConstants } from '../constants';
import { parametersService} from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

export const parametersActions = {
   add
};

function add(sellerType, workerMaximunAmount,commissionFactor,commissionGift) {
    return dispatch => {
        dispatch(request(sellerType, workerMaximunAmount,commissionFactor,commissionGift));

        parametersService.services(sellerType, workerMaximunAmount,commissionFactor,commissionGift)
            .then(
                () => { 
                    dispatch(success());
                    history.push('/Parametros');
                    dispatch(alertActions.success('Add Succesfull'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(parametersActions) { return { type: parametersConstants.ADD_REQUEST, parametersActions } }
    function success(parametersActions) { return { type: parametersConstants.ADD_SUCCESS, parametersActions } }
    function failure(error) { return { type: parametersConstants.ADD_ERROR, error } }
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