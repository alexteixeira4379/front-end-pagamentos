import yup from "./yup";
import labels from "./labels";
import customMessagesTest from './custom-messages-test'
import { validateCep } from "validations-br";

export default {
    complete_name: yup.string().required().label( labels.complete_name ),
    fantasy_name: yup.string().required().label( labels.fantasy_name ),
    social_name: yup.string().label( labels.social_name ),
    document_rg: yup.string().label( labels.document_rg ),
    document_cpf: yup.string().cpf().label( labels.document_cpf ),
    document_cpf_no_required: yup.string().cpf().label( labels.document_cpf ),
    document_pj: yup.string().cnpj().label( labels.document_pj ),
    document_pj_no_required: yup.string().cnpj().label( labels.document_pj ),
    document_ie: yup.string().label( labels.document_ie ),
    store_name: yup.string().required().slug().label( labels.store_name ),
    phone: yup.string().phone().label( labels.phone ),
    pis_pasep: yup.string().label( labels.pis_pasep ),
    sex: yup.string().label( labels.sex ),
    race: yup.string().label( labels.race ),
    birthdate: yup.string().maxAge().minAge().label( labels.birthdate ),
    office: yup.string().label( labels.office ),
    parent_name: yup.string().label( labels.parent_name ),
    mother_name: yup.string().label( labels.mother_name ),
    uf_birth: yup.object().label( labels.uf_birth ),
    city_birth: yup.string().label( labels.city_birth ),
    education: yup.object().label( labels.education ),
    type_as: yup.object().required().label( labels.type_as ),

    zip_code: yup.string().test('isCep', customMessagesTest.isCep, (value) => validateCep(value) )
        .label( labels.zip_code ),
    number: yup.string().label( labels.number ),
    address: yup.string().label( labels.address ),
    district: yup.string().label( labels.district ),
    city: yup.string().label( labels.city ),
    state: yup.string().label( labels.state ),
    complement: yup.string().label( labels.complement ).nullable(),
    bank: yup.object().required().label( labels.bank ),
    agency: yup.string().required().label( labels.agency ),
    bank_type: yup.object().required().label( labels.bank_type ),
    bank_number: yup.string().required().label( labels.bank_number ),
    bank_number_dv: yup.string().required().label( labels.bank_number_dv ),
    facebook: yup.string().label( labels.facebook ).nullable(),
    whatsapp: yup.string().label( labels.whatsapp ).nullable(),
    instagram: yup.string().label( labels.instagram ).nullable(),
    youtube: yup.string().label( labels.youtube ).nullable(),
    linkedin: yup.string().label( labels.linkedin ).nullable(),
    tiktok: yup.string().label( labels.tiktok ).nullable(),
    twitter: yup.string().label( labels.twitter ).nullable(),
    site: yup.string().url().label( labels.site ).nullable(),

    emailLogin: yup.string().required().email().label( labels.email ),
    email: yup.string().required().email().emailExists().label( labels.email ),
    password: yup.string().required().label( labels.password ),
    passwordValidation: yup.string().required().checkPassword().label( labels.password ),
    code: yup.string().required().label( labels.code ),
    passwordConfirmation: yup.string().required()
        .oneOf([yup.ref('password'), null]).label(labels.passwordConfirmation)
}