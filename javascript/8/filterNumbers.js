// from an array of sting, objects, & numbers- return only numbers

function filter_list(l) {
  return l.filter((v) => typeof v == "number");
}
