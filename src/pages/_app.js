import { RecoilRoot } from "recoil";
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
};

export default App;