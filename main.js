import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: `input`,
    name: "name",
    message: "Please enter your name."
});
console.log(player.name);
let opponent = await inquirer.prompt({
    type: `list`,
    name: "selection",
    message: "Please select your opponent.",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let P1 = new Player(player.name);
let o1 = new Opponent(opponent.selection);
do {
    if (opponent.selection == "Skeleton") {
        console.log(`${chalk.bold.green(P1.name)} Vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt({
            type: `list`,
            name: `option`,
            message: `select your option`,
            choices: ["Attack", "Drink Portion", "run for your life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better luck next time "));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            P1.fuelDecrease();
            console.log(chalk.bold.italic.green(`You drink Health Portion your fuel is ${P1.fuel}`));
        }
        if (ask.option == "run for your life") {
            console.log(chalk.bold.italic.red("You Loose, Better luck next time "));
            process.exit();
        }
    }
    /// assassin 
    if (opponent.selection == "Assassin") {
        console.log(`${chalk.bold.green(P1.name)} Vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt({
            type: `list`,
            name: `option`,
            message: `select your option`,
            choices: ["Attack", "Drink Portion", "run for your life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better luck next time "));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            P1.fuelDecrease();
            console.log(chalk.bold.italic.green(`You drink Health Portion your fuel is ${P1.fuel}`));
        }
        if (ask.option == "run for your life") {
            console.log(chalk.bold.italic.red("You Loose, Better luck next time "));
            process.exit();
        }
    }
    ////////// Zombie 
    if (opponent.selection == "Zombie") {
        console.log(`${chalk.bold.green(P1.name)} Vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt({
            type: `list`,
            name: `option`,
            message: `select your option`,
            choices: ["Attack", "Drink Portion", "run for your life"]
        });
        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better luck next time "));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option == "Drink Portion") {
            P1.fuelDecrease();
            console.log(chalk.bold.italic.green(`You drink Health Portion your fuel is ${P1.fuel}`));
        }
        if (ask.option == "run for your life") {
            console.log(chalk.bold.italic.red("You Loose, Better luck next time "));
            process.exit();
        }
    }
} while (true);
