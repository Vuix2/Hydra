const lock = '<:shinelock:780056966604390430>'
const rifle = '<:HYDRA_RIFLE:780431726563819530>'
const axe = '<:HYDRA_AXE:780435571700138024>'
const pick = '<:HYRDA_PICKAXE:780453284284596244>'
const rc = '<a:HYDRA_RAINBOW_COIN_GIF:780463422927536128>' //RAINBOW
const gc = '<a:HYDRA_GOLD_COIN_GIF:780447095878189057>' // :HYDRA_GOLD_COIN_GIF:
const sc = '<a:HYDRA_SILVER_COIN_GIF:780447045126455326>' // :HYDRA_SILVER_COIN_GIF:
const bc = '<a:HYDRA_BRONZE_COIN_GIF:780446979452698674>' // :HYDRA_BRONZE_COIN_GIF: 
const ht = '<a:HYDRA_THROPHY:780446245612945409>' // :HYDRA_THROPHY:
const hc = '<:HYDRA_CLOVER:780473481590210560>'
const array = [{
    name: 'cookie',
    description: '🍪 **Cookie**\na tasty snack.',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10,
    price: 50,
    keep: false,
    run: async (bot, message, args) => {
        const cookieRandom = [
            'You ate a cookie as you was feeling hungry.',
            'You choked on a cookie and almost died.',
            'The cookie tasted great.'
        ];
        const yes = cookieRandom[Math.floor(Math.random() * cookieRandom.length)];
        message.channel.send(`${yes}`);
    }
},
{
    name: 'padlock',
    description: `${lock} **Padlock**\nsecure your wallet from those sneaky robbers`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 2000,
    price: 10000,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'fishingrod',
    description: '🎣 **Fishing Rod** \nuse this to catchs fish',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 15000,
    keep: true,
    run: async (bot, message, args) => {
      
        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went fishing and came back with **${fishAmount}** x  Fish 🐟`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'fish');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'fish');
        if (findItem) {
            userInv.push({ name: 'fish', amount: (findItem.amount + fishAmount), description: '🐟 **Fish** \nsell the fish to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'fish', amount: fishAmount, description: '🐟 **Fish** \nsell the fish to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'fish',
    description: '🐟 **Fish** \nsell fish to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 125,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'banknote',
    description: `📜 **Bank Note** \nmore bank space.`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 6667,
    price: 20000,
    keep: false,
    run: async (bot, message, args) => {
        const random = Math.ceil((Math.random() * 5000) + 5000);
        const e = await bot.giveBankSpace(message.author.id, random);
        message.channel.send(`You redeemed a banknote, which increases your bank space by **${random.toLocaleString()}**. You now have **${e.bankSpace.toLocaleString()}** bank space.`);
    }
},
{
    name: 'rifle',
    description: `${rifle} **Rifle**\nuse this to kills animals`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 22500,
    keep: true,
    run: async (bot, message, args) => {

        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went hunting and came back with **${deerAmount}** x Deer 🦌`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'deer');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'deer');
        if (findItem) {
            userInv.push({ name: 'deer', amount: (findItem.amount + deerAmount), description: '🦌 **Deer**\nsell deer to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'deer', amount: deerAmount, description: '🦌 **Deer**\nsell the fish to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'deer',
    description: '🦌 **Deer**\nsell deer to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 250,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'bare',
    description: '🐻 **Bare**\nsell deer to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 250,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'pickaxe',
    description: `${pick} **Pickaxe**\nuse this to mine gems`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 30000,
    keep: true,
    run: async (bot, message, args) => {
        const gemAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went mining and came back with **${gemAmount}** x Gem 💎`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'gem');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'gem');
        if (findItem) {
            userInv.push({ name: 'gem', amount: (findItem.amount + gemAmount), description: '💎 **Gem**\nsell gems to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'gem', amount: gemAmount, description: '💎 **Gem**\nsell gems to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'gem',
    description: '💎 **Gem**\nsell gems to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 500,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
               {
    name: 'axe',
    description: `${axe} **Axe**\nuse this to chops trees down`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 20000,
    keep: true,
    run: async (bot, message, args) => {
        const treeAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went into the woods and chopped down **${treeAmount}** x Tree 🌲`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'tree');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'tree');
        if (findItem) {
            userInv.push({ name: 'tree', amount: (findItem.amount + treeAmount), description: '🌲 **Tree**\nsell trees to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'tree', amount: treeAmount, description: '🌲 **Tree**\nsell trees to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'tree',
    description: '🌲 **Tree**\nsell trees to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 500,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'luckyclover',
    description: `${hc} **Lucky Clover**\nincrease your chances of successful robbery`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 4000,
    price: 10000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'rainbowcoin',
    description: `${rc} **Hydra Rainbow Coin**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 50000000,
    price: 100000000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'goldcoin',
    description: `${gc} **Hydra Gold Coin**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 25000000,
    price: 50000000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'silvercoin',
    description: `${sc} **Hydra Silver Coin**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 7500000,
    price: 15000000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'bronzecoin',
    description: `${bc} **Hydra Bronze Coin**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 2500000,
    price: 5000000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'trophy',
    description: `${ht} **Hydra Trophy**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 50000000,
    price: 100000000,
    keep: false,
    run: async (bot, message, args) => {

    }
}
];

module.exports = array;
