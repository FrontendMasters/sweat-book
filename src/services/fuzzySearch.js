
export const fuzzySearch = (predicate, terms, prop) => {
  const wordsToMatch = predicate.trim().toLowerCase().split(' ');

  return terms.filter(term => {
    const currentTerm = term[prop].toLowerCase();
    return Boolean(wordsToMatch.filter(word => (
      currentTerm.includes(word)
    )).length);
  });
};
