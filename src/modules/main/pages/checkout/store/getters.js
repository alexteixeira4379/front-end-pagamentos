/**
 Export all getters from state
*/

/**
 * @param categories
 * @returns {*[]|*}
 */
export const getCategoriesWithQuestions = ({ categories }) => {
    if(categories.data){
        return categories.data
        // return categories.data.filter(
        //     (category) => category.questions && category.questions.length )
    }

    return []
}

/**
 * @param state
 * @param getters
 * @param rootState
 * @returns {null|*}
 */
export const getFaqContacts = (state, getters, rootState) => {

    const parameters = rootState.partner.parameters;

    if( parameters && parameters.basic_contacts){
        return parameters.basic_contacts.value
    }
    return null
}

/**
 * @param categories
 * @returns {*}
 */
export const getPaginationResource = ( { categories } ) => {
    let pagination = Object.assign({}, categories)
    delete pagination.data
    return pagination;
}