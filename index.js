const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}

const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIcecream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state
    }
}

const icecreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIcecream: state.numberOfIcecream - 1
            }
        default:
            return state
    }
}


const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state ', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()




