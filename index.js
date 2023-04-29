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
              activity.avatar = data.spotify.album_art_url;
            } else {
              const hasAsset = activity.assets && activity.assets.large_image ? true : false;
              const avatar = hasAsset
                ? {
                    alt: activity.details,
                    url: `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp`
                  }
                : {
                    alt: activity.name,
                    icon: true,
                    url: ""
                  };

              activity.avatar = avatar.url;
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
