<div align="center">
  <h1>
    <br/>
    🦀
    <br />
    <br />
    Node Discord Presence
    <br />
    <br />
  </h1>
  <sup>
    <br />
   Handle Discord presence in your site with ease</em>
    <br />
    <br />

[![Build status](https://img.shields.io/github/actions/workflow/status/morellexf13/node-discord-presence/build.yml?branch=main&label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/morellexf13/node-discord-presence/actions/workflows/build.yml)
[![Version](https://img.shields.io/github/v/tag/morellexf13/node-discord-presence?label=%20&style=for-the-badge)](https://github.com/morellexf13/node-discord-presence/releases)
[![License](https://img.shields.io/badge/-MIT-f56565.svg?longCache=true&style=for-the-badge)](https://github.com/morellexf13/node-discord-presence/blob/main/LICENSE)
[![Package Monthly Downloads](https://img.shields.io/npm/dm/node-discord-presence?label=%20&style=for-the-badge)](https://www.npmjs.com/package/node-discord-presence)
[![Lanyard](https://img.shields.io/badge/-Lanyard%20Docs-blue.svg?style=for-the-badge)](https://github.com/Phineas/lanyard)

  </sup>
</div>

This is a project for users that wants to use the Discord API to retrieve and display user information via the Lanyard API. The project is written in Node.js and includes all the necessary code to quickly get started with implementing the Lanyard API into your own site.

<br>

## 🌊 Getting Started

To get started with this project, follow these steps:

1. Join [`Lanyard Discord`](https://discord.gg/UrXF2cfJ7F)

2. Copy you Discord User ID to a `.env` file

3. Go to your project and run:

   ```
   npm install node-discord-presence
   ```

4. Use the API like the next example:

   ```js
     import { fetchDiscordStatus } from "node-discord-presence";

     fetchDiscordStatus(process.env.DISCORD_USER_ID).then((response) => {
       console.log(response);
     });


     Result
     {
       status: 'online',
       avatar: 'some avatar url',
       username: 'morellexf13',
       discriminator: '0716',
       activities: [{
        'avatar': 'some avatar url',
        'details': 'Editing index.js',
        'name': 'Visual Studio Code'
       }] // Apps, Games & Spotify
   }

   ```
<br/>

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
