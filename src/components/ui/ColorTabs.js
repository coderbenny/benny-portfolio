import React, { useState } from "react";
import {
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope,
  FaBlog,
  FaChevronDown,
} from "react-icons/fa";

import Blog from "../pages/Blog";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

export default function ColorTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    {
      label: "Projects",
      icon: FaProjectDiagram,
      component: <Projects />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
    },
    {
      label: "Resume",
      icon: FaFileAlt,
      component: <Resume />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-500",
    },
    {
      label: "Contact",
      icon: FaEnvelope,
      component: <ContactMe />,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
    },
    // {
    //   label: "Blog",
    //   icon: FaBlog,
    //   component: <Blog />,
    //   color: "text-orange-500",
    //   bgColor: "bg-orange-50",
    //   borderColor: "border-orange-500",
    // },
  ];

  const activeTabData = tabs[activeTab];

  return (
    <div className="w-full">
      {/* Desktop Tabs */}
      <div className="hidden md:flex bg-white shadow-lg border-b border-gray-200">
        <div className="flex w-full max-w-6xl mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 font-semibold text-lg transition-all duration-300 relative group ${
                activeTab === index
                  ? `${tab.color} ${tab.bgColor} border-b-4 ${tab.borderColor}`
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <tab.icon
                className={`text-xl ${
                  activeTab === index ? tab.color : "text-gray-500"
                }`}
              />
              <span>{tab.label}</span>
              {activeTab === index && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${tab.color.replace(
                    "text-",
                    "bg-"
                  )} rounded-t-full`}
                ></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden bg-white shadow-lg border-b border-gray-200">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`w-full flex items-center justify-between p-4 font-semibold text-lg ${activeTabData.color} ${activeTabData.bgColor}`}
        >
          <div className="flex items-center gap-3">
            <activeTabData.icon className={`text-xl ${activeTabData.color}`} />
            <span>{activeTabData.label}</span>
          </div>
          <FaChevronDown
            className={`transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute z-10 w-full bg-white shadow-xl border border-gray-200 rounded-b-lg">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors duration-200 ${
                  activeTab === index
                    ? `${tab.color} ${tab.bgColor}`
                    : "text-gray-600"
                }`}
              >
                <tab.icon
                  className={`text-xl ${
                    activeTab === index ? tab.color : "text-gray-500"
                  }`}
                />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-3">
        <div className="transition-all duration-300 ease-in-out">
          {activeTabData.component}
        </div>
      </div>
    </div>
  );
}
