const password = require('./password');
testString1 = "Anthony Attaya-Harris";
testString2 = "!Anthony Attaya-Harris";
testString3 = "Jordan3!g73kvirf";
testString4 = "Jordan3485768594";
testString5 = "3ordan!skj34lk25";
testString6 = "3ordan!skj34lk2";


test('tests Anthony Attaya-Harris to be 16 long', () => {
    expect(password.checkLength("Anthony Attaya-Harris")).toBe(false);
});
test('tests Anthony Attaya-Harris to contain numbers', () => {
    expect(password.containsNumbers("Anthony Attaya-Harris")).toBe(false);
});
test('tests Anthony Attaya-Harris to contains Letters', () => {
    expect(password.containsLetters("Anthony Attaya-Harris")).toBe(true);
});
test('tests Anthony Attaya-Harris to contain special characters', () => {
    expect(password.containsSpecial("Anthony Attaya-Harris")).toBe(true);
});
test('tests Anthony Attaya-Harris to does not contains a special character in the beginning', () => {
    expect(password.noSpecialInFirst("Anthony Attaya-Harris")).toBe(true);
});
test('tests Anthony Attaya-Harris to does not contains a number in the beginning', () => {
    expect(password.noNumberInFirst("Anthony Attaya-Harris")).toBe(true);
});

test('tests if ' + testString2 + ' to be 16 long', () => {
    expect(password.checkLength(testString2)).toBe(false);
});
test('tests if ' + testString2 + ' to contain a number', () => {
    expect(password.containsNumbers(testString2)).toBe(false);
});
test('tests if ' + testString2 + ' to contains Letters', () => {
    expect(password.containsLetters(testString2)).toBe(true);
});
test('tests if ' + testString2 + 'to contain special characters', () => {
    expect(password.containsSpecial(testString2)).toBe(true);
});
test('tests if ' + testString2 + ' to not contain a special character in first', () => {
    expect(password.noSpecialInFirst(testString2)).toBe(false);
});
test('tests if ' + testString2 + 'to does not contains a number in the beginning', () => {
    expect(password.noNumberInFirst(testString2)).toBe(true);
});

test('tests if ' + testString3 + ' to be 16 long', () => {
    expect(password.checkLength(testString3)).toBe(true);
});
test('tests if ' + testString3 + ' to contain a number', () => {
    expect(password.containsNumbers(testString3)).toBe(true);
});
test('tests if ' + testString3 + ' to contains Letters', () => {
    expect(password.containsLetters(testString3)).toBe(true);
});
test('tests if ' + testString3 + 'to contain special characters', () => {
    expect(password.containsSpecial(testString3)).toBe(true);
});
test('tests if ' + testString3 + ' to not contain a special character in first', () => {
    expect(password.noSpecialInFirst(testString3)).toBe(true);
});
test('tests if ' + testString3 + 'to does not contains a number in the beginning', () => {
    expect(password.noNumberInFirst(testString3)).toBe(true);
});

test('tests if ' + testString4 + ' to be 16 long', () => {
    expect(password.checkLength(testString4)).toBe(true);
});
test('tests if ' + testString4 + ' to contain a number', () => {
    expect(password.containsNumbers(testString4)).toBe(true);
});
test('tests if ' + testString4 + ' to contains Letters', () => {
    expect(password.containsLetters(testString4)).toBe(true);
});
test('tests if ' + testString4 + 'to contain special characters', () => {
    expect(password.containsSpecial(testString4)).toBe(false);
});
test('tests if ' + testString4 + ' to not contain a special character in first', () => {
    expect(password.noSpecialInFirst(testString4)).toBe(true);
});
test('tests if ' + testString4 + 'to does not contains a number in the beginning', () => {
    expect(password.noNumberInFirst(testString4)).toBe(true);
});

test('tests if ' + testString5 + ' to be 16 long', () => {
    expect(password.checkLength(testString5)).toBe(true);
});
test('tests if ' + testString5 + ' to contain a number', () => {
    expect(password.containsNumbers(testString5)).toBe(true);
});
test('tests if ' + testString5 + ' to contains Letters', () => {
    expect(password.containsLetters(testString5)).toBe(true);
});
test('tests if ' + testString5 + 'to contain special characters', () => {
    expect(password.containsSpecial(testString5)).toBe(true);
});
test('tests if ' + testString5 + ' to not contain a special character in first', () => {
    expect(password.noSpecialInFirst(testString5)).toBe(true);
});
test('tests if ' + testString5 + 'to does not contains a number in the beginning', () => {
    expect(password.noNumberInFirst(testString5)).toBe(false);
});

test('tests if ' + testString6 + ' to be 16 long', () => {
    expect(password.checkLength(testString6)).toBe(false);
});
test('tests if ' + testString6 + ' to contain a number', () => {
    expect(password.containsNumbers(testString6)).toBe(true);
});
test('tests if ' + testString6 + ' to contains Letters', () => {
    expect(password.containsLetters(testString6)).toBe(true);
});
test('tests if ' + testString6 + 'to contain special characters', () => {
    expect(password.containsSpecial(testString6)).toBe(true);
});
test('tests if ' + testString6 + ' to not contain a special character in first', () => {
    expect(password.noSpecialInFirst(testString6)).toBe(true);
});
test('tests if ' + testString6 + 'to does not contains a number in the beginning', () => {
    expect(password.noNumberInFirst(testString6)).toBe(false);
});