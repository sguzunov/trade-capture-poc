import React from 'react'
import RibbonMenu from './ribbon-menu';
import { AgGridReact } from 'ag-grid-react';
import data from './../data/ta-results.json'
import { priceValueFormatter } from './../utils'
import { format } from 'date-fns';

const columnDefs = [
    {
        field: 'recordType',
        headerName: 'Record Type',
    },
    {
        field: 'asset',
        headerName: 'Asset',
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        valueFormatter: priceValueFormatter
    },
    {
        field: 'proceedsLocal',
        headerName: 'Proceeds Local',
        valueFormatter: priceValueFormatter
    },
    {
        field: 'netAmountLocal',
        headerName: 'Net Amount Local',
        valueFormatter: priceValueFormatter
    },
    {
        field: 'gainSecurityLocal',
        headerName: 'Gain Security Local',
        valueFormatter: priceValueFormatter
    },
    {
        field: 'coupon',
        headerName: 'Coupon',
        valueFormatter: ({ value }) => {
            if (typeof value === 'number') {
                return value.toFixed(6)
            }

            return '';
        }
    },
    {
        field: 'reportStartDate',
        headerName: 'Report Start Date',
    }
]

const rowData = data.map(x => ({
    ...x,
    reportStartDate: format(new Date(), 'MMM dd yyyy')
}));

function TAResults() {
    return (
        <div id="ta-results" className='d-flex flex-column flex-grow-1'>
            <RibbonMenu />

            <div className="page-header">
                <img src="./images/ta-results-page-header.png" alt="footer" className="responsive" />
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
                <img src="./images/ta-results-page-footer.png" alt="footer" className="responsive" />
            </div>
            <div className="footer">
                <img src="./images/footer.png" alt="footer" className="responsive" />
            </div>
        </div>
    )
}

export default TAResults
