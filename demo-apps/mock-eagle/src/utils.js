export const formatDate = (date) => {
    if (!(date instanceof Date)) {
        return '';
    }

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
}

export const addThousandsSeparator = (str, separator) => {
    const parts = str.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return parts.join('.')
}

export const formatNumber = (value, fractionDigits = 2) =>
    typeof value === 'number' ? addThousandsSeparator(value.toFixed(fractionDigits), ',') : ''

export const priceValueFormatter = (params) =>
    typeof params.value === 'number' ? formatNumber(params.value) : ''