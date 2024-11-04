import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en ">
      <body className="bg-offWhite">
        <Navbar />
        <main className="pt-16 max-sm:pt-14">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

// pt-16 max-sm:pt-14
