import { Helmet } from "react-helmet";
import { BoxRevealDemo } from "./BoxRevel";
import { ShineBorderDemo } from "./LoginAnimate";

function Eduction() {
    return (
        <div className="flex justify-center mt-32 font-bold italic">
            <Helmet>
                <title>Education | Abhi Profile</title>
            </Helmet>
            <div className="border-2 p-12 shadow-2xl">
                <BoxRevealDemo></BoxRevealDemo>
                <ShineBorderDemo></ShineBorderDemo>

            </div>

        </div>
    )
}
export default Eduction;