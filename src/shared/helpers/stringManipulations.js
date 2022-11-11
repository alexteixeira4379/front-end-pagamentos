import StringMask from 'string-mask/src/string-mask'

/**
 * @param value
 * @returns {*}
 */
export function toPhone( value ){
    return (new StringMask('+00 (00) 0000-0000')).apply(value);
}


/**
 * Calculate a 32 bit FNV-1a hash
 *
 * @param {string} str the input value
 * @param {boolean} [asString=false] set to true to return the hash value as
 *     8-digit hex string instead of an integer
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
export function hashFnv32a(str, asString, seed) {
    /*jshint bitwise:false */
    let i, l,
        h_val = (seed === undefined) ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i++) {
        h_val ^= str.charCodeAt(i);
        h_val += (h_val << 1) + (h_val << 4) + (h_val << 7) + (h_val << 8) + (h_val << 24);
    }
    if( asString ){
        // Convert to 8 digit hex string
        return ("0000000" + (h_val >>> 0).toString(16)).substr(-8);
    }
    return h_val >>> 0;
}