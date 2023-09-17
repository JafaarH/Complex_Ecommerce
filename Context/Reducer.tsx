export const intialValue = {
    total: 0,
    products: [],
}

export const Reducer = (state: any, action: {payload: any, type: any }) => {
    switch (action.type) {
        case "add":
        return {
            ...state,
            products: action.payload};
        case "remove":
            return {
                ...state,
                products: action.payload};
            case "total":
                return {
                    ...state,
                    total: action.payload};
                default:
                     throw new Error("Problem in Reducer function");
}
}

export const productValue = {
    byRate: -1,
    searchQuery: "",
    sort: ""
}

export const productReducer = ( productState: any, action: { type: any; payload: any; } ) => {
    switch(action.type){
        case "SORT_BY_PRICE":
            return {
                ...productState,
                sort: action.payload
            }
            case "FILTER_BY_RATING":
                return {
                    ...productState,
                    byRate: action.payload
                }
                case "FILTER_BY_SEARCH":
                    return {
                        ...productState,
                        searchQuery: action.payload
                    }
                    case "BUTTON":
                        return {
                            byRate: 0,
                            searchQuery: "",
                            sort: ""
                        }
                        default: throw new Error ("problom in productReducer")
    }
}