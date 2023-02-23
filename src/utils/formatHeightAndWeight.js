export const formatHeightAndWeight = (attribute) => {
    const attributeString = attribute.toString();

    if (attributeString.length === 1) {
        return `0,${attributeString}`
    } else if (attributeString.length === 2) {
        return attributeString.slice(0, 1) + ',' + attributeString.slice(1)
    } else if (attributeString.length === 3) {
        return attributeString.slice(0, 2) + ',' + attributeString.slice(2)
    } else if (attributeString.length === 4) {
        return attributeString.slice(0, 3) + ',' + attributeString.slice(3)
    }
};

