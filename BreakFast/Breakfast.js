const Breakfast = (flowerOne, flowerTwo) => {
    return (flowerOne % 2 === 0 && flowerTwo % 2 !== 0) || (flowerOne % 2 !== 0 && flowerTwo % 2 === 0);
}

module.exports = {Breakfast};