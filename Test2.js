async function check(urls) {
  let i = 0;
  while (urls.length > i) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "13de41bf25mshd068898ac63746ep10d0e8jsn3d35426009b6",
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(urls[i], options);
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
    i++;
  }
}

check([
  "https://shazam-core.p.rapidapi.com/v2/tracks/details?track_id=1441164738",
  "https://shazam-core.p.rapidapi.com/v2/tracks/details?track_id=1441164738",
  "https://shazam-core.p.rapidapi.com/v2/tracks/details?track_id=1441164738",
]);
