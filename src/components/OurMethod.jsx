import RootLayout from "../DefaultLayout/RootLayout";
import { Companies } from "../utils/Data";
import { Row, Col } from "react-bootstrap";
import BarChart from "./BarChart";

const OurMethod = () => {
  return (
    <RootLayout>
      <div className="mt-5 border border-dark">
        <div className="d-flex flex-column align-items-center gap-4 py-3">
          {Companies.map((each) => (
            <Row className="w-100 gx-3 gy-2" key={each.id}>
              <Col xl={3} className="text-start">
                <div></div>
              </Col>
              <Col xl={3} className="text-start">
                <div className="py-2 px-3">
                  <div className="w-100 d-flex justify-content-between">
                    <p>Customers</p>
                    <p>Revenue</p>
                  </div>
                  <div className="w-100 d-flex justify-content-between">
                    <h3 className="fw-bold">{each.financials.customers}</h3>
                    <h3 className="fw-bold">{each.financials.revenue}</h3>
                  </div>
                  <div>
                    <BarChart chartData={each.financials.siteChart} />
                  </div>
                </div>
              </Col>
              <Col xl={3} className="text-start"></Col>
              <Col xl={3} className="text-start"></Col>
            </Row>
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default OurMethod;
