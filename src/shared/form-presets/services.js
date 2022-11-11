/**
 * By exposing all services used in the module,
 * they are written by axios, responsible for the http control,
 * and are exposed to be used as metadata returning a promise
 */
export default {

    /**
     * api to validation store slug
     *
     * @api-version 1
     *
     * @returns {{method: string, url: string}}
     */
    slug: () => ({ method: "GET", url: 'api/v1/validate/{partnerSlug}/slug/{newSlug}' }),

    /**
     * api to validation cpf
     *
     * @api-version 1
     *
     * @returns {{method: string, url: string}}
     */
    cpf: () => ({ method: "GET", url: 'api/v1/validate/{partnerSlug}/cpf/{cpf}' }),

    /**
     * api to validation cnpj
     *
     * @api-version 1
     *
     * @returns {{method: string, url: string}}
     */
    cnpj: () => ({ method: "GET", url: 'api/v1/validate/{partnerSlug}/cnpj/{cnpj}' }),

    /**
     * api to validation email
     *
     * @api-version 1
     *
     * @returns {{method: string, url: string}}
     */
    email: () => ({ method: "GET", url: 'api/v1/validate/{partnerSlug}/email/{email}' }),

    /**
     * api to validation phone number
     *
     * @return {{method: string, url: string}}
     */
    phone: () => ({ method: "GET", url: 'api/v1/validate/{partnerSlug}/phone/{phone}' }),

}