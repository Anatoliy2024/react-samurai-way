import { useEffect, useState } from "react"
import { api } from "../dal/api-25"

export function useTracks() {
  const [tracks, setTrack] = useState<Array<string> | null>(null)

  useEffect(() => {
    api.getTracks().then((json) => setTrack(json.data))
  }, [])

  const refresh = () => {
    setTrack(null)
    api.getTracks().then((json) => setTrack(json.data))
  }

  return [tracks, refresh]
}
