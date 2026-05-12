import { useEffect, useState } from "react"
import { getTrackLists, type TrackListItemOutput } from "../dal/api"

export const useGetTrackList = () => {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null)

  useEffect(() => {
    getTrackLists().then((data) => setTracks(data.data))
  }, [])

  return { tracks }
}
