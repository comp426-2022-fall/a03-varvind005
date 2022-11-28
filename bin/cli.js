#!/usr/bin/env node

import { roll } from "../lib/roll.js"
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const sidesArg = args.sides || 6;
const diceArg = args.dice || 2;
const rollsArg = args.rolls || 1;

console.log(roll(sidesArg, diceArg, rollsArg));