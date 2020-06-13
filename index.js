class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  
  static titleize(statement){
    let words = string.split(' ');
    words[0] = this.capitalize(words[0]);
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let n = 0; n < words.length; n++) {
      if(words[n] !== except){
      words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
    }
      else{
        words[n] = words[n].slice(0)
      }
    }
    return words.join(' ');
  }
}
