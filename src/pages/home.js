import React from "react";
import {connect} from "react-redux";

const Home = (props) => {
    const {dispatch} = props

    return (
        <div>
            <button onClick={() => dispatch({
                type: 'takeEvery'
            })}>点击发送takeEvery
            </button>
            <button onClick={() => dispatch({
                type: 'takeLatest'
            })}>点击发送takeLatest
            </button>
            <button onClick={() => dispatch({
                type: 'throttle'
            })}>点击发送Throttle
            </button>
        </div>
    )
}

export default connect()(Home)