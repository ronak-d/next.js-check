import "@/styles/globals.css";
import Nav from "@/Components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
