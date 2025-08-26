import { FaPhone } from "react-icons/fa6";
import ContactUsForm from "../../Common/ContactUsForm";

const ContactSectionForm = () => {
  return (
    <div className="mx-auto flex flex-col items-center gap-4">
      <h1 className="flex items-center text-4xl font-bold gap-4">
        Get in Touch <FaPhone />
      </h1>
      <p className="text-pure-greys-200">
        We'd love to here for you, Please fill out this form.
      </p>
      {/* Form */}
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactSectionForm;
