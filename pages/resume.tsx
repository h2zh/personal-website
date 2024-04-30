import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";

function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

const Resume = () => {
  const isClient = useIsClient();
  return (
    <div>
      <Head>
        <title>Howard Zhong's Latest Resume</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-4 text-black">
        Howard Zhong's Resume
      </h1>
      {isClient ? (
        <iframe
          src="/Howard_Zhong_Resume_0429.pdf"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        >
          This browser does not support PDFs. Please download the PDF to view
          it: <a href="/Howard_Zhong_Resume_0429.pdf">Download PDF</a>
        </iframe>
      ) : (
        <div>Loading client component...</div>
      )}
    </div>
  );
};

export default Resume;
