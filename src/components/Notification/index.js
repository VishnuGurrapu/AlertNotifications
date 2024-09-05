// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'
const Notification = props => {
  return (
    <div className="notificationContainer">
      {props.children} <GrFormClose className="crossIcon" />
    </div>
  )
}
export default Notification
