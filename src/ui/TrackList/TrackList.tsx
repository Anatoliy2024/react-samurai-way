import { TrackItem } from "../TrackItem/TrackItem"

import { useGetTrackList } from "../../hooks/useGetTrackList"
import styles from "./TrackList.module.scss"
export function TrackList({
  handleSelectTrackId,
  selectedTrackId,
}: {
  handleSelectTrackId: (trackId: string | null) => void
  selectedTrackId: string | null
}) {
  const { tracks } = useGetTrackList()

  return (
    <div>
      {tracks === null && <div>Loading...</div>}
      {tracks !== null && tracks.length === 0 && <div>No tracks</div>}
      <button
        onClick={() => {
          handleSelectTrackId(null)
        }}
      >
        Reset
      </button>
      <ul className={styles.tracks}>
        {tracks !== null &&
          tracks.length > 0 &&
          tracks.map((track) => {
            return (
              <TrackItem
                key={track.id}
                track={track}
                handleSelectTrackId={handleSelectTrackId}
                isSelected={selectedTrackId === track.id}
              />
            )
          })}
      </ul>
    </div>
  )
}
