export const IDRCurrencyFormatter = (nominal: number) => {
    const formattedCurrencyID = nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0});
    return formattedCurrencyID;
}