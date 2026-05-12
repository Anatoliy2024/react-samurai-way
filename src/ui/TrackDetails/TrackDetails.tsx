import { useGetTRackDetails } from "../../hooks/useGetRackDetails"

export function TrackDetails({
  selectedTrackId,
}: {
  selectedTrackId: string | null
}) {
  const { selectedTrack } = useGetTRackDetails(selectedTrackId)

  return (
    <div>
      <h3>Details</h3>

      {!selectedTrack && !selectedTrackId && "track is not selected"}
      {!selectedTrack && selectedTrackId && "Loading..."}
      {selectedTrack && (
        <div>
          <h2>{selectedTrack.attributes.title}</h2> <h4>Текст:</h4>
          <p>
            <span>{selectedTrack.attributes.lyrics ?? "No lyrics"}</span>
          </p>
        </div>
      )}
    </div>
  )
}
