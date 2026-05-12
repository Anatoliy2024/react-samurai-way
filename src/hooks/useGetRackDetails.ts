import { useEffect, useState } from "react"
import { getTrackDetails, type GetTrackDetailsOutput } from "../dal/api"

export const useGetTRackDetails = (selectedTrackId: string | null) => {
  const [selectedTrack, setSelectTracker] =
    useState<GetTrackDetailsOutput | null>(null)

  useEffect(() => {
    if (!selectedTrackId) {
      setSelectTracker(null)
      return
    }
    getTrackDetails(selectedTrackId).then((data) => setSelectTracker(data.data))
  }, [selectedTrackId])

  return { selectedTrack }
}
