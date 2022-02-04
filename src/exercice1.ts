export type User = any;
export const users: any[] = [
 {
 name: 'Alain',
 age: 25,
 occupation: 'Boulanger',
 compentences : ["js", "node"]
 
 },
 {
 name: 'Béatrice',
 age: 23,
 occupation: 'Astronaute',
 adresse : {
 rue : "75 rue de Paris",
 cp : 75000,
 ville : "Paris"
}
 }
];
export function logPerson(user: any) {
 console.log(` - ${user.name}, ${user.age}`);
}
