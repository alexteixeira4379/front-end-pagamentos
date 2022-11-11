/**
 * @param {String} url
 * @param {Object} binds
 * @returns {*}
 */
export function bind( url, binds ){

    let newUrl = url;

    Object.entries(binds).map( (values) => {
        newUrl = newUrl.replace( `{${values[0]}}`, values[1] )
    })

    return newUrl;
}
