import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X, Package, LayoutDashboard } from 'lucide-react';
import { CartDropdown } from './cart/cart-dropdown';
import { TrackButton } from './tracking/track-button';
import { useOrderStore } from '@/lib/orders/order-store';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Browse Food', href: '/browse' },
  { label: 'My Orders', href: '/orders' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Offers', href: '/offers' },
  { label: 'ByteBank', href: '/byte-bank' },
  { label: 'For Businesses', href: '/business' },
  { label: 'Dashboard Demo', href: '/partner-dashboard' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeOrder = useOrderStore((state) => state.activeOrder);

  const handleNavigation = (href: string) => {
    window.location.href = href;
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="block px-2 py-1 text-lg"
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t space-y-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleNavigation('/auth/sign-in')}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleNavigation('/auth/sign-up')}
                  >
                    Sign Up
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-green-600">BudgetBites</span>
          </a>
        </div>
        <nav className="hidden md:flex mx-6 items-center space-x-4 lg:space-x-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          {activeOrder && (
            <Button
              variant="outline"
              className="text-green-600"
              onClick={() => handleNavigation('/orders')}
            >
              <Package className="h-4 w-4 mr-2" />
              Track Order
            </Button>
          )}
          <TrackButton />
          <CartDropdown />
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              className="text-sm font-medium transition-colors hover:text-green-600"
              onClick={() => handleNavigation('/auth/sign-in')}
            >
              Sign In
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={() => handleNavigation('/auth/sign-up')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}