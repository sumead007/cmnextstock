import { put, call } from 'redux-saga/effects';
import actions from "../actions"
import httpClient from "../../utils/httpClient"
import { kResultOk, kResultNok } from '../../utils/contants';
import Router from 'next/router';


export function* sagaStockDelete({ payload,dispatch }: any) {
    try {
        const response = yield call(httpClient.delete, `/stock/product/${payload}`)
        const { result } = response.data
        if (result == kResultOk) {
            // Router.push('/stock')
            dispatch(actions.feedStockList())
        }
    } catch (error) {
        // Nothing 
    }
}