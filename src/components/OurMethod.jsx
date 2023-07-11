import { Image } from "react-bootstrap";
import RootLayout from "../DefaultLayout/RootLayout";
import { Companies } from "../utils/Data";
import BarChart from "./BarChart";

const OurMethod = () => {
  return (
    <RootLayout>
      <div className="mt-5">
        <div className="d-flex flex-column align-items-center gap-5 py-3">
          {Companies.map((each) => (
            <div
              key={each.id}
              className="d-flex flex-column gap-4 flex-lg-row justify-content-between w-100"
            >
              <div
                className="px-3 py-3 text-start comp50"
                style={{ background: "rgb(246,246,246)" }}
              >
                <div className="d-flex gap-4">
                  <Image className="w-50" src={each.product.logo}/>
                  <p>{each.product.name}</p>
                </div>
              </div>

              <div
                className="px-3 py-3 text-start comp50"
                style={{ background: "rgb(246,246,246)" }}
              >
                <div className="w-100 d-flex justify-content-between">
                  <p>Customers</p>
                  <p>Revenue</p>
                </div>
                <div className="w-100 d-flex justify-content-between">
                  <h3 className="fw-bold">{each.financials.customers}</h3>
                  <h3 className="fw-bold">{each.financials.revenue}</h3>
                </div>
                <div className="w-100">
                  <BarChart chartData={each.financials.siteChart} />
                </div>
              </div>

              <div
                className="px-3 py-3 text-start comp50"
                style={{ background: "rgb(246,246,246)" }}
              >
                <p>fytydrydd</p>
              </div>

              <div
                className="px-3 py-3 text-start comp50"
                style={{ background: "rgb(246,246,246)" }}
              >
                <p>fytydrydd</p>
              </div>
            </div>

            // <Row className="w-100 gx-3 gy-2" key={each.id}>
            //   <Col
            //     xl={3}
            //     className="text-start py-2 px-3"
            //     style={{ background: "rgb(234,234,234)" }}
            //   >
            //     <div>
            //       <div className="d-flex gap-2">
            //         <p>{each.product.logo}</p>
            //         <p>{each.product.name}</p>
            //       </div>
            //     </div>
            //   </Col>
            //   <Col
            //     xl={3}
            //     className="text-start py-2 px-3"
            //     style={{ background: "rgb(234,234,234)" }}
            //   >
            //     <div>
            //       <div className="w-100 d-flex justify-content-between">
            //         <p>Customers</p>
            //         <p>Revenue</p>
            //       </div>
            //       <div className="w-100 d-flex justify-content-between">
            //         <h3 className="fw-bold">{each.financials.customers}</h3>
            //         <h3 className="fw-bold">{each.financials.revenue}</h3>
            //       </div>
            //       <div>
            //         <BarChart chartData={each.financials.siteChart} />
            //       </div>
            //     </div>
            //   </Col>
            //   <Col xl={3} className="text-start"></Col>
            //   <Col xl={3} className="text-start"></Col>
            // </Row>
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default OurMethod;
