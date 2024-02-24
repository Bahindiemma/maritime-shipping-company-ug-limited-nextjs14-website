import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import TopBar from "@/components/topbar";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maritime Shipping Company Uganda Limited",
  description:
    "Maritime Shipping Company Uganda Limited - Your trusted partner for comprehensive logistics and shipping solutions in Uganda. Offering reliable freight forwarding, cargo handling, and maritime services. Contact us for efficient and cost-effective shipping solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="description"
        content="Maritime Shipping Company Uganda Limited - Your trusted partner for comprehensive logistics and shipping solutions in Uganda. Offering reliable freight forwarding, cargo handling, and maritime services. Contact us for efficient and cost-effective shipping solutions."
      />
      <head>
        <link href="/assets/img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link
          href="/assets/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        {/* Customized Bootstrap Stylesheet */}
        <link href="/assets/css/style.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <TopBar />
        <NavBar />
        {children}
        <Footer />
        <Script
          strategy="lazyOnload"
          src="https://code.jquery.com/jquery-3.4.1.min.js"
        />
        <Script
          strategy="lazyOnload"
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
        />
        <Script strategy="lazyOnload" src="/assets/lib/easing/easing.min.js" />
        <Script
          strategy="lazyOnload"
          src="/assets/lib/waypoints/waypoints.min.js"
        />
        <Script
          strategy="lazyOnload"
          src="/assets/lib/counterup/counterup.min.js"
        />
        <Script
          strategy="lazyOnload"
          src="/assets/lib/owlcarousel/owl.carousel.min.js"
        />

        <Script
          strategy="lazyOnload"
          src="/assets/mail/jqBootstrapValidation.min.js"
        />
        <Script strategy="lazyOnload" src="/assets/mail/contact.js" />

        <Script strategy="lazyOnload" src="/assets/js/main.js" />
      </body>
    </html>
  );
}
