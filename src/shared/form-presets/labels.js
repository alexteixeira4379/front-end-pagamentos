import i18n from "@/i18n/wrappers/i18n";
import forms from "@/i18n/langs/pt-br/forms";

const { labels } = forms

const t = i18n.global.t

const data = {}

Object.keys(labels).map( (name) => {
    data[name] = t(`forms.labels.${name}`)
})

export default data