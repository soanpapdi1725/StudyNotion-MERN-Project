import { apiConnector } from "../apiConnector";
import { Contact_us_Endpoint } from "../apis";
import { toast } from "react-hot-toast";
export const contactUsConnection = (formData, setLoading) => {
  const toastId = toast.loading("Sending your data");
  setLoading(true);
  const fullPhoneNumber = formData.countryCode + ` ` + formData.contactNumber;
  formData.contactNumber = fullPhoneNumber;
  delete formData.countryCode;
  console.log("Logging formData", formData)
  return async () => {
    try {
      const response = await apiConnector(
        "POST",
        Contact_us_Endpoint.Contact_Us_API,
        formData
      );
      console.log("response of Contact us", response);
      if (!response.data.success) {
        toast.error(response.data.message);
        toast.dismiss(toastId);
        setLoading(false);
      }
      toast.dismiss(toastId);
      setLoading(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log("Error while sending contact us details", error);
      toast.error(error.response.data.message);
      toast.dismiss(toastId);
      setLoading(false);
    }
  };
};
