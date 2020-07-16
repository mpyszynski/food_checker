export default (array, target) => {
    const item = array.find(x => x[0] === target)
    const filteredArr = array.filter(x => x !== item)
    return [item, ...filteredArr]
}