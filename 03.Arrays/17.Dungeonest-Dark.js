function dungeons(input) {


    let inputToArray = String(input).split("|")
    let health = 100;
    let coins = 0;
    let youIsDead = false;
    let roomCount = 0;


    for (let i = 0; i < inputToArray.length; i += 1) {

        let rooms = String(inputToArray[i]).split(" ");
        roomCount += 1;

        for (let j = 0; j < rooms.length; j += 2) {

            let item = (rooms[j]);
            let number = Number(rooms[j + 1]);

            if (item == "potion") {
                health += number;
                if (health > 100) {
                    number -= health - 100;
                    health = 100;
                }
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else if (item == "chest") {
                coins += number;
                console.log(`You found ${number} coins.`)
            } else {
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${item}.`)
                } else {
                    youIsDead = true;
                    console.log(`You died! Killed by ${item}.`);
                    break;
                }
            }
        }
        if (youIsDead) {
            console.log(`Best room: ${roomCount}`)
            break;
        }
    }
    if (!youIsDead) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}
// dungeons(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeons(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])