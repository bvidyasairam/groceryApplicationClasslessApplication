const intialState = {
    grocerySelectedBilling: [],
    itemCost: 0,
    BillingAmount: 0
}

export default (state = intialState, action) => {
    switch (action.type) {
        case "GROCERYBILLING": {
            return {
                ...state,
                arrayContent: state.grocerySelectedBilling.push(action.data),
                BillingAmount: action.exisitingBill + action.itemCost
            }
        }
        default: {
            return state;
        }
    }
}
    // if (action.type = "GROCERYBILLING") {
    //     newState.grocerySelectedBilling.push(action.data)
    // }
    // return newState;
