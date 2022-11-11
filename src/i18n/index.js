import buildYupI18n from './wrappers/buildYupI18n'
import i18n from './wrappers/i18n'

/**
 * build applications internationalization for yup
 */
buildYupI18n( i18n.global )

/**
 * export i18n instance
 */
export default i18n;