import { cn } from "../lib/utils";
import { Marquee } from "../components/magicui/marquee"
const reviews = [
  {
    name: "HTML",
    username: "@Abhi",
    body: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "CSS",
    username: "@Abhi",
    body: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). ",
    img: "https://img.icons8.com/fluent/512/css3.png",
  },
  {
    name: "Java Script",
    username: "@Abhi",
    body: "Javascript is High-Level,Dynamic Programming Language Use Dynamic Website. It Run In Broswer like Validation , Animation and interactive Mape Without Refersh Page.",
    img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  },
  {
    name: "React.Js",
    username: "@Abhi",
    body: "React.js, commonly referred to as React, is an open-source JavaScript library developed and maintained by Facebook.particularly for single-page applications .",
    img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    name: "Type Script",
    username: "@Abhi",
    body: "TypeScript is a syntactic superset of JavaScript which adds static typing.This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LcyVGdYL_K0Mn2ZdFja4cGATpYQZu07uAQ&s",
  },
  {
    name: "tailwind css",
    username: "@Abhi",
    body: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles CSS file..",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 1);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-64 w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 p-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-l">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full  flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
