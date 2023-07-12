import ContactInfo from "./ContactInfo";
import ContactInput from "./ContactInput";
import RootLayout from "../../DefaultLayout/RootLayout";


const Contact = () => {
  return (
   <RootLayout>
     <div className="my-5">
      <h2>Contact us</h2>
      <p className="w-50 mx-auto">
        We would love to hear from you.Please Fill Use the Information Below To
        Get In Touch With Our Team
      </p>
    <div className="d-flex  flex-lg-row">
    <ContactInfo />
      <ContactInput />
    </div>
    </div>
    {/* <NavDrop/> */}
   </RootLayout>
  );
};

export default Contact;
