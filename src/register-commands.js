import dotenv from 'dotenv';
import { REST, Routes } from 'discord.js';

dotenv.config();

const commands = [
  {
    name: "help",
    description: "Bot Commands",
  },
  {
    name: "kingbot",
    description: "Bot Information",
  },
  
  {
    name: "ping",
    description: "Bot Latency",
  },

  {
    name: "uptime",
    description: "Bot Uptime",
  },

  {
    name: "version",
    description: "Bot Version",
  },

  {
    name: "links",
    description: "Bot Links",
  },

  {
    name: "joke",
    description: "Responds with a Random Joke",
  },

  {
    name: "longjoke",
    description: "Responds with a Random Long Joke",
  },

  {
    name: "fact",
    description: "Responds with a Random Fact",
  },

  {
    name: "ari",
    description: "Responds with a Random Ari Quote",
  },

  {
    name: "img",
    description: "Sends an image in the server",
  },

  {
    name: "movie",
    description: "Watch a movie in the server",
  },

  {
    name: "classmeme",
    description: "Sends a class meme in the server",
  },

  {
    name: "topgg",
    description: "Check out the bot's top.gg page",
  },

  {
    name: "count",
    description: "Adds 1 to the Count",
  },

  {
    name: "start",
    description: "Creates a KingBot Account",
  },

  {
    name: "daily",
    description: "Collect your daily salary",
  },

  {
    name: "claim",
    description: "Collect your hourly wage",
  },

  {
    name: "vote",
    description: "Vote for KingBot on Top.gg",
  },

  {
    name: "bal",
    description: "Check the balance of yourself or another user ",
    options: [
      {
        name: "user",
        description: "The user whose balance you want to check",
        type: 6,
        required: false,
      },
    ],
  },

  {
    name: "net",
    description: "Check the net worth of yourself or another user ",
    options: [
      {
        name: "user",
        description: "The user whose net worth you want to check",
        type: 6,
        required: false,
      },
    ],
  },

  {
    name: "pay",
    description: "Pay a user a specified amount of money",
    options: [
      {
        name: "user",
        description: "The user to pay",
        type: 6,
        required: true,
      },
      {
        name: "amount",
        description: "The amount to pay",
        type: 10,
        required: true,
      },
    ],
  },

  {
    name: "leaderboard",
    description: "Displays the global balance leaderboard",
  },

  {
    name: "netleaderboard",
    description: "Displays the global net worth leaderboard",
  },

  {
    name: "coinflip",
    description: "Flip a coin and place a bet on heads or tails.",
    options: [
      {
        name: "bet_amount",
        description: "The amount to bet on the coin flip.",
        type: 10,
        required: true,
      },
      {
        name: "choice",
        description: "Choose either heads or tails.",
        type: 3,
        required: true,
        choices: [
          { name: "Heads", value: "heads" },
          { name: "Tails", value: "tails" },
        ],
      },
    ],
  },

  {
    name: "news",
    description: "Get the latest news for a specific category.",
    options: [
      {
        name: "category",
        description: "The news category to fetch (General, Business, etc.).",
        type: 3,
        required: true,
        choices: [
          { name: "General", value: "general" },
          { name: "Latest", value: "latest" },
          { name: "Business", value: "business" },
          { name: "Entertainment", value: "entertainment" },
          { name: "Health", value: "health" },
          { name: "Science", value: "science" },
          { name: "Sports", value: "sports" },
          { name: "Technology", value: "technology" },
        ],
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

async function deleteSlashCommand(commandId) {
  await rest.delete(Routes.applicationCommands(process.env.CLIENT_ID, commandId));
  console.log(`Deleted command with ID: ${commandId}`);
}

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Slash commands were registered successfully!");

    // await deleteSlashCommand(''); // Enter command ID here to delete the command

  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();