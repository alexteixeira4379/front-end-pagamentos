import i18n from "@/i18n/wrappers/i18n";

const t = i18n.global.t
/**
 * to money value format
 *
 * @param value
 * @returns {string}
 */
export function toMoney(value){
    return parseFloat(value)
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

}

/**
 * to money value with local format
 *
 * @param value
 * @returns {string}
 */
export function toMoneyLabel(value){
    return `${t('global.moneyTypeLabel')} ${toMoney(value)}`
}