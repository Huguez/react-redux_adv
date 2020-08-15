import * as actionTypes from './actionsType'


export const saveResult = ( res ) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const store_result = ( _result ) => {
    return ( dispatch, getState ) => {
        // const oldCounter = getState().ctr.counter;

        setTimeout( () =>{ dispatch( saveResult( _result ) ) }, 2000 );
    }
}

export const delete_result = (_result) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: _result
    };
}
