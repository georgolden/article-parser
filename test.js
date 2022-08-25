'use strict';

const assert = require('node:assert/strict');
const parser = require('./articleParser.js');

assert.doesNotThrow(() => parser.getParserOptions());

const {
  wordsPerMinute,
  urlsCompareAlgorithm,
  descriptionLengthThreshold,
  descriptionTruncateLen,
  contentLengthThreshold,
} = parser.getParserOptions();

assert.deepEqual(
  { wordsPerMinute, urlsCompareAlgorithm, descriptionLengthThreshold, descriptionTruncateLen, contentLengthThreshold },
  {
    wordsPerMinute: 300,
    urlsCompareAlgorithm: 'levenshtein',
    descriptionLengthThreshold: 180,
    descriptionTruncateLen: 210,
    contentLengthThreshold: 200,
  }
);
