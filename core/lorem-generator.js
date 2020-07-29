import {
  WORDS,
  VENEZUELAN_WORDS,
  SPICY_WORDS,
  SENTENCES,
  SPICY_SENTENCES,
} from './words';

const randomNumber = (low, high) => Math.floor(Math.random() * high) + low;

const pickRandom = choices => {
  const rand = Math.floor(choices.length * Math.random());
  return choices[rand];
};

const joinAll = (words, delimiter) => {
  let sentence = delimiter;
  for (let i = 0; i < words.length; i++) {
    sentence += delimiter + words[i];
  }
  return sentence;
};

const capitalize = word => word[0].toUpperCase() + word.slice(1);

const makeFirst = (word, uppercase = false) => {
  if (uppercase) {
    word = capitalize(word);
  }
  return word;
};

const makeLast = word => {
  return {
    lastWord: word.toLowerCase(),
    punctuation: pickRandom(['.', '!', '?', ',', ';']),
  };
};

const punctuate = words => {
  let counter = 0;
  let rand = 6;
  while (counter < words.length - 1) {
    const { lastWord, punctuation } = makeLast(words[rand]);
    words[rand] = lastWord + punctuation;
    words[rand + 1] =
      punctuation !== ',' ? makeFirst(words[rand + 1], true) : words[rand + 1];
    const num = 4 + Math.floor(Math.random() * 5);
    rand = num + counter;
    counter += num;
  }
  return words;
};

const createCollection = (loremWords, numWords) => {
  const collection = [];

  for (let i = 0; i < numWords; i++) {
    const loremWord = pickRandom(loremWords);
    if (i === 0) {
      loremWord = makeFirst(loremWord);
    } else if (i === numWords - 1) {
      const { lastWord, punctuation } = makeLast(loremWord);
      loremWord = lastWord + punctuation;
    } else {
      loremWord = makeFirst(loremWord);
    }
    collection.push(loremWord);
  }

  return collection;
};

const generateLorem = (
  paragraphs = 1,
  spicy = false,
  startWithArepa = true,
) => {
  let paragraphsCollection = [];
  const shuffled = WORDS.sort(() => 0.5 - Math.random());
  let loremWords = [
    ...VENEZUELAN_WORDS,
    ...shuffled.slice(0, 100),
    ...SENTENCES,
  ];

  if (spicy) {
    loremWords = [...loremWords, ...SPICY_WORDS, ...SPICY_SENTENCES];
  }

  for (let i = 0; i < paragraphs; i++) {
    const num = randomNumber(25, 75);
    let finalWords;
    const wordCollection = createCollection(loremWords, num);

    finalWords = punctuate(wordCollection);

    let result = joinAll(finalWords, ' ').trim();
    paragraphsCollection.push(result);
  }

  paragraphsCollection = paragraphsCollection.map(paragraph =>
    capitalize(paragraph),
  );

  if (startWithArepa) {
    let firstParagraph = paragraphsCollection[0];
    const firstLetter = firstParagraph[0].toLowerCase();
    const remainLetters = firstParagraph.slice(1);
    paragraphsCollection[0] = `Arepa ipsum dolor amet ${firstLetter +
      remainLetters}`;
  }
  return paragraphsCollection;
};

export default generateLorem;
