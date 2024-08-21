"use client";

import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';

export function HomeLogo() {
    return (
      <Link href="/about">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
            <Image
                alt="Home"
                src="/vdbHome.png"
                height={64}
                width={64}
            />
        </motion.div>
      </Link>
    );
}

export function WiggleMenu() {
    return (
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
            <MenuButton className="group relative flex rounded-full bg-gray-800 text-sm">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <FaBars aria-hidden="true" className="block h-6 w-auto group-data-[open]:hidden"/>
                <FaTimes aria-hidden="true" className="hidden h-6 w-auto group-data-[open]:block" />
            </MenuButton>
        </motion.div>
    );
}




export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
                <HomeLogo/>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <WiggleMenu/>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link href="/resume" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 text-black">
                    Resume
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/colophon" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 text-black">
                    Colophon
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
