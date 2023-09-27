window.addEventListener("DOMContentLoaded", start);

const codeToAppName = {
    'zf1': 'eagle-reporting-center-zf1',
    'zf2': 'eagle-reporting-center-zf2',
    'zf3': 'eagle-reporting-center-zf3',
};

/**
 * 
 * @param {*} fundId -  e.g. AAC0601:zf1
 */
async function generateTradeActivityReport(fundId) {
    const [entityId, code] = fundId.split(':');

    if (!(code in codeToAppName)) {
        console.warn('Unknown Eagle app instance.');
        return;
    }

    const appName = codeToAppName[code];

    const glueApp = glue.appManager.application(appName);
    if (!glueApp) {
        console.warn(`App ${appName} not found.`);
        return;
    }

    let targetInstance;
    const appInstances = glueApp.instances
    if (appInstances.length > 0) {
        targetInstance = appInstances[0];
        await targetInstance.window.focus();
    } else {
        targetInstance = await glueApp.start({}, { tabGroupId: 'reporting-center' });
    }

    const invocationArgs = {
        searchCriteria: {
            entityId
        }
    };
    await glue.interop.invoke('GenerateTradeActivityReport', invocationArgs, [targetInstance.window.agmInstance]);
}

/**
 * 
 * @param {*} fundId -  e.g. AAC0601:zf1
 */
async function generatePortfolioValuationReport(fundId) {
    const [entityId, code] = fundId.split(':');

    if (!(code in codeToAppName)) {
        console.warn('Unknown Eagle app instance.');
        return;
    }

    const appName = codeToAppName[code];

    const glueApp = glue.appManager.application(appName);
    if (!glueApp) {
        console.warn(`App ${appName} not found.`);
        return;
    }

    let targetInstance;
    const appInstances = glueApp.instances
    if (appInstances.length > 0) {
        targetInstance = appInstances[0];
        await targetInstance.window.focus();
    } else {
        targetInstance = await glueApp.start({}, { tabGroupId: 'reporting-center' });
    }

    const invocationArgs = {
        searchCriteria: {
            entityId
        }
    };
    await glue.interop.invoke('GeneratePortfolioValuationReport', invocationArgs, [targetInstance.window.agmInstance]);
}

// Entry point.
async function start() {
    // Available when library is referenced.
    if (window.Glue == null) {
        console.warn('Glue is not  available.');
        return;
    }

    // Init library.
    const glue = await window.Glue({ appManager: 'full' });
    console.log('Glue ready: ', glue.info);

    window.glue = glue;
}