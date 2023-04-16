import Navbar from "./navbar";
import Image from "next/image";
import Banner from "public/banner.jpg";
import Link from "next/link";

export default function Layout({ children, deliveryAreas }) {
  return (
    <>
      <Navbar deliveryAreas={deliveryAreas} />
      <main  className="container">
        <div>
          <Image
            alt="Illustration of produce."
            className="header-banner"
            src={Banner}
          />
        </div>
        {children}
      </main>
      <footer>
        <div className="container">
          © {new Date().getFullYear()} Blue Moon Organics Inc. Vancouver web
          design and development by{" "}
          <Link href="https://macguire.me" rel="noopener" target="_blank">
            Macguire Rintoul
          </Link>
          .
        </div>
      </footer>
    </>
  );
}
