"use client";

import "./globals.css";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading && <Loader />}
        {children}
      </body>
    </html>
  );
}
