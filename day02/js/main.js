user1 = {
    firstName: 'James',
    score: 100,
    isPresent: true
}

user2 = {
    firstName: 'Jane',
    score: 90,
    isPresent: false
}

users = [user1, user2, ];

console.log(users);
console.log(users[1]); //access by bracket notation
console.log(users[0].firstName); //access by dot notation
console.log(users[1]['firstName']); //access both by bracket
