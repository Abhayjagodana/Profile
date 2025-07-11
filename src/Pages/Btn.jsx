import { Button } from "@/components/ui/button";
import { CoolMode } from "@/registry/magicui/cool-mode";
 
export function Btn() {
  return (
    <div className="relative justify-center">
      <CoolMode
        options={{
          particle:
            "https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg",
        }}
      >
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  );
}