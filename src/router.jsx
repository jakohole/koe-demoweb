import {Routes,Route} from "react-router-dom";

import { App } from "./App";
import { Introduction }from "./IntroductionPage";
import { SpeedTest } from "./SpeedTestPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Introduction />} />
                <Route path="/speedtestpage" element={<SpeedTest />} />
            </Route>
        </Routes>
    );
}