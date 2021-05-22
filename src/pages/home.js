import React from "react";
import {connect} from "react-redux";
import axios from "axios";

const Home = (props) => {
    const {dispatch, userInfo} = props

    console.log(userInfo, 'userInfo');

    return (
        <div>
            <button onClick={() => dispatch({
                type: 'takeEvery',
                user: {
                    username: 'zs',
                    password: '123'
                }
            })}>点击发送takeEvery
            </button>
            <button onClick={() => dispatch({
                type: 'takeLatest',
                user: {
                    username: 'zs',
                    password: '123'
                }
            })}>点击发送takeLatest
            </button>
            <button onClick={() => dispatch({
                type: 'throttle',
                user: {
                    username: 'zs',
                    password: '123'
                }
            })}>点击发送Throttle
            </button>
            <button onClick={() => dispatch({
                type: 'take'
            })}>点击发送take
            </button>
            <button onClick={() => {
                axios({
                    method: 'get',
                    url: 'http://192.168.46.134:3001/getUserInfo',
                }).then(res => {
                    console.log(res);
                })
            }}>
                get
            </button>
            <button onClick={() => {
                axios({
                    method: 'post',
                    url: 'http://192.168.46.134:3001/login',
                    data: {
                        username: 'noom',
                        passward: 123
                    }
                }).then(res => {
                    console.log(res);
                })
            }}>
                post
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps)(Home)