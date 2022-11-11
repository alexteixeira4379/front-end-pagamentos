import services from '@/shared/http'
import * as types from './mutation-types'

/**
 * set questions action
 *
 * @param commit
 * @param payload
 */
export const setFaqDataAction = ({ commit }, payload) => {
    commit(types.SET_CATEGORIES, payload)
}

/**
 * action to fetch question
 *
 * @param dispatch
 * @returns {*}
 */
export const fetchFaqQuestionsAction = ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
        services.faq.fetchFaqQuestions(payload).then( (questions) => {
            dispatch('setFaqDataAction', questions)
            resolve()
        }).catch( (error) => reject(error) )
    })
}