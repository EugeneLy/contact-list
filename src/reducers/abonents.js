import parse from 'parse-link-header';

const initialState = {
    list: [],
    link: { next:{} }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ABONENTS_SUCCESS':
            return state = {
                list: action.payload.data,
                link: parse(action.payload.headers.link),
            };

        case 'CHANGE_PAGE_SUCCESS':
            return state = {
                list: action.payload.data,
                link: parse(action.payload.headers.link)
            };

        case 'DELETE_ABONENT_SUCCESS':
            return state
        default:
            return state
    }
}