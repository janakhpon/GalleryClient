import axios from 'axios';
import {
    GET_DATA,
    GET_DATA_TYPE,
    GET_DATA_KEY,
    ADD_DATA,
    UPDATE_DATA,
    DELETE_DATA
} from '../Types';
const url = 'http://localhost:5000/api';


export const addData = postData => dispatch => {
    axios.post(url + '/upload', postData)
    .then(res => dispatch({
        type: ADD_DATA,
        payload: res.data
    }))
    .catch(err => console.log(err))
};


export const getData = () => dispatch => {
    axios.get(url + '/list')
    .then(res => dispatch({
        type: GET_DATA,
        payload: res.data
    })).catch(err => console.log(err))
};


export const getDataByTye = type => dispatch => {
    axios.get(url+`/type/${type}`)
    .then(res => dispatch({
        type: GET_DATA_TYPE,
        payload: res.data
    })).catch(err => console.log(err))
};


export const getDataByKey = key => dispatch => {
    axios.get(url + `/keyword/${key}`)
    .then(res => dispatch({
        type: GET_DATA_KEY,
        payload: res.data
    })).catch(err => console.log(err))
};


export const deleteData = (ID) => dispatch => {
    axios.delete(url +`/delete/${ID}`)
    .then(res => dispatch({
        type: DELETE_DATA,
        payload: res.data
    })).catch(err => console.log(err))
};