import { useState } from "react";
import RootLayout from "../DefaultLayout/RootLayout";
import { Companies } from "../utils/Data";
import BarChart from "./BarChart";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const OurMethod = () => {
  const [sort, setSort] = useState("def");
  console.log(Companies);

  const descending = [...Companies];
  const ascending = [...Companies];

  const descend = descending.sort((a, b) => b.PorL - a.PorL);
  const ascend = ascending.sort((a, b) => a.PorL - b.PorL);

  console.log(descend, "down");
  console.log(ascend, "up");

  return (
    <RootLayout>
      <div className="mt-3">
        <p className="fs-1 mb-5">OUR PORTFOLIO</p>
        <div className="w-100" style={{ background: "rgb(246,246,246)" }}>
          <div
            style={{ width: "80%", margin: "0 auto" }}
            className="py-3 d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div>
              <p>Investment</p>
              <p className="fw-bold fs-3">$1.7 billion</p>
            </div>
            <div>
              <p>Revenue</p>
              <p className="fw-bold fs-3">$2.5 billion</p>
            </div>
            <div>
              <p>Active Users</p>
              <p className="fw-bold fs-3">1,500,321</p>
            </div>
            <div>
              <p>Conversion Rate</p>
              <p className="fw-bold fs-3">$1.7billion</p>
            </div>
          </div>
        </div>

        <div
          style={{ marginBottom: "80px" }}
          className="d-flex flex-column gap-4 flex-lg-row justify-content-between align-items-center"
        >
          <div
            style={{ background: "rgb(246,246,246)", borderRadius: "5px" }}
            className="px-1 py-2 d-flex align-items-center gap-3"
          >
            <p className="mb-0">Cohort 1 - 2022</p>
            <div className="bg-white px-1 py-1">
              <p className="mb-0">Cohort 2 - 2023</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-4 flex-md-row">
            <div
              className="border border-dark d-flex justify-content-center align-items-center gap-2"
              style={{ width: "200px", height: "50px", borderRadius: "5px" }}
            >
              <p className="mb-0 ">Month:</p>
              <select style={{ border: "0", outline: "0" }}>
                <option value="default">Default</option>
                <option value="default">Default</option>
                <option value="default">Default</option>
                <option value="default">Default</option>
              </select>
            </div>
            <div
              className="border border-dark d-flex justify-content-center align-items-center gap-2"
              style={{ width: "200px", height: "50px", borderRadius: "5px" }}
            >
              <div>
              <p className="mb-0 ">Sort:</p>
              </div>
              <select
                onChange={(e) => setSort(e.target.value)}
                style={{ border: "0", outline: "0" }}
              >
                <option value="def">Default</option>
                <option value="asc">Ascending</option>
                <option value="des">Descending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-lg-0 w-100 d-none d-lg-flex justify-content-between">
          <div className="comp50 text-start">
            <p className="mb-0">Product</p>
          </div>
          <div className="comp50 text-start">
            <p className="mb-0">Financials</p>
          </div>
          <div className="comp50 text-start">
            <p className="mb-0">Marketing</p>
          </div>
          <div className="comp50 text-start">
            <p className="mb-0">Sales</p>
          </div>
        </div>
        <div
          className="d-flex flex-column align-items-center py-3"
          style={{ gap: "90px" }}
        >
          {(sort === "def" ? Companies : sort === "asc" ? ascend : descend).map(
            (each, index) => (
              <div
                key={each.id}
                className="position-relative d-flex flex-column gap-4 flex-lg-row justify-content-between w-100"
              >
                <div className="position-absolute methodNum d-flex gap-1 align-items-center">
                  <div className="d-flex flex-column  align-items-center">
                    {each.PorL <= 0 && (
                      <p className="mb-0 small text-danger">{each.PorL}</p>
                    )}
                    {each.PorL > 0 ? (
                      <AiFillCaretUp color="green" />
                    ) : (
                      <AiFillCaretDown color="red" />
                    )}
                    {each.PorL > 0 && (
                      <p className="mb-0 small text-success">+{each.PorL}</p>
                    )}
                  </div>
                  <p className="fw-bold fs-3 mb-0">
                    {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                  </p>
                </div>
                <div
                  className="px-3 py-3 text-start comp50"
                  style={{
                    background: "rgb(246,246,246)",
                    borderRadius: "5px",
                  }}
                >
                  <div className="d-flex gap-4 mb-4">
                    <p>{each.product.logo}</p>
                    <h3>{each.product.name}</h3>
                  </div>
                  <p>{each.product.about}</p>
                </div>

                <div
                  className="px-3 py-3 text-start comp50"
                  style={{
                    background: "rgb(246,246,246)",
                    borderRadius: "5px",
                  }}
                >
                  <div className="w-100 d-flex justify-content-between">
                    <p>Customers</p>
                    <p>Revenue</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between">
                    <h3 className="fw-bold text-break">
                      {each.financials.customers}
                    </h3>
                    <h3 className="fw-bold text-break">
                      ${each.financials.revenue}
                    </h3>
                  </div>
                  <div className="w-100">
                    <BarChart chartData={each.financials.siteChart} />
                  </div>
                </div>

                <div
                  className="px-3 py-3 text-start comp50"
                  style={{
                    background: "rgb(246,246,246)",
                    borderRadius: "5px",
                  }}
                >
                  <div className="d-flex flex-column gap-3 ">
                    <div className="d-flex justify-content-between">
                      <p>Subscribers</p>
                      <h4 className="fw-bold fs-4">
                        {each.marketing.subscribers}
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Website traffic</p>
                      <h4 className="fw-bold fs-4">{each.marketing.traffic}</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Click-through rate</p>
                      <div
                        className="position-relative d-flex justify-content-center align-items-center"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          border: "15px solid black",
                        }}
                      >
                        <div
                          className="position-absolute"
                          style={{
                            border: "1px solid rgb(246,246,246)",
                            width: "15px",
                            top: "50%",
                            right: "-15px",
                            transform: "translateY(-50%)",
                          }}
                        />
                        <h4 className="mb-0 fs-4 fw-bold">
                          {each.marketing.rate}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="px-3 py-3 text-start comp50 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    background: "rgb(246,246,246)",
                    borderRadius: "5px",
                  }}
                >
                  <p>Cost of selling</p>
                  <div
                    className="position-relative d-flex justify-content-center align-items-center"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      border: "25px solid black",
                    }}
                  >
                    <div
                      className="position-absolute"
                      style={{
                        border: "1px solid rgb(246,246,246)",
                        width: "25px",
                        top: "50%",
                        right: "-25px",
                        transform: "translateY(-50%)",
                      }}
                    />
                    <h4 className="mb-0 fs-4 fw-bold">${each.sales.selling}</h4>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </RootLayout>
  );
};

export default OurMethod;
