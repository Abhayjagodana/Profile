// import { Button } from "@/components/ui/button";
import { BoxReveal } from "../components/magicui/box-reveal";

export function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Education<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-[#5046e6]">Design Engineers</span>
        </h2>
      </BoxReveal> */}

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6 ">
          <p>
            &gt; BCA(Bachelor of Computer Applications)
            <span className="font-bold text-[#5046e6]">vivekanand </span>
            <span className="font-semibold text-[#5046e6]">College</span>
            <span className="font-semibold text-[#5046e6]">For BCA</span>-
            <br></br>
                        <br></br>

            &gt;High School Shree Swaminarayan Gurukul Surat <br />
          </p>
        </div>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal> */}
    </div>
  );
}
