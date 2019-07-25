//import libraries
import React from "react";
import { generateInitials, prettyPrintMoney } from "../../../utility";
import {Link} from 'react-router-dom';
import ModalWrapper from "./modal";
import BranchSelector from './branchSelector';

const Header = ({
  businessId,
  businessName,
  businessEmail,
  businessContact,
  businessLogoUrl,
  branches,
  selectedBranch,
  onSelectBranch,
  onSelectBranchFn,
  onSearch,
  cartToggled,
  cart,
  currency,
  onStateChanged
}) => {
  let active;

  active = (
    <React.Fragment>
      <span className="initials">{generateInitials(businessName)}</span>{" "}
      {businessName}
    </React.Fragment>
  );

  const isMultiBranch = branches.length > 1;

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container justify-content-between justify-content-md-between p-0">
          <div className="bars open">
            <img src={`${process.env.PUBLIC_URL}/html/images/menu_nav.png`} width="30" alt="menu-nav" />
          </div>
          <div className="navbar-brand m-0 mr-md-2 px-2">
            <Link to={"/" + businessId.toLowerCase()} className="text-capitalize">
              {active}
            </Link>
          </div>
          <div>
            <div className="dropdown branches">
              <button
                className={`align-items-center border-0 btn btn-store d-flex font-weight-light inverse pr-0 pr-md-3 text-primary ${isMultiBranch &&
                  "dropdown-toggle"}`}
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/html/images/shop.png`}
                  className="mr-0 mr-md-1 mb-1 float-left d-block d-md-none"
                  alt="shop_img"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/html/images/shop1.png`}
                  className="d-md-block d-none mb-1 float-left mr-0 mr-md-1"
                  alt="shop-img1"
                />
                <span className="d-none d-md-inline-block mr-3">{selectedBranch.name}</span>
              </button>
              {isMultiBranch && (
                <div
                  className="dropdown-menu mt-2 dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <h5 className="font-weight-bold mb-2">{selectedBranch.name}</h5>
                  <p>{selectedBranch.address}</p>
                  <button
                    className="btn btn-store w-100"
                    data-toggle="modal"
                    data-target="#branchModal"
                  >
                    Switch Branch
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Branch Modal */}
      <ModalWrapper modalId="branch">
          {cart.items.length > 0 ? (
            <div className="modal-body pt-4 my-5">
                <div className="text-center text-muted mb-4">
                    <div className="mb-2">
                        <h5 className="text-warning font-weight-bold"> Note </h5>
                    </div>
                    <div className="font-weight-bold">You will lose the contents of your cart, <br/> if
                        you change your branch while shopping.
                    </div>
                </div>
                <div className="text-center select-branch">
                    <BranchSelector
                        selectedBranch={selectedBranch}
                        branches={branches.filter(x => x.id !== selectedBranch.id)}
                        onSelectBranch={onSelectBranch} 
                        onSelectBranchFn={onSelectBranchFn} 
                    />
                    <div className="pt-3">
                        <a href="#" data-dismiss="modal">Cancel and continue shopping</a>
                    </div>
                </div>
            </div>
        )
        :
        (<div className="modal-body pt-4 my-5">
            <div className="text-center mt-3">
                <img src={businessLogoUrl} alt="businessLogo" className="cart-image img-fluid" width="30"/>
            </div>
            <h5 className="text-center my-4 mb-5 text-uppercase">{businessName}</h5>
            <p className="text-center">Welcome, which branch would you like to shop from?</p>
            <div className="text-center select-branch">
                <BranchSelector
                    selectedBranch={selectedBranch}
                    branches={branches.filter(x => x.id !== selectedBranch.id)}
                    onSelectBranch={onSelectBranch}
                    onSelectBranchFn={onSelectBranchFn}
                />
            </div>
        </div>)}
      </ModalWrapper>

      <div id="sticky-div" className="brandDetails text-sm-left">
        <div className="container">
          <div className="row justify-content-between">
            <div className="align-items-center col-5 d-md-flex d-md-block d-none">
              <span className="d-none d-sm-inline"> {businessEmail}</span>
              <span className="d-none d-sm-inline divider">|</span>
              <span>{businessContact}</span>
            </div>
            <div className="catBar col-12 col-md-5 col-sm text-center text-md-right">
              <div className="barOptions">
                {true && (
                  <div id="custom-search-input">
                    <div className="input-group">
                      <form
                        style={{ display: "inherit" }}
                        onSubmit={e => onSearch(e)}
                      >
                        <input
                          type="text"
                          className="form-control pr-0 input-lg"
                          placeholder="Search here..."
                          onChange={e => {}}
                          value={""}
                          id="searchInput"
                        />
                        <span className="input-group-btn m-0">
                          <button className="btn btn-info btn-lg" type="submit">
                            <img
                              src={`${process.env.PUBLIC_URL}/html/images/search.png`}
                              width="18px"
                              alt="search-img"
                            />
                          </button>
                        </span>
                      </form>
                    </div>
                  </div>
                )}

                <div
                  className={
                    cartToggled ? "d-inline cart" : "dropdown d-inline cart"
                  }
                >
                  <span
                    className="cart-item py-3"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/html/images/cart1.png`}
                      width="28px"
                      alt="cart-img"
                    />
                    <span className="badge bg-primary m-0 rounded-circle text-white">
                      {cart.items.length}
                    </span>
                  </span>
                  {cart.items.length > 0 && (
                    <div
                      className={`dropdown-menu dropdown-menu-right px-3 py-3 ${
                        true ? "" : "dropdown-center"
                      }`}
                      aria-labelledby="dropdownMenuButton"
                    >
                      {cart.items.map((x, i) => (
                        <div className="row mb-2" key={`cart-${i}`}>
                          <div className="col-3">
                            {/*<ImageCanvas imgUrl={x.imgUrl} width="48px"/>*/}
                          </div>
                          <div className="col-7 p-0">
                            <div>
                              <p className="m-0 text-truncate">{x.name}</p>
                              {x.category && (
                                <p className="small m-0">{x.category}</p>
                              )}
                              <p className="m-0 small">
                                {x.quantity} X{" "}
                                <span className="currency">{currency}</span>{" "}
                                {prettyPrintMoney(Number(x.price))}
                              </p>
                            </div>
                          </div>
                          {/*<div className="col-1">*/}
                          {/*<i className="far text-muted pointer  small fa-trash-alt"/>*/}
                          {/*</div>*/}
                        </div>
                      ))}

                      <hr />
                      <button
                        onClick={e => onStateChanged(e)}
                        name="cartToggled"
                        value="true"
                        className="btn btn-store w-100"
                        data-toggle="modal"
                        data-target="#cartDrawer"
                      >
                        View Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
