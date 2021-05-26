import { sumTotal } from "@common/other";
import { getFirstCharacter } from "@helpers/getFirstCharacter";

const sales: number[] = [10, 40, 30];

const total = sumTotal(sales);

const message = `Sales January ${total}`;

console.log(message);
console.log(getFirstCharacter(message));
