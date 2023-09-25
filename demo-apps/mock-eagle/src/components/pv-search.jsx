import React from 'react'
import RibbonMenu from './ribbon-menu';
import { formatDate } from '../utils';

function Welcome({ onSubmit, searchParams }) {
    return (
        <div id="pv-search">
            <RibbonMenu />

            <div className="page-header">
                <img src="./images/pv-search-page-header.png" alt="main-header" className="responsive" />
            </div>
            <div className="page">
                <div className="card">
                    <div className="card-body p-2">
                        <p className="form-header">Search Criteria</p>
                        <form className="search-form">
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="entity-id" className="required">Entity ID</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="entity-id" value={searchParams.entityId} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <span className="tick42-icon-small">
                                                    <span className="tick42-custom-icon icon-size-12">
                                                        <i className="icon-search-1"></i>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="entity-name" className="required">Entity Name</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="entity-name" value={searchParams.entityName} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <span className="tick42-icon-small">
                                                    <span className="tick42-custom-icon icon-size-12">
                                                        <i className="icon-search-1"></i>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="accounting-basis" className="required">Accounting
                                        Basis</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="accounting-basis" value={searchParams.accountingBasis} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <span className="tick42-icon-small">
                                                    <span className="tick42-custom-icon icon-size-12">
                                                        <i className="icon-search-1"></i>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="detail-selection">Select View</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <select className="form-select" id="detail-selection">
                                        <option selected="">{searchParams.selectView}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="detail-selection">Detail Selection</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <select className="form-select" id="detail-selection">
                                        <option selected="">{searchParams.detailSelection}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="detail-selection">Report Type</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <select className="form-select" id="detail-selection">
                                        <option selected="">{searchParams.reportType}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="report-date">Report Date</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="report-date" value={formatDate(new Date())} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <span className="tick42-icon-small">
                                                    <span className="tick42-custom-icon icon-size-12">
                                                        <i className="icon-calendar"></i>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="zero-holdings">Display Zero Holdings</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <select className="form-select" id="zero-holdings">
                                        <option selected="">No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="zero-holdings">Report View</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <select className="form-select" id="zero-holdings">
                                        <option selected="">{searchParams.reportView}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="entity-base-ccy" className="required">Entity Base Currency</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <input type="text" className="form-control" disabled="" id="entity-base-ccy" value={searchParams.entityBaseCCY} />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="report-base-ccy" className="required">Report Base Currency</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <input type="text" className="form-control" disabled="" id="report-base-ccy" value={searchParams.reportBaseCCY}  />
                                </div>
                            </div>
                        </form>
                        <p className="mt-2 form-header">Selection Criteria</p>
                        <form className="selection-form">
                            <div className="row mb-1">
                                <div className="col-md-2">
                                    <label for="report-filters">Report Filters</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <select className="form-select" id="report-filters">
                                        <option selected="">No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <label for="advanced-report-options">Advanced Report
                                        Options</label>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <select className="form-select" id="advanced-report-options">
                                        <option selected="">No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="result-options">
                <img src="./images/result-options.png" alt="result-options" className="responsive"
                    onClick={onSubmit} />
            </div>
            <div className="footer">
                <img src="./images/footer.png" alt="footer" className="responsive" />
            </div>
        </div>
    )
}

export default Welcome
