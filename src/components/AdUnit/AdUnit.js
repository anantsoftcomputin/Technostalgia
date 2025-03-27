"use client";
import { useEffect, useRef } from "react";

export default function AdUnit() {
  const adRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.atOptions = {
        key: "fc080d8833007a67824f9fc94b3acb87",
        format: "iframe",
        height: 60,
        width: 468,
        params: {},
      };

      const script = document.createElement("script");
      script.src = "//spadelack.com/fc080d8833007a67824f9fc94b3acb87/invoke.js";
      script.async = true;

      if (adRef.current) {
        adRef.current.appendChild(script);
      }
    }

    return () => {
      if (adRef.current) {
        const scripts = adRef.current.querySelectorAll("script");
        scripts.forEach((script) => script.remove());
      }
    };
  }, []);

  return <div ref={adRef} className="flex justify-center" />;
}
