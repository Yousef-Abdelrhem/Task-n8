"use client";
import Dashboard from "@/app/dashboard/page";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import DashboardIcon from "../DashboardIcon";
import Teams from "../Teams";
import Payments from "@/app/payments/page";
import PaymentsIcon from "../paymentsIcon";
import attendanceIcon from "../attendanceIcon";
import settingsIcon from "../settingsIcon";

const SideBar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState("Dashboard");
  const icons = [
    `<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0796 7.11694C13.1353 7.83356 13.875 8.80447 13.875 10.099V12.4107H16.9572V10.099C16.9572 8.41919 14.2063 7.42517 12.0796 7.11694Z" fill="#1A1A1A"/>
<path d="M10.7924 6.24626C12.4954 6.24626 13.8747 4.86696 13.8747 3.16402C13.8747 1.46109 12.4954 0.0817871 10.7924 0.0817871C10.4303 0.0817871 10.0912 0.158843 9.76758 0.266721C10.4071 1.0604 10.7924 2.06983 10.7924 3.16402C10.7924 4.25822 10.4071 5.26765 9.76758 6.06133C10.0912 6.1692 10.4303 6.24626 10.7924 6.24626Z" fill="#1A1A1A"/>
<path d="M6.16915 6.24626C7.87209 6.24626 9.25139 4.86696 9.25139 3.16402C9.25139 1.46109 7.87209 0.0817871 6.16915 0.0817871C4.46622 0.0817871 3.08691 1.46109 3.08691 3.16402C3.08691 4.86696 4.46622 6.24626 6.16915 6.24626ZM6.16915 1.62291C7.01677 1.62291 7.71027 2.31641 7.71027 3.16402C7.71027 4.01164 7.01677 4.70514 6.16915 4.70514C5.32154 4.70514 4.62803 4.01164 4.62803 3.16402C4.62803 2.31641 5.32154 1.62291 6.16915 1.62291Z" fill="#1A1A1A"/>
<path d="M6.16936 7.01709C4.11196 7.01709 0.00488281 8.04964 0.00488281 10.0993V12.411H12.3338V10.0993C12.3338 8.04964 8.22675 7.01709 6.16936 7.01709ZM10.7927 10.8699H1.546V10.107C1.70011 9.55223 4.08885 8.55821 6.16936 8.55821C8.24987 8.55821 10.6386 9.55223 10.7927 10.0993V10.8699Z" fill="#1A1A1A"/>
</svg>
`,
  ];
  const links = [
    { href: "/dashboard", icon: DashboardIcon, label: "Dashboard" },
    { href: "/teams", icon: Teams, label: "Teams" },
    { href: "/payments", icon: PaymentsIcon, label: "Payments" },
    { href: "/attendance", icon: attendanceIcon, label: "Attendance" },
    { href: "/settings", icon: settingsIcon, label: "Settings" },
  ];

  return (
    <div className="flex flex-col h-screen bg-white rounded-3xl sidebar-shadow w-64 max-w-full p-4 ">
      <div className="flex flex-col justify-between h-full mt-10">
        <nav className="flex flex-col gap-4">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-3 py-3 px-5 font-medium rounded-full transition-colors ${
                  active === link.label
                    ? "sidebar-active"
                    : "hover:bg-gray-100 text-dark"
                }`}
                onClick={() => setActive(link.label)}
              >
                <IconComponent />
                {link.label}
                {active === link.label && (
                  <div className="absolute -right-6 top-1/2 transform -translate-y-[2.7rem]">
                    <svg
                      width="59"
                      height="5.36rem"
                      viewBox="0 0 59 107"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M47 19C55.4 14.2 58.5 4.33333 59 0V107C58.6 93.4 43.1667 86 35.5 84H1.5L0 23.5C26.5 24.5 36.5 25 47 19Z"
                        fill="#0077CC"
                      />
                    </svg>
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        <div>
          <Link
            href="/logout"
            className="flex items-center gap-3 py-3 px-5 rounded-full text-red-600 hover:bg-red-50 transition"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7073 4.03517L10.6208 5.12166L11.8383 6.34685H5.54279V7.88796H11.8383L10.6208 9.10545L11.7073 10.1996L14.7895 7.11741L11.7073 4.03517ZM2.46055 1.72349H7.85447V0.182373H2.46055C1.61294 0.182373 0.919434 0.875876 0.919434 1.72349V12.5113C0.919434 13.3589 1.61294 14.0524 2.46055 14.0524H7.85447V12.5113H2.46055V1.72349Z"
                fill="#E32134"
              />
            </svg>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
