import "@/styles/globals.css";
import Nav from "@/Components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
