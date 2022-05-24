interface User {
    name: string;
    age: number;
    occupation?: string;   
}

interface Admin extends User {
    role?: string;
}

export const persons: Admin[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Admin) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);