const createInfo = (field: String, value: String) => {
    return { field: field, value: value };
}

export default [
    createInfo("Salutation", "Mrs"),
    createInfo("Date of birth", new Date("1978.01.19").toLocaleDateString('pl-PL')),
    createInfo("Nationality", "Germany"),
];