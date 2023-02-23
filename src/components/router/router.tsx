import { Routes, Route } from "react-router-dom";

import Home from '../home/Home'


function router() {

    return (
        <Routes>
            <Route index element={<Home />} />
            {/* <Route path="/proposal" element={<Other />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );

}


export default router;
