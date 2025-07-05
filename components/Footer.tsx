import Link from "next/link";
import { TiSocialLinkedin, TiSocialInstagramCircular, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 sm:px-8 md:px-16 lg:px-30">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-around gap-8 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Siddhartha Baniya
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Writer sharing insights on technology, creativity, and life. 
              Exploring ideas that matter and stories worth telling.
            </p>
            <div className="flex space-x-4">

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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
          <div>
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
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Siddhartha Baniya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}