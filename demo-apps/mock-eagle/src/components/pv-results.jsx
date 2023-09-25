import React, { useMemo } from 'react'
import RibbonMenu from './ribbon-menu';
import { AgGridReact } from 'ag-grid-react';
import data from './../data/pv-results.json'
import { priceValueFormatter, formatNumber } from './../utils'

const columnDefs = [
    {
        field: 'sectorId',
        headerName: 'Sector ID',
    },
    {
        field: 'primaryAssetId',
        headerName: 'Primary Asset ID',
    },
    {
        field: 'issueName',
        headerName: 'Issue Name',
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        valueFormatter: ({ value }) => formatNumber(value, 3)
    },
    {
        field: 'positionCurrentCostLocal',
        headerName: 'Position Current Cost Local',
        valueFormatter: priceValueFormatter
    },
    {
        field: 'positionCurrentCostBase',
        headerName: 'Position Current Cost Base',
        valueFormatter: priceValueFormatter
    },
    {
        field: 'averageUnitCostLocal',
        headerName: 'Average Unit Cost Local'
    },
    {
        field: 'averageUnitCostBase',
        headerName: 'Average Unit Cost Base'
    },
    {
        field: 'entityName',
        headerName: 'Entity/Sector Name'
    },
    {
        field: 'accountingBasis',
        headerName: 'Accounting Basis'
    }
]


function PVResults({ entityId, entityName, accountingBasis }) {
    const rowData = useMemo(() => data.map(x => ({
        ...x,
        sectorId: entityId,
        entityName,
        accountingBasis
    })), [entityId, entityName, accountingBasis])

    return (
        <div id="ta-results" className='d-flex flex-column flex-grow-1'>
            <RibbonMenu />

            <div className="page-header">
                <img src="./images/pv-results-page-header.png" alt="footer" className="responsive" />
            </div>

            <div className="page d-flex flex-column flex-grow-1">
                <div className="ag-tick42 flex-grow-1">
                    <AgGridReact
                        suppressCellFocus
                        defaultColDef={{
                            resizable: true,
                            filter: true,
                            sortable: true,
                            enableCellChangeFlash: false,
                            flex: 1,
                        }}
                        rowData={rowData}
                        columnDefs={columnDefs}
                    ></AgGridReact>
                </div>
            </div>

            <div className="page-footer">
                <img src="./images/pv-results-page-footer.png" alt="footer" className="responsive" />
            </div>
            <div className="footer">
                <img src="./images/footer.png" alt="footer" className="responsive" />
            </div>
        </div>
    )
}

export default PVResults
