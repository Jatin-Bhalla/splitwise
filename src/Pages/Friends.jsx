import './Friends.css'
import List from "../Components/List"

export default function Friends({ events, setEvents }) {
  return (
    <div className="container">
      <List events={events} setEvents={setEvents} />
    </div>
  )
}