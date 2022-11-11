/**
 * @FAQ-services
 */
export default {

    /**
     * faq question index
     *
     * @api-version 1
     *
     * @returns {{method: string, url: string}}
     */
    fetchFaqQuestions: () => ({ method: "GET", url: 'api/v1/faq' }),

}