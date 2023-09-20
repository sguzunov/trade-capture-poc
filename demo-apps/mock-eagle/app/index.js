window.addEventListener("DOMContentLoaded", start);

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

    const myApp = glue.appManager.myInstance.application;
    const displayName = (myApp.title && myApp.title.length) > 0 ? myApp.title : myApp.name;
    document.getElementById('app-name').textContent = displayName;

    let isBusy = false;

    const setIsBusy = () => {
        if (isBusy) {
            return;
        }

        isBusy = true;
        document.getElementById('status').style.display = 'block';
        setTimeout(() => {
            isBusy = false;
            document.getElementById('status').style.display = 'none';
        }, 2 * 1000);
    }

    // Register method that returns "busy" status.
    glue.interop.register('Eagle.ReportingCenter.IsBusy', async () => {
        return {
            isBusy: isBusy
        };
    });

    await glue.interop.register('GenerateTradeActivityReport', async ({ searchCriteria }) => {
        console.log(`${displayName} - GenerateTradeActivityReport - `, searchCriteria);

        setIsBusy()
    });

    await glue.interop.register('GeneratePortfolioValuationReport', async ({ searchCriteria }) => {
        console.log(`${displayName} GeneratePortfolioValuationReport - `, searchCriteria)

        setIsBusy();
    });
}