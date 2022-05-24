/*export class ex1 {
    id: string;
    number: number;
  }
*/

interface User {
  name: string;
  age: number;
  occupation: string;
};

//export type Users = unknown 

export const users: User[] = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson); 