import "@/styles/globals.css";
import Nav from "@/Components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Nav />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
