var WordDictionary = function() {
  this.words = {};
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let set = this.words;
  for (const letter of word) {
      if (!set[letter]) set[letter] = [];
      set = set[letter];
  }
  set['done'] = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  const rec = function (set,word) {
      let position = 0;
      for (const letter of word) {
          position++;
          if (set[letter]) {
              set = set[letter];
              continue
          }

          if (letter == '.') {

              for (const SubSet in set) {
                  if (rec(set[SubSet],word.slice(position))) 
                      return true;
              }
              return false;
          }

          return false;
      }

      return Boolean(set['done']);
  }
  return rec(this.words,word)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let dic = new WordDictionary();

dic.addWord('at');
dic.addWord('and');
dic.addWord('an');
dic.addWord('add');
console.log(dic.search('a'));
console.log(dic.search('.at'));
dic.addWord('bat');
console.log(dic.search('.at'));
console.log(dic.search('an.'));
console.log(dic.search('a.d.'));
console.log(dic.search('b.'));
console.log(dic.search('a.d'));
console.log(dic.search('.'));
