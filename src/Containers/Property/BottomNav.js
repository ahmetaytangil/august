import React from 'react'
import { Dropdown } from 'react-bootstrap'

// import images
import MapView from '../../Assets/images/property/map-black.svg'
import ListView from '../../Assets/images/property/list-black.svg'
import SortSvg from '../../Assets/images/property/sort-by-black.svg'

const SortToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div>
        <span
            className="btn sort-bttn d-flex align-items-center"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            <img src={SortSvg} alt="" />
            {children}
        </span>
    </div>
));

export default function BottomNav({
    setLTH,
    setHTL,
    switchMapView,
    switchListView,
    isMapView,
    handleResetHMF,
    setisMobileListOpenedP,
    buyRent
}) {

    return (
        <section className="container-fluid py-3 py-md-1 box-shadow-line">
            <div className="row justify-content-between align-items-center">
                <div className="px-3">
                    <h5 className="fz-18 fw-700 c-534D m-0">Properties for {buyRent ? 'rent' : 'buy'}</h5>
                </div>
                <div className="px-3 d-flex align-items-center">
                    <p className="m-0">
                        {
                            isMapView ?
                                <span onClick={switchListView} className="cursor-pointer">
                                    <span className="mr-3 d-flex align-items-center" style={{ whiteSpace: "nowrap" }}>
                                        <img src={ListView} alt="" /> <span className="ml-2">List View</span>
                                    </span>
                                </span>
                                :
                                <span onClick={switchMapView} className="cursor-pointer">
                                    <span className="mr-3 d-flex align-items-center" style={{ whiteSpace: "nowrap" }}>
                                        <img src={MapView} alt="" /> <span className="ml-2">Map View</span>
                                    </span>
                                </span>
                        }
                    </p>
                    <Dropdown className="w-100" onClick={handleResetHMF}>
                        <Dropdown.Toggle as={SortToggle} id="dcd1">
                            <span className="ml-2">Sort</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <div className="p-3" onClick={setLTH}>
                                    Fiyat (Artan)
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <div className="p-3" onClick={setHTL}>
                                    Fiyat (Azalan)
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="mt-3 filters-btnnn-outher">
                <button type="submit" className="btn opr-card-bttn w-100 filters-btnnn" onClick={setisMobileListOpenedP}>
                    Filters
                </button>
            </div>
        </section>
    )
}
