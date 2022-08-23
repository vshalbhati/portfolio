import Theme from '../styles/theme';
import '../pages/Footer.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 