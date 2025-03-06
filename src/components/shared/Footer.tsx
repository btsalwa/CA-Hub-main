import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About CA-HUB KENYA</h3>
            <p className="text-gray-300 mb-4">
              A network promoting conservation agriculture and climate smart
              practices through knowledge sharing, research, and policy
              advocacy.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about/profile"
                  className="text-gray-300 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="/our-work" className="text-gray-300 hover:text-white">
                  Our Work
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-300 hover:text-white">
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/get-involved"
                  className="text-gray-300 hover:text-white"
                >
                  Get Involved
                </a>
              </li>
              <li>
                <a href="/symposium" className="text-gray-300 hover:text-white">
                  Symposium
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-white">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>KALRO Kabete, Nairobi</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@act-africa.org"
                  className="hover:text-white"
                >
                  info@act-africa.org
                </a>
              </li>
              <li>
                Tel:{" "}
                <a href="tel:+254774895077" className="hover:text-white">
                  +254 774895077
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on Conservation
              Agriculture in Kenya
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-green-800 border-green-700 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="bg-green-800" />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} CA-HUB KENYA. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Hosted by{" "}
            <a
              href="https://act-africa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Africa Conservation Tillage Network (ACT)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
