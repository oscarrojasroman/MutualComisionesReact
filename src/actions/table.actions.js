import { tableConstants } from '../constants';
import { tableService } from '../services';

export const tableActions = {
    getUf
};

function getUf() {
    return dispatch => {
        dispatch(request());

        tableService.getUf()
            .then(
                ufs => dispatch(success(ufs)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: tableConstants.GETUF_REQUEST } }
    function success(ufs) { return { type: tableConstants.GETUF_SUCCESS, ufs } }
    function failure(error) { return { type: tableConstants.GETUF_FAILURE, error } }
}
