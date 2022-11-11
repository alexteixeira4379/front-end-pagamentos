import * as types from './mutation-types'

/**
 * Export all mutations
 */
export default {
    /**
     * @param state
     * @param payload
     */
    [types.SET_REQUESTS] (state, { key, response }) {
        state.requests[key] = response
    },
}