import { RecoilRoot, useRecoilSnapshot } from "recoil";
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { persistedStateSelector, backgroundImageUrlAtom } from "@/recoilStore";
import { saveStateToCookie } from "@/utils-functions";
import '../styles/globals.scss';
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
};

export default App;