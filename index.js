export const getData = (userId) => {
  return fetch(`https://api.lanyard.rest/v1/users/${userId}`).then((response) => response.json());
};

export const fetchDiscordStatus = (userId) => {
  return new Promise((resolve) => {
    getData(userId).then((response) => {
      response = response["data"];
      const activities = response.activities;
      activities.map((activity) => {
        if (activity.name === "Spotify" && response.listening_to_spotify) {
          activity.name = response.spotify.song;
          activity.description = response.spotify.artist;
          activity.avatar = response.spotify.album_art_url;
        }
      });
      resolve({
        status: response.discord_status,
        avatar: `https://cdn.discordapp.com/avatars/${userId}/${response.discord_user.avatar}.webp?size=256`,
        username: response.discord_user.username,
        discriminator: response.discord_user.discriminator,
        activities: response.activities
      });
    });
  });
};
