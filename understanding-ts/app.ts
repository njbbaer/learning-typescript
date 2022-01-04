enum Role { ADMIN, READ_ONLY, AUTHOR };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Nate',
  age: 27,
  hobbies: ['Hiking', 'Gaming'],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role == Role.ADMIN) {
  console.log('is admin');
}