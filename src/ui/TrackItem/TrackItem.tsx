import clsx from "clsx"
import type { TrackListItemOutput } from "../../dal/api"
import styles from "./TrackItem.module.scss"

export function TrackItem({
  track,
  isSelected,
  handleSelectTrackId,
}: {
  track: TrackListItemOutput
  isSelected: boolean
  handleSelectTrackId: (trackId: string) => void
}) {
  return (
    <li
      className={clsx({
        [styles.track]: true,
        [styles.isSelected]: isSelected,
      })}
      key={track.id}
    >
      <div
        onClick={() => {
          handleSelectTrackId(track.id)
        }}
      >
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}
