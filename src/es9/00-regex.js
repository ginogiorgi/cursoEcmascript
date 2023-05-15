const regexData = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regexData.exec("2022-01-01");
console.table(matchers);