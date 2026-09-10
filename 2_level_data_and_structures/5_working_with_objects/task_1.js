function checkFields(obj, fields) {
    fields.forEach(field => {
        if (Object.hasOwn(obj, field)) {
            console.log(`${field}: существует`);
        }
        else {
            console.log(`${field}: отсутствует`);
        }
    });
}