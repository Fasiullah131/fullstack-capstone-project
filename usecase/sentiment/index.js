const natural = require('natural'); // یہ لائن Q8 کے لیے ضروری ہے
const SentimentAnalyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;

const analyzer = new SentimentAnalyzer("English", stemmer, "afinn");

function getSentiment(text) {
    return analyzer.getSentiment(text.split(' '));
}

module.exports = getSentiment;
