import Link from "next/link";
import { TiSocialLinkedin, TiSocialInstagramCircular, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 sm:px-8 md:px-16 lg:px-30">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-around gap-8 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Siddhartha Baniya
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Writer sharing insights on technology, creativity, and life. 
              Exploring ideas that matter and stories worth telling.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">

                <Link 
                href="#" 
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <TiSocialInstagramCircular className="text-2xl" />
              </Link>

              <Link 
                href="#" 
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <TiSocialFacebook className="text-2xl" />
              </Link>

              <Link 
                href="#" 
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <TiSocialLinkedin className="text-2xl" />
              </Link>
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-col items-center md:justify-center gap-4 pt-8 border-t border-border">
          <div className="block">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Siddhartha Baniya. All rights reserved.
            </p>
          </div>
          <div className="block">
            <p className="text-muted-foreground text-sm">
              Developed by Kushal Shrestha.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}