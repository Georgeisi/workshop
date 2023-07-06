import video from "../assets/Frame 16.png";
import RootLayout from "../DefaultLayout/RootLayout";
import text from "../assets/Frame 35.png";
import three from "../assets//Frame 21.png";
const AboutUs = () => {
  return (
    <RootLayout>
      <div className="my-5">
        <div className="d-flex flex-column flex-lg-row my-5 text-start bg-dark text-white ">
          <div className="p-4">
            <h2>Who Are We</h2>
            <p>
              we help you build and grow your startup with our 300+ projects we
              have experience you need to be among the 10% of sucessful startups
            </p>
          </div>
          <img className="w-100 p-4" src={video} alt="" />
        </div>
        <img className="quote" src={text} alt="" />
        <div className="d-flex flex-column flex-lg-row align-items-center text-start gap-5">
          <img className="w-100" src={three} alt="" />
          <div>
            <h2>Our Team Job</h2>
            <p>
              We have the best team, from designers to marketers we select the
              very best of candidate out of our participant pool of diverse
              background and knowledge
            </p>
          </div>
        </div>
        <div className="dgrid my-5">
          <div className="border-right ">
            <h2>Fact 1</h2>
            <p>we have worked with 12+ clients</p>
          </div>
          <div className="border-right ">
            <h2>Fact 1</h2>
            <p>we have worked with 12+ clients</p>
          </div>
          <div className="border-right ">
            <h2>Fact 1</h2>
            <p>we have worked with 12+ clients</p>
          </div>
          <div className="border-right ">
            <h2>Fact 1</h2>
            <p>we have worked with 12+ clients</p>
          </div>
        </div>
        <h2> Our 300+ portfolio projects</h2>
        <p>
          we help you build and grow your startup with 300+ projecs we have the
          experience you need to be among the top 10% of succesful startups
        </p>
        <button className="btn btn-dark rounded-0"> see our Profile</button>
      </div>
    </RootLayout>
  );
};

export default AboutUs;
