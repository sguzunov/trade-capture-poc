import React, { useEffect, useState } from 'react'

export default function RibbonMenu() {
    const [appName, setAppName] = useState(undefined);
    const [username, setUsername] = useState(undefined);

    useEffect(() => {
        const env = (window.glue.appManager.myInstance.application.userProperties ?? { env: '' }).env;
        setAppName(`Reporting Center @ ${env}`);
        setUsername(window.glue42gd.sid);
    }, []);

    return (
        <div className="ribbon-menu">
            <img src="./images/ribbon-menu.png" alt="ribbon menu" className="responsive" />
            <span className="app-name">{appName}</span>
            <span className="username">{username}</span>
        </div>
    );
}
