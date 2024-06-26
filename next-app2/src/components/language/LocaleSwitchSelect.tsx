// "use client";

// import { useLocale } from "next-intl";
// import { useRouter, usePathname } from "next/navigation";
// import { ReactNode } from "react";

// interface PageProps {
//   children:ReactNode,
//   defaultValue:string,
//   label:string
// }

// export default function LocaleSwitcherSelect({ children, defaultValue, label }: PageProps) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const activeLocal = useLocale();
//   const activePlaceholder =
//     activeLocal === "ka" ? "ქართული" : activeLocal === "en" ? "English" : "";

//   return (
//     <label>
//       <p className="sr-only">{label}</p>
//       <select
//         className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
//         defaultValue={activeLocal}
//         onChange={(event) => {
//           const value = event.target.value;
//           router.push(pathname.replace(activeLocal, value));
//         }}
//       >
//         {children}
//       </select>
//       <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
//     </label>
//   );
// }
