export const api = {
  getTracks: () => {
    return fetch("http://localhost:5000/api/1.0/playlists/tracks").then(
      (data) => data.json(),
    )
  },
}
