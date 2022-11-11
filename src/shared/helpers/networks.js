import {Platform} from "quasar";

/**
 * @param obj
 * @return {string}
 */
function http_build_query( obj )
{
    let parts = [];
    for ( let i in obj ) {
        if (Object.prototype.hasOwnProperty.call(obj, i )) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
}

/**
 * @param params
 * @returns {string}
 */
export function getWhatsAppUrl(params){

    let _url = '';
    if ( Platform.is.mobile ) {
        _url = 'https://api.whatsapp.com/send?';
    } else {
        _url = 'https://web.whatsapp.com/send?';
    }

    _url +=  http_build_query(params);

    return _url;
}

function stripslashes (str)
{
    return (str + '').replace(/\\(.?)/g, function (s, n1) {
        switch (n1) {
            case '\\':
                return '\\';
            case '0':
                return '\u0000';
            case '':
                return '';
            default:
                return n1;
        }
    });
}

export function callToWhatsApp( text, number = null, _new_tab = true ) {
    window.open( getWhatsAppUrl({ text, number }), _new_tab ? '_blank': null );
}

/**
 * @param text
 * @param url
 * @param _new_tab
 */
export function callToFacebook( text, url = null, _new_tab = true )
{
    let _url = 'https://www.facebook.com/share.php?';

    _url += http_build_query({ u: url, quote: stripslashes(text) });

    window.open(_url, _new_tab ? '_blank': null );
}

/**
 *
 * @param text
 * @param url
 * @param _new_tab
 */
export function callToTwitter ( text, url = null, _new_tab = true )
{
    let _url = 'https://twitter.com/intent/tweet?';

    _url += http_build_query({ text, url });

    window.open(_url, _new_tab ? '_blank': null );
}

/**
 * params.url = website
 * params.text = description
 *
 * @param params
 * @param _new_tab
 */
export function callToPinterest ( params, _new_tab = true )
{
    let _url = 'https://pinterest.com/pin/create/button/?';

    delete Object.assign(params, {['description']: params['text'] })['text'];

    _url += http_build_query(params);

    window.open(_url, _new_tab ? '_blank': null );
}

/**
 * params.url = website
 * params.text = description
 *
 * @param params
 * @param _new_tab
 */
export function callToLinkedin ( params, _new_tab = true )
{
    let _url = 'https://www.linkedin.com/shareArticle?mini=true&';

    _url += http_build_query(params);

    window.open(_url, _new_tab ? '_blank': null );
}

/**
 * params.subject = subject
 * params.cc = cc
 * params.bcc = bcc
 * params.body = body
 *
 * @param email
 * @param params
 * @param _new_tab
 */
export function callToEmail ( email, params, _new_tab = true )
{
    let _url = 'mailto:'+email+'?';

    _url += http_build_query(params);

    window.open(_url, _new_tab ? '_blank': null );
}