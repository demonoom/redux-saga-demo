import {takeEvery, takeLatest, throttle, select, call, take, put} from 'redux-saga/effects'
import axios from "axios";

export function* defSaga() {
    yield takeEvery('takeEvery', function* () {
        const user = yield select(state => state.user)
        const res = yield call(axios.post, 'http://192.168.46.134:3001/login', user)
        yield put({
            type: 'LOGIN_SUCCESS',
            res: res.data
        })
    })
    let count = 0
    yield takeLatest('takeLatest', function* () {
        const user = yield select(state => state.user)
        const res = yield call(axios.post, 'http://192.168.46.134:3001/login', {
            ...user,
            count: ++count
        })
        console.log('takeLatest', res);
    })
    yield throttle(2000, 'throttle', function* () {
        const user = yield select(state => state.user)
        const res = yield call(axios.post, 'http://192.168.46.134:3001/login', {
            ...user,
            count: count++
        })
        console.log('throttle', res);
    })
}