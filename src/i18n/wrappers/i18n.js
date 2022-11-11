import { createI18n } from "vue-i18n/index";
import messages from "@/i18n/messages";

/**
 * instance setup
 *
 * @type {Object}
 */
const i18n = createI18n({
    locale: 'pt-Br',
    messages,
})

export default i18n