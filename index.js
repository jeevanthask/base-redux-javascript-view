const redux = require('redux')
const createStore = redux.createStore


//define a string cnstant which fefines the type of the action
const BUY_CAKE = 'BUY_CAKE'

//create the action
// {
//     type:BUY_CAKE,
//     info:'first redux action'
// }

//create a function to return action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

// action is a object with type property
// a function is a action creator


//reducer
//(previousState,action) => newState

const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer)
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()




