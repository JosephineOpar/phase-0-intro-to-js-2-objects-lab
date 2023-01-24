const employee = {
    name: 'Josephine',
    streetAddress: 'KK 77 RD 15'
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updateEmployee = { ...obj };
    updateEmployee[key] = value;
    return updateEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
    const updateEmployee = { ...obj };
    delete updateEmployee[key];
    return updateEmployee;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}