import FileUpload from "../src/components/FileUpload";
import Head from 'next/head'
import React from "react";

export default function Home() {

  return (
    <div>
      <Head>
        <title>!DocType</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Transform the way you manage and edit your documents with Doctype, the innovative document management software. Sign up today!" />
        <meta name="keywords" content="document management software, document editing software, document editing, document management, doctype software, doctype editing, PDF editor, online editor, document editing, edit PDF, online PDF editing, Online PDF editor, edit PDF online, PDF editing software, cloud-based PDF editor, free PDF editor, PDF editor for collaboration, PDF editor with OCR, online PDF annotation tool, PDF form filler, PDF converter" />
        <link rel="icon" href="./logo.png" type="image/x-icon" />
        <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
        <title>Doctype - Revolutionize Your Document Management</title>

        {/* <!-- Structured Data --> */}
        <script type="application/ld+json">
          {
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://doctype.software/",
              "name": "Doctype",
              "description": "Transform the way you manage and edit your pdf with Doctype, the innovative document management software.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://doctype.software/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          }
        </script>

      </Head>
      <FileUpload />
    </div>
  );
}
