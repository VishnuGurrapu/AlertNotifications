// Write your code here
import Notification from '../Notification'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'

const AlertNotifications = () => (
  <div className="bgContainer">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="textIconContainer">
        <AiFillCheckCircle className="success Icon" />
        <div className="textContainer">
          <h1 className="success heading">Success</h1>
          <p className="para">You can access all the files in the folder</p>
        </div>
      </div>
      
    </Notification>
    <Notification>
      <div className="textIconContainer">
        <RiErrorWarningFill className="error Icon" />
        <div className="textContainer">
          <h1 className="error heading">Error</h1>
          <p className="para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
     
    </Notification>
    <Notification>
      <div className="textIconContainer">
        <MdWarning className="warning Icon" />
        <div className="textContainer">
          <h1 className="warning heading">Warning</h1>
          <p className="para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
      
    </Notification>
    <Notification>
      <div className="textIconContainer">
        <MdInfo className="info Icon" />
        <div className="textContainer">
          <h1 className="info heading">Info</h1>
          <p className="para">Anyone on the internet can view these files</p>
        </div>
      </div>
    
    </Notification>
  </div>
)

export default AlertNotifications
