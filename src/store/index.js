import {createStore, applyMiddleware, compose} from "redux";
import {deReducer} from "./reducers";

//导入saga 最终需要去run一下，执行一下saga

import {defSaga} from "./sagas";

//导入 createSagaMiddleware
import createSagaMiddleware from 'redux-saga'

//调用一下这个函数，来创建 sagaMiddleWare
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//构建store
//createStore(reducer,initState,中间件)，通过applyMiddleware来关联 saga 和 store
export default createStore(
    deReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

//利用middleware 来 run 一下
sagaMiddleware.run(defSaga)
