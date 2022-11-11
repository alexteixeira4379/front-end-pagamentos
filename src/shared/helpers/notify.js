import { Notify } from "quasar";
import i18n from "@/i18n/wrappers/i18n";
const t = i18n.global.t

/**
 *
 * @param {String} message
 * @param {Boolean} translate
 * @returns {String}
 */
const getMessage = (message, translate) => {
    if(translate){
        return t(message)
    }

    return message
}

/**
 * @param message
 * @param translate
 */
export const notifySuccess = (message = 'notify.success', translate = true) => {
    Notify.create({
        message: getMessage(message, translate),
        type: 'positive',
        color: 'light-blue-8',
        position: 'top-right',
    })
}

/**
 * @param message
 * @param translate
 */
export const notifyInfo = (message, translate = true) => {
    Notify.create(getMessage(message, translate))
}


/**
 * @param message
 * @param translate
 */
export const notifyError = (message = 'notify.error', translate = true) => {
    Notify.create({
        message: getMessage(message, translate),
        position: 'top-right',
        color: 'red',
        icon: 'fas fa-exclamation'
    })
}

