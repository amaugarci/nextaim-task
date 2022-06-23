const createItem = (primary_name: String, date_of_birth: String, citizenship: String, title: String,
    id: String, score: String, markedAsHit: Boolean) => {
    return { primary_name, date_of_birth, citizenship, title, id, score, markedAsHit };
}

export default [
    createItem("Rhona Jefferson", "1964-04-14", "Netherlands", "Example List 1", '152866', '0,68', false),
    createItem("Rhona Jefferson", "1964-04-14", "Netherlands", "Example List 2", '152867', '0,68', false),
    createItem("Rhona Jefferson", "1964-04-14", "Netherlands", "Example List 5", '152870', '0,68', false),
];