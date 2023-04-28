const getData = (userId) => {
  if (userId && typeof userId === "string") {
    return fetch(`https://api.lanyard.rest/v1/users/${userId}`);
  }
  throw new Error("No user id provided");
};

const fetchDiscordStatus = (userId) => {
  return new Promise((resolve) => {
    getData(userId)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if ("error" in response) {
          throw new Error(response.error.message);
        } else {
          const data = response.data;
          const activities = data.activities;
          activities.map((activity) => {
            if (activity.name === "Spotify" && data.listening_to_spotify) {
              activity.name = data.spotify.song;
              activity.description = data.spotify.artist;
              activity.avatar = data.spotify.album_art_url;
            }
          });
          resolve({
            status: data.discord_status,
            avatar: `https://cdn.discordapp.com/avatars/${userId}/${data.discord_user.avatar}.webp?size=256`,
            username: data.discord_user.username,
            discriminator: data.discord_user.discriminator,
            activities: data.activities
          });
        }
      })
      .catch((error) => {
        throw new Error("Something went wrong fetching Discord Status", error);
      });
  });
};

module.exports = { fetchDiscordStatus };
