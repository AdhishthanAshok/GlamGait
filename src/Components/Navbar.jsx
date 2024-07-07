import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import logo_img from "./assets/logo.png";
import profile_img from "./assets/profile_icon.png";
import Theme from "./Theme.jsx";

const navigation = [
  { name: "Shop", to: "/", current: true },
  { name: "Men", to: "/mens", current: false },
  { name: "Women", to: "/womens", current: false },
  { name: "Kids", to: "/kids", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-1/5">
      <Disclosure as="nav" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {({ open }) => (
          <>
            <div>
              <div className="flex justify-between items-center gap-8">
                <div className="flex justify-end mx-auto sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                  {/* Mobile menu button */}
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <Link to="/">
                        <img
                          className="h-10 w-auto"
                          src={logo_img}
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Navigation links */}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => setMenu(item.name)}
                          className={classNames(
                            menu === item.name
                              ? "bg-gray-700 text-white dark:text-gray-50"
                              : "text-black hover:bg-gray-800 hover:text-white dark:text-gray-50",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    to="/cart"
                    className="relative rounded-full bg-gray-800 p-2 ml-4 text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </Link>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profile_img}
                        alt=""
                      />
                    </Menu.Button>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute dark:bg-gray-900 mt-2 w-44 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(
                                active ? "bg-gray-200 dark:bg-gray-700" : "",
                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-50"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/settings"
                              className={classNames(
                                active ? "bg-gray-200 dark:bg-gray-700" : "",
                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-50"
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/logout"
                              className={classNames(
                                active ? "bg-gray-200 dark:bg-gray-700" : "",
                                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-50"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <Theme />
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMenu(item.name)}
                    className={classNames(
                      menu === item.name
                        ? "bg-gray-900 text-gray-50 sm:dark:text-gray-50 dark:bg-gray-800 dark:text-gray-50"
                        : "text-gray-600 hover:bg-gray-700 hover:text-gray-400",
                      "block rounded-md px-3 py-2 text-base font-medium dark:text-gray-400"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
