import api from './../api/abonents'

export const loadAbonents = () => async dispatch => {
    const abonents = await api.fetchAbonents();
    dispatch({
        type: 'LOAD_ABONENTS_SUCCESS',
        payload: abonents
    })
}

export const changePage = (link) => async dispatch => {
    const abonents = await api.fetchAbonents(link);
    dispatch({
        type: 'CHANGE_PAGE_SUCCESS',
        payload: abonents
    })
}

export const removeAbonent = (id) => async dispatch => {
    await api.deleteAbonent(id);
    await dispatch({
        type: 'DELETE_ABONENT_SUCCESS',
    })
}