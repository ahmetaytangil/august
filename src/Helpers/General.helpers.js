export const filterPropertySearch = (
    data,
    buyRent,
    ispending_currency,
    currencyParitesData,
    sort,
    settedCurrency
) => {
    const filteredItems = data.filter(b => buyRent ? b.list_type === "rent" : b.list_type === "buy").sort(
        (a, b) => {
            const bParite = ispending_currency ? null : currencyParitesData.filter(f => f.fromCurrency === b.currency && f.toCurrency === settedCurrency)[0];
            const aParite = ispending_currency ? null : currencyParitesData.filter(f => f.fromCurrency === a.currency && f.toCurrency === settedCurrency)[0];
            const aCarp = aParite !== null ? aParite !== undefined ? parseFloat(aParite.parite) : 0 : 0;
            const bCarp = bParite !== null ? bParite !== undefined ? parseFloat(bParite.parite) : 0 : 0;

            if (sort === "HTL" && bParite !== null && aParite !== null) {
                return b.asking_price * bCarp - a.asking_price * aCarp
            } else if (sort === "LTH" && bParite !== null && aParite !== null) {
                return a.asking_price * aCarp - b.asking_price * bCarp
            } else {
                return null
            }
        }
    )

    return filteredItems
}

export const defaultValues = (properties) => {
    const allPrices = (properties !== null) ? properties.map(thisdata => thisdata.asking_price) : null;
    const sortedPrices = allPrices !== null ? allPrices.sort((a, b) => a - b) : null;

    if (sortedPrices !== null) {
        return [sortedPrices[0], sortedPrices[sortedPrices.length - 1]]
    } else {
        return [0, 100]
    }
}

export const formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
}
