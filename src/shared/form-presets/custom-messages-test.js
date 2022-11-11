/**
 * yup needs messages for personality rules to be set at declaration time, here we have some
 */

import i18n from "@/i18n/wrappers/i18n";
import forms from "@/i18n/langs/pt-br/forms";

const { validation } = forms

const t = i18n.global.t

const data = {}

Object.keys(validation.custom).map( (name) => {
    data[name] = t(`forms.validation.custom.${name}`)
})

export default data