import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let publishedQuestions = questions.filter((question: Question): boolean => question.published);
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let nonEmptyQuestions = questions.filter((question: Question): boolean => (question.body != "" || question.expected != "" || question.options.length != 0));
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    let location = questions.findIndex((question: Question): boolean => (question.id == id));
    if (location == -1) {
        return null;    
    }
    return questions[location];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let removedQuestionArray = questions.filter((question: Question): boolean => !(question.id == id));
    return removedQuestionArray;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let nameArray = []
    for (let i = 0; i < questions.length; i++) {
        nameArray.push(questions[i].name);
    }
    return nameArray;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let sum = questions.reduce((currentTotal: number, question: Question) => currentTotal+=question.points, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let pubSum = questions.reduce((currentTotal: number, question: Question) => (currentTotal += (question.published == true) ? question.points: 0), 0);
    return pubSum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let returnString = "";
    returnString += "id,name,options,points,published";
    for (let i = 0; i < questions.length; i++) {
        returnString += "\n" + questions[i].id + "," + questions[i].name + "," + questions[i].options.length + "," + questions[i].points + "," + questions[i].published;
    }
    return returnString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answerArray = [];
    for (let i = 0; i < questions.length; i++) {
        let tempAnswer = {
            questionId: questions[i].id,
            text: "",
            submitted: false,
            correct: false
        };
        answerArray.push(tempAnswer);
        
    }
    return answerArray;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let newArray = [];    
    for (let i = 0; i < questions.length; i++) {
        let tempQuestion = {...questions[i]}
        tempQuestion.published = true;
        newArray.push(tempQuestion);
    }
    return newArray;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let allSame = questions.every((question: Question): boolean => (question.type == questions[0].type));
    return allSame;
}
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {    
    id: id,
    name: name,
    type: type,
    body: "",
    expected: "",
    options: [],
    points: 1,
    published: false};
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    let newQuestions = [...questions];
    let newQuestion = makeBlankQuestion(id, name, type);
    newQuestions.push(newQuestion);
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    let newArray = [];
    for (let i = 0; i < questions.length; i++) newArray.push({...questions[i]});
    let location = questions.findIndex((question: Question): boolean => (question.id == targetId));
    newArray[location].name = newName;
    return newArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    let newArray = questions.map((question: Question): Question => ({
        ...question,
    }));
    let location = newArray.findIndex((question: Question): boolean => (question.id == targetId));
    if (newArray[location].type == "multiple_choice_question" && newQuestionType == "short_answer_question") {
        newArray[location].options = [];
    }
    newArray[location].type = newQuestionType;
    return newArray;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let newArray = questions.map((question: Question): Question => ({
        ...question,
        options: [...question.options],
    }));
    let location = newArray.findIndex((question: Question): boolean => (question.id == targetId));
    if (targetOptionIndex == -1){
        newArray[location].options.push(newOption);
    }
    else {
        newArray[location].options[targetOptionIndex] = newOption;
    }
    return newArray;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    let newQuestion = {...oldQuestion};
    newQuestion.name = "Copy of " + oldQuestion.name;
    newQuestion.published = false;
    newQuestion.id = id;
    return newQuestion;
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    let newArray = questions.map((question: Question): Question => ({
        ...question,
        options: [...question.options],
    }));
    let location = newArray.findIndex((question: Question): boolean => (question.id == targetId));
    let newQuestion = duplicateQuestion(newId, newArray[location]);
    newArray.splice(location + 1, 0, newQuestion);
    
    return newArray;
}









