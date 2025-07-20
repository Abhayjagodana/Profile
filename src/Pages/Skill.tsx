import { Helmet } from "react-helmet";
import { IconCloudDemo } from "./Icon";
import { MarqueeDemo } from "./Marquee";
function Skill() {
    return (
        <div>
            <Helmet>
                <title>Skill | Abhi Profile</title>
            </Helmet>
        <div className="mt-48">
            <MarqueeDemo></MarqueeDemo>
        </div>
                    <IconCloudDemo></IconCloudDemo>
        </div>
    )
}
export default Skill;