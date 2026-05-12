import { useState } from "react"

export const useSelectTrack = () => {
  const [selectedTrackId, setSelectTrackerId] = useState<string | null>(null)

  const handleSelectTrackId = (number: string | null): void => {
    setSelectTrackerId(number)
  }

  return { selectedTrackId, handleSelectTrackId }
}
