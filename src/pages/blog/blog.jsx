/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            My Blog
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Differences between uncontrolled and controlled components?
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Choosing between controlled and uncontrolled components
                  depends on the specific requirements of your application.
                  Generally, controlled components are recommended in most cases
                  as they provide a more predictable and manageable way to
                  handle form data in React. However, uncontrolled components
                  might be useful in situations where you want to integrate
                  React with non-React code or libraries, or when you want to
                  leverage existing HTML forms without refactoring them.
                </p>
                <Link
                target="_blank"
                  to="https://www.altogic.com/blog/difference-between-controlled-and-uncontrolled-component#:~:text=In%20React%2C%20controlled%20components%20refer,manage%20their%20own%20state%20internally."
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  How to validate React props using PropTypes?
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  In React, you can use PropTypes to validate the type of props
                  that a component receives. PropTypes is a type-checking
                  library that helps you define the types of props that your
                  component expects. here is how you can use PropTypes to
                  validate props in a React component:
                  <li>Install prop-types</li>
                  <li>Import PropTypes</li>
                  <li>Define propTypes</li>
                  <li>Using defaultProps (Optional)</li>
                  <li>Using the Component</li>
                </p>
                <Link
                target="_blank"
                  to="https://blog.logrocket.com/validate-react-props-proptypes/"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Difference between nodejs and express js
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Node.js is a runtime environment for executing JavaScript on
                  the server side, while Express.js is a web application
                  framework that provides a set of tools and features for
                  building web applications and APIs in Node.js. Express.js
                  builds on top of Node.js to simplify the process of handling
                  HTTP requests and defining routes.
                  <li>
                    Node js: Runtime Environment: Node.js is a runtime
                    environment that allows you to run JavaScript on the server
                    side. It provides the ability to 
                    
                  </li>
                </p>
                <Link target="_blank" to='https://web-and-mobile-development.medium.com/what-are-the-prime-differences-between-node-js-and-express-js-b560b19b8b33#:~:text=Compared%20to%20NodeJS%2C%20ExpressJS%20manages,can%20handle%20many%20concurrent%20connections.' className="mt-3 text-indigo-500 inline-flex items-center ">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
