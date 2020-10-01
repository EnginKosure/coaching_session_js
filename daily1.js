// Return the list of people with at least two common interests.
const users = [
    { id: 0, name: "Jack", interests: ["books", "sports", "movies"] },
    { id: 1, name: "Jim", interests: ["fitness", "sports", "movies"] },
    { id: 2, name: "Joe", interests: ["cats", "swimming", "movies"] },
    { id: 3, name: "Zoe", interests: ["cars"] },
    { id: 4, name: "Liv", interests: ["cats, movies"] },
  ];

  const friends = findMutuals(users);
  
//   expected outcome:

// [
//   ["Jack", "Jim"],
//   ["Joe", "Liv"]
// ]