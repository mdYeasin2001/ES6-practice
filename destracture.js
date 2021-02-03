const person = {
    id: 103,
    name: "ali",
    gfName: "sobnom",
    phone: 0138344,
    address: "Bandarban"

}
const gfName = person.gfName;
const {address} = person
// console.log(gfName, address);

const friends = ["Ali", "Bali", "Tali", "Kali"];
const [chotoFriend, boroFriend, ...all] = friends;
// console.log(chotoFriend, boroFriend, all);

const complex = {
    id: 104,
    name: "Solimulla",
    info: {
        hobby: "watching movie",
        address: "Mongol groho"
    }
}
const {hobby} = complex.info;
console.log(hobby);