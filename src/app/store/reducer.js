
export const reducer = (state, action) => {
    switch (action.type) {
        case 'any':
            return { ...state, ...action.data }

        default:
            return { ...state };
    }
};
