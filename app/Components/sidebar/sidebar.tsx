"use client";
import Link from "next/link";
import React, { useState } from "react";
import DashboardIcon from "../DashboardIcon";
import Teams from "../Teams";
import PaymentsIcon from "../paymentsIcon";
import attendanceIcon from "../attendanceIcon";
import settingsIcon from "../settingsIcon";

const SideBar = () => {
  const [active, setActive] = useState("Dashboard");

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
