import React from "react";
import "./about.css";
import aboutBlue from "../../animation/about-blue.json";
import aboutYellow from "../../animation/about-yellow.json";
import backEndBlue from "../../animation/backend-blue.json";
import backEndYellow from "../../animation/backend-yellow.json";
import frontEndBlue from "../../animation/frontend-blue.json";
import frontEndYellow from "../../animation/frontend-yellow.json";

import {
  DiMongodb,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiGithubBadge,
  DiLaravel,
  DiMysql,
  DiPhotoshop,
  DiIllustrator,
  DiPhp,
  DiPython,
} from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import Lottie from "lottie-react";

export default function About({ mode }) {
  return (
    <div className="about md:max-w-[100%] ml-0 px-0 py-6 grid" id="about">
      {/* Frontend Skills Section */}
      <div className="md:flex items-center gap-8  ">
        <div className="md:w-1/2 order-2 md:order-1 p-6">
          <h2
            style={{ color: "var(--text-primary)" }}
            className="text-gray-200 text-3xl font-bold mb-4 first"
          >
            My Skills :
          </h2>
          <p
            style={{ color: "var(--text-secondary)" }}
            className="text-gray-300 mb-4"
          >
            Here are other tools and frameworks I use for Full-stack
            Development.
          </p>
          <div className="flex flex-wrap  sm:gap-4 gap-2 text-4xl justify-center md:justify-start">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <DiSass className="text-pink-600" />
            <DiBootstrap className="text-purple-600" />
            <DiJavascript1 className="text-yellow-600" />
            <DiReact className="text-blue-500" />
            <DiPhp className="text-blue-600" />
            <DiLaravel className="text-red-600" />
            <DiPython className="text-blue-600" />
            <DiNodejsSmall className="text-green-600" />
            <DiMysql className="text-blue-400" />
            <DiMongodb className="text-green-400" />
            <DiGithubBadge className="text-white-500" />
            <DiPhotoshop className="text-blue-700" />
            <DiIllustrator className="text-orange-700" />
            <FaFigma className="text-pink-400" />
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center second">
          <Lottie
            style={{
              width: "100%", // use 100% to make it responsive
              maxWidth: "32rem", // restrict maximum width
              height: "24rem",
              overflow: "hidden",
            }}
            animationData={mode === "dark" ? aboutBlue : aboutYellow}
          />
        </div>
      </div>

      {/* Backend Skills Section */}
      <div className="md:flex items-center  gap-12">
        {/* Text content */}
        <div className="md:w-1/2 order-1 md:order-2 p-6 fourth sm:ml-20 ml-0">
          <h2
            style={{ color: "var(--text-primary)" }}
            className="text-gray-200 text-3xl font-bold mb-4"
          >
            FrontEnd Skills:
          </h2>
          <p
            style={{ color: "var(--text-secondary)" }}
            className="text-gray-300 mb-4"
          >
            Here are the technologies I specialize in for Frontend Development.
          </p>
          <div className="flex flex-wrap sm:gap-4 gap-2 text-4xl justify-center md:justify-start">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <DiSass className="text-pink-600" />
            <DiBootstrap className="text-purple-600" />
            <DiJavascript1 className="text-yellow-600" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-600" />
            <DiGithubBadge className="text-gray-700" />
            <DiPhotoshop className="text-blue-700" />
            <DiIllustrator className="text-orange-700" />
            <FaFigma className="text-pink-400" />
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="md:w-1/2 order-2 md:order-1 py-6 third sm:-translate-x-10 -translate-x-0">
          <Lottie
            style={{
              width: "100%", // use 100% to make it responsive
              maxWidth: "32rem", // restrict maximum width
              height: "24rem",
              overflow: "hidden",
            }}
            animationData={mode === "dark" ? frontEndBlue : frontEndYellow}
          />
        </div>
      </div>

      {/* Full-Stack/Tools Section */}
      <div className="md:flex items-center gap-8 ">
        <div className="md:w-1/2 order-2 md:order-1 p-6 fifth">
          <h2
            style={{ color: "var(--text-primary)" }}
            className="text-gray-200 text-3xl font-bold mb-4"
          >
            BackEnd Skills:
          </h2>
          <p
            style={{ color: "var(--text-secondary)" }}
            className="text-gray-300 mb-4"
          >
            Here are the technologies I specialize in for Backend Development.
          </p>
          <div className="flex flex-wrap sm:gap-4 gap-2  text-4xl justify-center md:justify-start">
            <DiPython className="text-blue-600" />
            <DiMysql className="text-blue-400" />
            <DiLaravel className="text-red-600" />
            <DiNodejsSmall className="text-green-600" />
            <DiMysql className="text-blue-600" />
            <DiMongodb className="text-green-500" />
            <DiGithubBadge className="text-gray-700" />
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center sexth">
          <Lottie
            style={{
              width: "100%", // use 100% to make it responsive
              maxWidth: "32rem", // restrict maximum width
              height: "24rem",
              overflow: "hidden",
            }}
            animationData={mode === "dark" ? backEndBlue : backEndYellow}
          />
        </div>
      </div>
    </div>
  );
}
