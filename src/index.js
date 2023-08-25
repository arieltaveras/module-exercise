import foods from './foods';
import { choice, remove } from './Helpers';

let food = choice(foods)

console.log(`I'd like one ${foods}, please`);
console.log(`Here you go: ${foods}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(food, foods);

console.log(`I'm sorry, we're all out. We have ${remaining} left.`);