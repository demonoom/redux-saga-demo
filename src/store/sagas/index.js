import {takeEvery, takeLatest, throttle} from 'redux-saga/effects'

export function* defSaga() {
    yield takeEvery('takeEvery', function* () {
        console.log('takeEvery');
    })
    yield takeLatest('takeLatest', function* () {
        console.log('takeLatest');
    })
    yield throttle(0, 'throttle', function* () {
        console.log('throttle');
    })
}