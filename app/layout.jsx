import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { FormProvider } from "./context";

export const metadata = {
  title: "",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <FormProvider>
      <html lang="en ">
        <body className="bg-offWhite">
          <Navbar />
          <main className={`pt-16 max-sm:pt-14`}>{children}</main>
          <Footer />
        </body>
      </html>
    </FormProvider>
  );
};

export default RootLayout;
