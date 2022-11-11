import { setLocale } from "yup";

function formatValues( values, i18n ){
    return values.split(',').map( (v) => {
        if(v && v.length){
            console.log(v);
            let name = 'forms.labels.'+ v.replace(/[^a-zA-Z ]/g, '').trim();
            return i18n.t(name)
        }
        return null;
    }).filter( (v) => v ).join(',')
}

export default i18n => {
    setLocale({
        mixed: {
            default: (label) => i18n.t('forms.validation.invalid', label),
            notType: (label) => i18n.t('forms.validation.invalid', label),
            isCep: (label) => i18n.t('forms.validation.cep', label),
            required: (label) => i18n.t('forms.validation.required', label),
            oneOf:({path, values}) => i18n.t('forms.validation.oneOf',
                { path, ref:formatValues(values, i18n) } ),
        },
        string: {
            min: ({ min }) => i18n.t('forms.validation.minLength', { min }),
            max: ({ max }) => i18n.t('forms.validation.maxLength', { max }),
        },
    });
}

