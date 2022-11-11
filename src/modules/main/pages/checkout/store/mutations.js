import * as types from './mutation-types'

/**
 * Export all mutations
 */
export default {
    /**
     * @param state
     * @param payload
     */
    [types.SET_CATEGORIES] (state, payload) {
        state.categories = payload
    },
}