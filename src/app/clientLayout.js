"use client"; // This marks the component as a client component

import React from "react";
import { usePathname } from "next/navigation";
import Topbar from "@/Components/navigation/topbar";
import Footer from "@/Components/footer/Footer";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();

  const noTopbarFooterRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/forgotpassword",
    "/auth/forgotpassword/otp",
  ];

  const shouldHideTopbarFooter = noTopbarFooterRoutes.includes(pathname);

  return (
    <>
      {!shouldHideTopbarFooter && <Topbar />}
      {children}
      {!shouldHideTopbarFooter && <Footer />}
    </>
  );
};

export default ClientLayout;
