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
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
          />
        </head>
        <body className="bg-offWhite overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </FormProvider>
  );
};

export default RootLayout;

// className={`pt-16 max-sm:pt-14`}
