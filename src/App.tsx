import { TrackList } from "./ui/TrackList/TrackList"
import { TrackDetails } from "./ui/TrackDetails/TrackDetails"

import { useSelectTrack } from "./hooks/useSelectTrack"
// import { useTracks } from "./hooks/useTracks"
// import { Counter } from "./ui/Counter"

function App() {
  const { selectedTrackId, handleSelectTrackId } = useSelectTrack()

  return (
    <div>
      {/* <h1>Musicfun Player</h1> */}

      <div style={{ display: "flex", gap: "30px" }}>
        <TrackList
          handleSelectTrackId={handleSelectTrackId}
          selectedTrackId={selectedTrackId}
        />
        <TrackDetails selectedTrackId={selectedTrackId} />
      </div>
    </div>
  )
}

export default App

//  --------------------------------------------------------------------- 23 lesson----------------------------------
// function App() {
//   return (
//     <div>
//       <Counter />
//       <Counter />
//       <Age />
//     </div>
//   )
// }

// function useCounter(initValue: number, ms: number) {
//   const [value, setValue] = useState(initValue)

//   useEffect(() => {
//     setInterval(() => {
//       setValue(initValue)
//     }, ms)
//   }, [])
//   return {
//     value,
//     inc: () => {
//       setValue(value + 1)
//     },
//   }
// }

// function Counter() {
//   const { value, inc } = useCounter(10, 1000)
//   return <div onClick={() => inc()}>{value}</div>
// }
// function Age() {
//   const { value, inc } = useCounter(2, 3000)
//   return (
//     <div>
//       {value}
//       <button onClick={() => inc()}>+</button>
//     </div>
//   )
// }
// export default App

// -----------------------------------------------------24----------------------------------------
// function App() {
//   const [tracks, refresh] = useTracks()
//   if (tracks == null) return <div>Loading</div>

//   const handleRefreshClick = () => {
//     refresh()
//   }
//   return (
//     <div>
//       <button onClick={handleRefreshClick}>refresh</button>
//       <ul>
//         {tracks.map((track) => (
//           <li key={track.id}>{track.attributes.title}</li>
//         ))}
//       </ul>
//     </div>

//   )
// }

// // ui -> bll ->dal

// export default App
// export function App() {
//   return <Counter />
// }

// export default App
