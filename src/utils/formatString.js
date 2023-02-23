export const formatHeight = (height) => {
    const heightString = height.toString();

    if (heightString.length === 1) {
        return `0,${heightString}`

    } else if (heightString >= 2) {
        return heightString.slice(0, 1) + ',' + heightString.slice(1)
    }
};