import labels from "@/shared/form-presets/labels";
import {brUFs, educationLevels, typesAsValues} from "@/shared/form-presets/data";

/**
 * all data structure to form
 *
 * @type {{}}
 */
const data = {
    password: { type: 'password', name: 'password',  label: labels.password,  icon: 'lock'},
    passwordValidation: { type: 'password', name: 'passwordValidation', debounce: 300,  label: labels.password,  icon: 'lock'},
    complete_name: { name: 'complete_name',  label: labels.complete_name,  icon: 'format_quote',  maxlength: '100'},
    fantasy_name: { name: 'fantasy_name',  label: labels.fantasy_name,  icon: 'format_quote',  maxlength: '100'},
    social_name: { name: 'social_name',  label: labels.social_name,  icon: 'format_quote',  maxlength: '100'},
    store_name: { name: 'store_name',  label: labels.store_name,  icon: 'format_quote',  maxlength: '100'},
    document_rg: { mask: '##.###.###-##', name: 'document_rg',  label: labels.document_rg,  icon: 'fingerprint',  maxlength: '15'},
    document_cpf: { mask:'###.###.###-##', name: 'document_cpf',  label: labels.document_cpf,  icon: 'badge',  maxlength: '14' },
    document_ie: { mask:'###.###.###.###', name: 'document_ie',  label: labels.document_ie,  icon: 'badge',  maxlength: '14' },
    document_cpf_no_required: { mask:'###.###.###-##', name: 'document_cpf_no_required',  label: labels.document_cpf,  icon: 'badge',  maxlength: '14' },
    document_pj: { mask:'##.###.###/####-##', name: 'document_pj',  label: labels.document_pj,  icon: 'badge',  maxlength: '18' },
    document_pj_no_required: { mask:'##.###.###/####-##', name: 'document_pj_no_required',  label: labels.document_pj,  icon: 'badge',  maxlength: '18' },
    email: { type: 'email',  name: 'email',  label: labels.email,  icon: 'email',  maxlength: '50'},
    emailLogin: { type: 'email',  name: 'email',  label: labels.email,  icon: 'email',  maxlength: '50'},
    phone: { mask:'(##) #####-####',type: 'text',  name: 'phone',  label: labels.phone,  icon: 'phone',  maxlength: '15'},
    pis_pasep: {type: 'text', name: 'pis_pasep', label: labels.pis_pasep, icon: 'radio_button_checked', maxlength: '15'},
    sex: { icon: 'fas fa-venus-mars',  type: 'text',  name: 'sex',  label: labels.sex,  maxlength: null},
    race: { icon: 'invert_colors',  type: 'text',  name: 'color',  label: labels.race,  maxlength: null},
    birthdate:  { icon: 'event', 'stack-label': true, type: 'date', name: 'birthdate', label: labels.birthdate, maxlength: '10'},
    office: { icon: 'work', type: 'text', name: 'office', label: labels.office, maxlength: null},
    parent_name: { icon: 'wc', type: 'text', name: 'parent_name', label: labels.parent_name, maxlength: null},
    mother_name: { icon: 'wc', type: 'text', name: 'mother_name', label: labels.mother_name, maxlength: null},
    uf_birth: { options: brUFs(), icon: 'location_city', type: 'select', name: 'uf_birth', label: labels.uf_birth, maxlength: null},
    city_birth: { icon: 'location_city', type: 'text', name: 'city_birth', label: labels.city_birth, maxlength: null},
    education: { options: educationLevels(), icon: 'school', type: 'select', name: 'education', label: labels.education, maxlength: null},
    type_as: { options: typesAsValues(), icon: 'quote', type: 'select', name: 'type_as', label: labels.type_as, maxlength: null},
    zip_code: { icon: 'quote', mask: '#####-###', type: 'text', name: 'zip_code', label: labels.zip_code, maxlength: null},
    number: { icon: 'quote', type: 'text', name: 'number', label: labels.number, maxlength: null},
    address: { readonly: true, icon: 'quote', type: 'text', name: 'address', label: labels.address, maxlength: null},
    district: { readonly: true, icon: 'quote', type: 'text', name: 'district', label: labels.district, maxlength: null},
    city: { readonly: true, icon: 'quote', type: 'text', name: 'city', label: labels.city, maxlength: null},
    state: { readonly: true, icon: 'quote', type: 'text', name: 'state', label: labels.state, maxlength: null},
    complement: { icon: 'quote', type: 'text', name: 'complement', label: labels.complement, maxlength: null},
    bank: { icon: 'account_balance', type: 'select', name: 'bank', label: labels.bank, maxlength: null},
    agency: { mask: '#'.repeat(15), icon: 'switch_account', type: 'text', name: 'agency', label: labels.agency, maxlength: 15},
    bank_type: { icon: 'person_outline', type: 'select', options:[ {value: 1, label: 'Conta Corrente'}, {value: 2, label: 'Conta Poupança'} ], name: 'bank_type', label: labels.bank_type, maxlength: null},
    bank_number: { mask: '#'.repeat(15), icon: 'confirmation_number', type: 'text', name: 'bank_number', label: labels.bank_number, maxlength: null},
    bank_number_dv: { mask: '#'.repeat(5), icon: 'tag', type: 'text', name: 'bank_number_dv', label: labels.bank_number_dv, maxlength: null},
    facebook: { prefix: 'facebook.com/', icon: 'fab fa-facebook-f', type: 'text', name: 'facebook', label: labels.facebook, maxlength: null},
    instagram: { prefix: 'instagram.com/', icon: 'fab fa-instagram', type: 'text', name: 'instagram', label: labels.instagram, maxlength: null},
    whatsapp: { prefix: '+55', mask:'(##) #####-####',type: 'text',  name: 'whatsapp',  label: labels.whatsapp,  icon: 'fab fa-whatsapp',  maxlength: '15'},
    youtube: { prefix: 'youtube.com/', icon: 'fab fa-youtube', type: 'text', name: 'youtube', label: labels.youtube, maxlength: null},
    linkedin: { prefix: 'linkedin.com/in/', icon: 'fab fa-linkedin', type: 'text', name: 'linkedin', label: labels.linkedin, maxlength: null},
    tiktok: { prefix: 'tiktok.com/@',icon: 'fab fa-tiktok', type: 'text', name: 'tiktok', label: labels.tiktok, maxlength: null},
    twitter: { prefix: 'twitter.com/', icon: 'fab fa-twitter', type: 'text', name: 'twitter', label: labels.twitter, maxlength: null},
    site: { icon: 'fas fa-globe', type: 'text', name: 'site', label: labels.site, maxlength: null},
}

/**
 * mapped function
 *
 * @param names
 * @returns {*}
 */
export default function(names) {
    let object = {}
    names.map( (name) => {
        if(data[name]){
            object[name] = data[name]
        }
    })

    return object

}