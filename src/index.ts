import "reflect-metadata";

import Container from "typedi";

import { sumTotal } from "@common/other";
import Helpers from "@helpers/getFirstCharacter";

const sales: number[] = [10, 40, 30];
const total = sumTotal(sales);

const message = `Sales January ${total}`;
console.log(message);

const helpers = Container.get(Helpers);
console.log(helpers.getFirstCharacter(message));

const helpers2 = Container.get(Helpers);
console.log(helpers2.getFirstCharacter(message));

const helpers3 = Container.get(Helpers);
console.log(helpers3.getFirstCharacter(message));
