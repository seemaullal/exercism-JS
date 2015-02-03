var anagram = function(word) {

  var sorted = function(word) {
    return word.split("").sort().join("");
  };

  var isAnagram = function(otherWord) {
    var sortedOther = sorted(otherWord.toLowerCase());
    return (sortedOther === this.sortedWord) && (this.word.toLowerCase() !== otherWord.toLowerCase());
  }
  
  this.word = word;

  this.sortedWord = sorted(this.word.toLowerCase());

  var matches = function(words) {
    if (typeof arguments[0] === "string") {
      var argArray = [ ];
      for (var i=0; i<arguments.length; i++) {
        argArray.push(arguments[i]);
      }
      return argArray.filter(isAnagram);
    }
    return words.filter(isAnagram);
  };




  return { matches: matches};

}