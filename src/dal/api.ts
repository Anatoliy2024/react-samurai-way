type TrackListItemAttributes = {
  title: string
  lyrics: string | null
}

export type GetTrackDetailsOutput = {
  id: string
  attributes: TrackListItemAttributes
}

type GetTrackDetails = { data: GetTrackDetailsOutput }

export const getTrackDetails = (selectedTrackId: string) => {
  const promise: Promise<GetTrackDetails> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,
  ).then((data) => data.json())

  return promise
}

// export const getTrackDetails = (selectedTrackId: string) => {
//   const promise: Promise<GetTrackDetails> = fetch(
//     `http://localhost:5000/api/1.0/playlists/tracks/${selectedTrackId}`,
//   ).then((data) => data.json())

//   return promise
// }

type AttachmentDto = {
  url: string
}

export type TrackListItemOutput = {
  id: string
  attributes: {
    title: string
    // lyrics: string
    attachments: Array<AttachmentDto>
  }
}

export type GetTrackListOutput = {
  data: Array<TrackListItemOutput>
}

export const getTrackLists = (): Promise<GetTrackListOutput> => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
  ).then((data) => data.json())
}

// export const getTrackLists = (): Promise<GetTrackListOutput> => {
//   return fetch("http://localhost:5000/api/1.0/playlists/tracks").then((data) =>
//     data.json(),
//   )
// }
