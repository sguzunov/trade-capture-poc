import { useState, useEffect } from 'react';

import '@glue42/theme/dist/t42bootstrap.bundle.css';
import './index.css';

import Welcome from './components/welcome.jsx';
import TASearch from './components/ta-search.jsx';
import TAResults from './components/ta-results.jsx';
import PVSearch from './components/pv-search.jsx';
import PVResults from './components/pv-results.jsx';

function App() {
  const [view, setView] = useState('welcome')
  const [taSearchParams, setTASearchParams] = useState({})
  const [pvSearchParams, setPVSearchParams] = useState({})

  useEffect(() => {

    const regMethods = async () => {
      await window.glue.interop.register('GenerateTradeActivityReport', async ({ searchCriteria }) => {
        console.log(`GenerateTradeActivityReport - `, searchCriteria);

        const searchParamsMap = window.glue.appManager.myInstance.application.userProperties?.taSearchParams ?? {};
        const searchParamsFromConfig = searchParamsMap[searchCriteria.entityId]
        const mergedSearchParams = {
          ...searchParamsFromConfig,
          ...searchCriteria
        };

        setTASearchParams(mergedSearchParams);
        setView('ta-search');
      });

      await window.glue.interop.register('GeneratePortfolioValuationReport', async ({ searchCriteria }) => {
        console.log(`GeneratePortfolioValuationReport - `, searchCriteria);

        const searchParamsMap = window.glue.appManager.myInstance.application.userProperties?.pvSearchParams ?? {};
        const searchParamsFromConfig = searchParamsMap[searchCriteria.entityId]
        const mergedSearchParams = {
          ...searchParamsFromConfig,
          ...searchCriteria
        };

        setPVSearchParams(mergedSearchParams);
        setView('pv-search');
      });
    }

    regMethods();
  }, []);

  if (view === 'ta-search') {
    return <TASearch onSubmit={() => setView('ta-results')} searchParams={taSearchParams} />
  }

  if (view === 'ta-results') {
    return <TAResults {...taSearchParams} />
  }

  if (view === 'pv-search') {
    return <PVSearch onSubmit={() => setView('pv-results')} searchParams={pvSearchParams} />
  }
  
  if (view === 'pv-results') {
    return <PVResults {...pvSearchParams} />
  }

  return <Welcome />
}

export default App;
