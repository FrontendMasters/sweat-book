
export const fuzzySearch = (predicate, terms, prop) => (
  terms.filter(term => (
    term[prop].toLowerCase().includes(predicate.toLowerCase())
  ))
);
