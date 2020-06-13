class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  
  static titleize(statement){
    // let words = string.split(' ');
    // words[0] = this.capitalize(words[0]);
    // let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    // for (let i = 0; i < words.length; i++) {
    //   if(words[n] !== except){
    //   words[i] = this.capitalize(words[i]);
    // }
    // }
    // return words.join(' ');
  }
}
