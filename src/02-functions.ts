import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, EmailContact} from "./myTypes";

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]):string[]{
    const messages:string[] = [];
    for(const friend of friends){
         older(friend)
         messages.push(`${friend.name} is now ${friend.age}`)
    }
    return messages;
}

function allOlderThan(f: Friend) : string[] {
   
    const messages:string[] = [];

    for (const friend of friends) {
         if(friend.age > f.age){
         var ageDiff = friend.age - f.age;
         messages.push(`${friend.name} is ${ageDiff} years older than ${f.name}`);
         }
    }
    return messages;
}


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string){
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtension(cs).contact.extension + 1
        }
    }
    cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
console.log(older(friends[0]))

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));


function findFriends(friends: Friend[], criteria:(friend: Friend)=> boolean): Friend[] {
  const matchingFriends: Friend[] = [];
  for (const friend of friends) {
    if (criteria(friend)) {
      matchingFriends.push(friend);
    }
  }
  return matchingFriends;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));