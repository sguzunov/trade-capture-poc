window.addEventListener("DOMContentLoaded", start);

const codeToAppName = {
    'zf1': 'eagle-reporting-center-zf1',
    'zf2': 'eagle-reporting-center-zf2',
    'zf3': 'eagle-reporting-center-zf3',
};

async function generateTradeActivityReport(fundId) {
    const [entryId, code] = fundId.split(':');

    if (!(code in codeToAppName)) {
        console.warn('Unknown Eagle app instance.');
        return;
    }

    const appName = codeToAppName[code];

    const app = glue.appManager.application(appName);
    if (!app) {
        console.warn(`App ${appName} not found.`);
        return;
    }

    let target;
    const appInstances = app.instances
    if (appInstances.length > 0) {
        target = appInstances[0];
        await target.window.focus();
    } else {
        target = await app.start({}, { tabGroupId: 'reporting-center' });
    }

    const invocationArgs = {
        searchCriteria: {
            entryId
        }
    };
    await glue.interop.invoke('GenerateTradeActivityReport', invocationArgs, [target]);
}

async function generatePortfolioValuationReport(fundId) {
    const [entryId, code] = fundId.split(':');

    if (!(code in codeToAppName)) {
        console.warn('Unknown Eagle app instance.');
        return;
    }

    const appName = codeToAppName[code];

    const app = glue.appManager.application(appName);
    if (!app) {
        console.warn(`App ${appName} not found.`);
        return;
    }

    let target;
    const appInstances = app.instances
    if (appInstances.length > 0) {
        target = appInstances[0];
        await target.window.focus();
    } else {
        target = await app.start({}, { tabGroupId: 'reporting-center' });
    }

    const invocationArgs = {
        searchCriteria: {
            entryId
        }
    };
    await glue.interop.invoke('GeneratePortfolioValuationReport', invocationArgs, [target]);
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
    console.log('Glue ready - ', glue.info);

    window.glue = glue;
}