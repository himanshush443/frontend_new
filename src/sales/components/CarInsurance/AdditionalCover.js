import React from "react"
import "./AdditionalCover.css"
import Select from "react-select"

var options = [
  {
    value: "Titanium: Cover AED 600K (AED 905.00/Year)",
    label: "Titanium: Cover AED 600K (AED 905.00/Year)",
  },
  {
    value: "Diamond: Cover AED 500K (AED 757.00/Year)",
    label: "Diamond: Cover AED 500K (AED 757.00/Year)",
  },
  {
    value: "Platinum: Cover AED 400K (AED 600.00/Year)",
    label: "Platinum: Cover AED 400K (AED 600.00/Year)",
  },
  {
    value: "Pearl: Cover AED 300K (AED 457.00/Year)",
    label: "Pearl: Cover AED 300K (AED 457.00/Year)",
  },
  {
    value: " Gold: Cover AED 200K (AED 303.00/Year)",
    label: " Gold: Cover AED 200K (AED 303.00/Year)",
  },
]
var secondOptions = [
  {
    value: "Contents Cover AED 30K (AED 60/Year)",
    label: "Contents Cover AED 30K (AED 60/Year)",
  },
  {
    value: "Contents Cover AED 30K (AED 20/Year)",
    label: "Contents Cover AED 30K (AED 200/Year)",
  },
]

