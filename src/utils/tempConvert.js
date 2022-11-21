export const kelToCel = (num) => {
    return !num ? '-' : (num - 273.15).toFixed(0) + '°';
}