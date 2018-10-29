import { parametersConstants } from '../constants';
import { parametersService} from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

export const parametersActions = {
   add
};

function add(sellerType, workerMaximunAmount,commissionFactor,commissionGift) {
    return dispatch => {
        parametersService.add(sellerType, workerMaximunAmount,commissionFactor,commissionGift)
            .then(
                parameter => { 
                    dispatch(success(parameter));
                    history.push('/Parametros');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success() { return { type: parametersConstants.ADD_SUCCESS} }
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