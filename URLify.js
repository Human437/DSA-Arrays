function URLify(str) {
  return str.replace(/ /g, "%20");
}

console.log(URLify("tauhida parveen"));
console.log(URLify("www.thinkful.com /tauh ida parv een"));

// Linear time, does not need to be optimized since I don't think that you can get it down to constant time
