// DEFINE YOUR FUNCTION BELOW:
function capitalize(stringValue) {
    const stringSection = stringValue.slice(1);
    const firstElement = stringValue[0].toUpperCase();
    return firstElement + stringSection;
}