import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Search, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = ({
  onSearch = () => {},
  onJoinClick = () => {},
  isLoggedIn = false,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-200 z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-green-700">
            CA-HUB KENYA
          </a>
        </div>

        {/* Navigation - Desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[200px]">
                  <NavigationMenuLink asChild>
                    <a
                      href="/about/profile"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Profile
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/about/membership"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Membership
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/about/governance"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Governance
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Work</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[250px]">
                  <NavigationMenuLink asChild>
                    <a
                      href="/our-work"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Conservation Agriculture
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/our-work?tab=projects"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Partnership Projects
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/our-work?tab=collaborative"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Collaborative Work
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resource Center</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[250px]">
                  <NavigationMenuLink asChild>
                    <a
                      href="/resources"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      News & Events
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/resources?tab=newsletter"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Newsletter
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/resources?tab=success"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Success Stories
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/resources?tab=technical"
                      className="block p-2 hover:bg-gray-100 rounded"
                    >
                      Technical Resources
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/symposium" className="block p-2">
                  Symposium
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/gallery" className="block p-2">
                  Gallery
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search and Join - Desktop */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 w-[200px] bg-gray-50"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <Button
            onClick={onJoinClick}
            variant={isLoggedIn ? "outline" : "default"}
            className={
              isLoggedIn ? "bg-white text-green-700" : "bg-green-700 text-white"
            }
          >
            <a href="/get-involved">Get Involved</a>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 py-6">
                <h2 className="text-lg font-semibold mb-2">Menu</h2>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    About
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/about/profile"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/membership"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Membership
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/governance"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Governance
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Our Work
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/our-work"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Conservation Agriculture
                      </a>
                    </li>
                    <li>
                      <a
                        href="/our-work?tab=projects"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Partnership Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="/our-work?tab=collaborative"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Collaborative Work
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Resource Center
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/resources"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        News & Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources?tab=newsletter"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources?tab=success"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a
                        href="/resources?tab=technical"
                        className="block p-2 hover:bg-gray-100 rounded"
                      >
                        Technical Resources
                      </a>
                    </li>
                  </ul>
                </div>

                <a
                  href="/symposium"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  Symposium
                </a>
                <a
                  href="/gallery"
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  Gallery
                </a>

                <div className="mt-4">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-10 w-full bg-gray-50"
                      onChange={(e) => onSearch(e.target.value)}
                    />
                  </div>

                  <Button className="w-full bg-green-700 text-white">
                    <a href="/get-involved">Get Involved</a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
