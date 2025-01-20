import React from "react";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className="flex items-center gap-x-2 text-gray-600 hover:text-black transition-colors"
  >
    <Icon />
    {label}
  </a>
);

const FooterLink = ({ href, label }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-black transition-colors"
  >
    {label}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-start space-y-8 sm:space-y-0 px-4">
        {/* Logo Section */}
        <div className="hidden md:block">
          <Image
            src="/logo/tamaduni_logo.png"
            alt="Tamaduni Logo"
            width={80}
            height={80}
          />
        </div>

        {/* Resources Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <FooterLink href="/about-us" label="About Us" />
          <FooterLink href="/blog" label="Blog" />
          <FooterLink href="/faq" label="FAQs" />
          <FooterLink href="/support" label="Support" />
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-bold text-lg mb-4">Social</h3>
          <SocialLink
            href="https://instagram.com"
            icon={FaInstagram}
            label="Instagram"
          />
          <SocialLink
            href="https://youtube.com"
            icon={FaYoutube}
            label="YouTube"
          />
          <SocialLink
            href="https://twitter.com"
            icon={FaTwitter}
            label="Twitter"
          />
        </div>

        {/* Legal Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <FooterLink href="/terms-of-service" label="Terms of Service" />
          <FooterLink href="/privacy-policy" label="Privacy Policy" />
          <FooterLink href="/cookie-policy" label="Cookie Policy" />
          <FooterLink href="/disclaimer" label="Disclaimer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
