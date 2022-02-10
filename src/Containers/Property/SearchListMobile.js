import React from 'react'

// api
import useFetch from '../../api/useFetch'

// Components
import SearchListDetail from './SearchListDetail'

export default function SearchListMobile({
    fetchUrlParams,
    fetchUrlCities,
    onChange,
    onSendClick,
    filteredItems,
    clearFiltersParam,
    setApplyFilters,
    isSending,
    setonChangePrices,
    onChangePrices,
    defaultValues,
    handlePrices,
    setBuy,
    setRent,
    buyRent,
    setFilteredCities,
    filteredCities,
    handleClearCities,
    handleCities,
    handleResetHMFPP,
    isMobileListOpenedP,
    setisMobileListOpenedP
}) {
    const { data: paramsData, isPending } = useFetch(fetchUrlParams)
    const { data: citiesData, isPending2 } = useFetch(fetchUrlCities)

    return (
        <div className="property-search-list-head-mobile" style={isMobileListOpenedP ? { right: '0' } : { right: '-100%' }}>
            <div className="modal-header">
                <h5 className="modal-title">All Filters</h5>
                <button type="button" className="close filter-close" onClick={setisMobileListOpenedP}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <section className="d-flex justify-content-between border-bottom modal-body">
                <section className="d-flex justify-content-between w-100">
                    <span className="c-534D4D p-2 fw-700">Buy</span>
                    <div className="switch-outher">
                        {
                            buyRent &&
                            <label className="switch mb-0 mx-2" onClick={setBuy}>
                                <input type="checkbox" defaultChecked="checked" />
                                <span className="slider round"></span>
                            </label>
                        }
                        {
                            !buyRent &&
                            <label className="switch mb-0 mx-2" onClick={setRent}>
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        }

                    </div>
                    <span className="c-534D4D p-2 fw-700">Rent</span>
                </section>
            </section>
            <section class="border-bottom py-3">
                <SearchListDetail
                    name="All Property type"
                    type="1"
                    clearFilters={clearFiltersParam}
                    setApplyFilters={setApplyFilters}
                    dataP={paramsData}
                    isPendingP={isPending}
                    onChange={onChange}
                    filteredItems={filteredItems}
                />
            </section>
            <section class="border-bottom py-3">
                <SearchListDetail
                    name="Cities"
                    type="2"
                    dataP={citiesData}
                    isPendingP={isPending2}
                    setFilteredCitiesP={setFilteredCities}
                    filteredCitiesP={filteredCities}
                    clearFilters={handleClearCities}
                    setApplyFilters={handleCities}
                />
            </section>
            <section class="border-bottom py-3">
                <SearchListDetail
                    name="All Price"
                    type="3"
                    defaultValuesP={defaultValues}
                    setonChangePricesP={setonChangePrices}
                    onChangePricesP={onChangePrices}
                    handlePricesP={handlePrices}
                />
            </section>
            <div class="filter-modal-footer p-3">
                <span 
                    class="btn opr-card-bttn w-100"
                    style={{
                        pointerEvents: isSending ? 'none' : null,
                        cursor: isSending ? 'no-drop' : 'pointer',
                        opacity: isSending ? '0.5' : '1',
                    }}
                    onClick={() => { onSendClick(); handleResetHMFPP(); }}
                >
                    Search
                </span>
            </div>
        </div>
    )
}
