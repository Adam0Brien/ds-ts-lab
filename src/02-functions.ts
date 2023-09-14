import { friends, colleagues } from "./01-basics";
import { Friend, Colleague } from "./myTypes";

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
function highestExtension(cs: Colleague[]): Colleague {
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