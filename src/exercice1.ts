import { string } from "prop-types";

export type User = userInterface;
export const users: userInterface[] = [
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
interface userInterface{
    name:string,
    age:number,
    occupation:string,
    compentences?:Array<string>,
    adresse?:adresseInterface,

}

interface adresseInterface{
    rue:string,
    cp:number,
    ville:string
}
export function logPerson(user: userInterface) {
 console.log(` - ${user.name}, ${user.age}`);
}
