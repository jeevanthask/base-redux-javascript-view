const redux = require('redux')
const createStore = redux.createStore

const BASKET_FILL = 'BASKET_FILL'

function incrementCount() {
    return {
        type: BASKET_FILL,
        info: 'going to fill the basket'
    }
}

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BASKET_FILL:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)

console.log('Initial State ', store.getState())

const unsubscribe = store.subscribe(() => console.log('updated state ', store.getState()))

store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())

unsubscribe()