const AdditionalCover = () => {
  return (
    <div className="">
      <h3 className="bg-clr-distinct-light full-padding text-center text-left-md no-margin">
        additional cover for added peace of mind
      </h3>

      <form
        data-current-price="35510"
        data-base-price="35510"
        data-no-discount-price="35510"
        data-base-vat="0"
        data-c4me-fee="100"
        data-c4me-fee-vat="0"
        data-vat-inclusive="false"
        data-additional-charges="0"
        data-currency="AED"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="vatMessage-exclusive">
              * The prices you see here are exclusive of 5% VAT.&nbsp;VAT will
              be added on next step.
            </div>
          </div>
        </div>

        <div className="additional-cover_row">
          <div className="col-md-6" style={{ width: "50%" }}>
            <section className="peace-of-mind">
              <div className="table">
                <div className="table-row">
                  <div className="table-cell property top">
                    <div className="show-balloon vertical-margins-reg">
                      <i className="insurance-icon-help-circled clr-primary"></i>
                      Car Hire Benefit and Roadside Assistance
                      <div className="balloon featureBalloon">
                        <span>
                          Rent a Car Service each time your car meets with an
                          accident and Roadside Assistance
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="table-cell value top">
                    <label className="checkbox">
                      <input
                        className="price-affector insurance-checkbox"
                        type="checkbox"
                        name="replacementCarPlusRSA"
                        id="replacementCarPlusRSA"
                        data-cost="230.0"
                        value="5748"
                      />
                      <span className="insurance-label">AED 230 </span>
                      <input type="hidden" name="_replacementCarPlusRSA" />
                    </label>
                  </div>
                </div>

                <div className="table-row">
                  <div className="table-cell property vertical-aligin-middle">
                    <div className="show-balloon">
                      <i className="insurance-icon-help-circled clr-primary"></i>{" "}
                      Home Insurance
                      <div className="balloon featureBalloon">
                        <span>
                          Home contents covers your furniture, electronic goods,
                          jewelry and other items against fire, theft and
                          accidental damage. Costs of alternative accomodation
                          if you cannot live at home are also covered.
                        </span>
                      </div>
                    </div>
                  </div>
                  <Select className="coverSelect" options={secondOptions} />
                  {/* 
                  <div className="table-cell value">
                    <select
                      id="homeInsurance"
                      name="homeInsurance"
                      className="dropdown no-validate price-affector select2-hidden-accessible"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="-1" data-cost="0">
                        -Select-
                      </option>

                      <option data-cost="60.0" value="10187">
                        Contents Cover AED 30K (AED 60/Year)
                      </option>

                      <option data-cost="200.0" value="10188">
                        Contents Cover AED 60K (AED 200/Year)
                      </option>
                    </select>
                  </div> */}
                </div>

                <div className="table-row">
                  <div className="table-cell property vertical-aligin-middle">
                    <div className="show-balloon">
                      <i className="insurance-icon-help-circled clr-primary"></i>{" "}
                      Warranty
                      <div className="balloon featureBalloon">
                        <span>
                          Warranty covers the cost of labour and parts if your
                          vehicle needs repairing due to mechanical or
                          electrical failure.
                        </span>
                      </div>
                    </div>
                  </div>
                  <Select className="coverSelect" options={secondOptions} />

                  {/* <div className="table-cell value">
                    <select
                      id="warrantyCar"
                      name="warrantyCar"
                      className="dropdown no-validate price-affector select2-hidden-accessible"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="-1" data-cost="0">
                        -Select-
                      </option>

                      <option data-cost="1500.0" value="10324">
                        Warranty 1500 AED (max limit is 5000 per claim)
                      </option>

                      <option data-cost="2500.0" value="10325">
                        Warranty 2500 AED (max limit is 10,000 per claim)
                      </option>
                    </select>
                  </div> */}
                </div>

                <div className="table-row">
                  <div className="table-cell property vertical-aligin-middle">
                    <div className="show-balloon">
                      <i className="insurance-icon-help-circled clr-primary"></i>{" "}
                      Accidental Loss of Life
                      <div className="balloon featureBalloon">
                        <span>
                          Life insurance covers your loved ones in the event of
                          accidental loss of life.
                        </span>
                      </div>
                    </div>
                  </div>
                  <Select className="coverSelect" options={options} />

                  {/* <div className="table-cell value">
                    <select 
                      id="accidentalLossOfLife"
                      name="accidentalLossOfLife"
                      className="dropdown no-validate price-affector select2-hidden-accessible"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="-1" data-cost="0">
                        -Select-
                      </option>

                      <option data-cost="905.0" value="10506">
                        Titanium: Cover AED 600K (AED 905.00/Year)
                      </option>

                      <option data-cost="757.0" value="10507">
                        Diamond: Cover AED 500K (AED 757.00/Year)
                      </option>

                      <option data-cost="600.0" value="10508">
                        Platinum: Cover AED 400K (AED 600.00/Year)
                      </option>

                      <option data-cost="457.0" value="10509">
                        Pearl: Cover AED 300K (AED 457.00/Year)
                      </option>

                      <option data-cost="303.0" value="10510">
                        Gold: Cover AED 200K (AED 303.00/Year)
                      </option>

                      <option data-cost="161.0" value="10511">
                        Silver: Cover AED 100K (AED 161.00/Year)
                      </option>

                      <option data-cost="80.0" value="10512">
                        Bronze: Cover AED 50K (AED 80.00/Year)
                      </option>
                    </select>
                  </div> */}
                </div>

                <div></div>
              </div>
            </section>
          </div>

          <div className="col-md-6">
            <div className="total-amount">
              <input type="hidden" id="productId" name="productId" value="96" />
              <div className="vertical-margins-reg">
                <input type="hidden" id="discountCode" name="discountCode" />
                <input
                  type="hidden"
                  id="productTypeId"
                  name="productTypeId"
                  value="1"
                />

                <table className="discountControl">
                  <tbody>
                    <tr>
                      <td className="discountControl__form">
                        <table>
                          <tbody>
                            <tr>
                              <td className="discountControl__form__input">
                                <input
                                  className="textbox discount-code no-validate"
                                  type="text"
                                  placeholder="Discount Code"
                                />
                              </td>
                              <td>
                                <div className="discountControl__form__button">
                                  Apply
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      {/* <td className="discountControl__loader">
                        Checking discount code...
                      </td> */}
                      {/* <td className="discountControl__success">Success</td> */}
                      <td className="discountControl__tooltip show-balloon">
                        <i className="insurance-icon-help-circled clr-primary"></i>

                        <div className="discountControl__tooltip__balloon balloon">
                          <span>
                            Discount is applied on the premium only, excluding
                            additional covers
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4" className="">
                        <p className="discountControl__form__error"></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="label">total amount due:</p>

              <p className="price">AED 35,510</p>
            </div>
          </div>
        </div>

        <div className="horizontal-divider"></div>

        <div className="container">
          <div className="row text-center">
            <div className="checkout-promo-text col-xs-12 text-center">
              The car valuation you have provided is subject to approval from
              your chosen insurance company. If the insurer does not accept your
              valuation, your premium may need to be adjusted.
            </div>
          </div>
        </div>

        <div className="terms-and-conditions">
          <label className="checkbox">
            <input
              className="insurance-checkbox required-checkbox"
              name="name here"
              id="idhere"
              type="checkbox"
            />
            <span className="insurance-label">
              I agree to
              <a
                href="/insurance/uae/en/terms-and-conditions"
                className="clr-primary"
                target="_blank"
              >
                terms and conditions
              </a>
            </span>
          </label>
        </div>

        <div className="row">
          <div className="col-md-offset-9 col-md-3">
            <div className="fifty-fifty-md checkout-buttons">
              <input
                type="hidden"
                id="quoteId"
                name="quoteId"
                value="2854141"
              />
              <input
                type="hidden"
                id="provider"
                name="provider"
                value="Oriental Insurance Company"
              />
              <input
                type="hidden"
                id="product"
                name="product"
                value="Comprehensive"
              />
              <input
                type="hidden"
                id="totalPrice"
                name="totalPrice"
                value="35510.00"
              />

              <input
                type="hidden"
                id="isAgencyRepair"
                name="isAgencyRepair"
                value="false"
              />

              <input
                type="hidden"
                id="paymentMethod"
                name="paymentMethod"
                value="CREDITCARD"
              />

              <div className="button-container">
                <button class="button-accent" type="submit">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdditionalCover
