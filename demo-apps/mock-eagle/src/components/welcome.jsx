import React, { useEffect, useState } from 'react'

function Welcome() {
  const [appName, setAppName] = useState(undefined);
  const [username, setUsername] = useState(undefined);

  useEffect(() => {
    const env = (window.glue.appManager.myInstance.application.userProperties ?? { env: '' }).env;
    setAppName(`Reporting Center @ ${env}`);
    setUsername(window.glue42gd.sid);
  }, []);

  return (
    <div className="reporting-center-welcome">
      <img src="./images/reporting-center.png" alt="Welcome Screen" className="responsive" />
      <span className="app-name">{appName}</span>
      <span className="username">{username}</span>
    </div>
  )
}

export default Welcome
