import * as types from './mutation-types'
import { hashFnv32a } from '@/shared/helpers/stringManipulations'

/**
 * @param value
 * @param params
 * @returns {string}
 */
const makeKey = (value, params = {}) => {
    return hashFnv32a( value + JSON.stringify(params) )
}

/**
 * persist request before call
 *
 * @param commit
 * @param response
 * @param key
 */
export const setRequest = ({commit}, { response, key }) => {
    return commit(types.SET_REQUESTS, { response, key })
}

/**
 * @param conf
 * @returns {*|boolean|boolean}
 */
function requestCanBePersisted( conf ){

    conf.persistRequest = conf.persistRequest || false
    conf.noPersist = conf.noPersist || false

    /**
     * if it has this attribute, the request will be forced to persist.
     */
    if(conf.persistRequest) {
        return true
    }
    /**
     * if it has this attribute, the request will be forced to not persist.
     */
    else if(conf.noPersist){
        return false
    }

    /**
     * by default all GET request need to persist
     */
    return conf.method.toUpperCase() === 'GET'
}

/**
 * persist request before call
 *
 * @param commit
 * @param payload
 */
export const persistBeforeCall = ({ dispatch, state }, { axios, url, conf }) => {
    return new Promise((resolve, reject) => {
        const key = makeKey(url, conf)

        if(requestCanBePersisted(conf)){
            const wasRequested = Object.prototype.hasOwnProperty.call(
                state.requests, key
            );
            if(wasRequested){
                return resolve(state.requests[key])
            }
        }
        axios().then( async response => {
            await dispatch('setRequest', { response: response, key: key })
            resolve(response)
        }).catch( error => reject(error) )
    })
}
