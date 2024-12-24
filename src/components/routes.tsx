import { Home } from '@/pages/home';
import { Browse } from '@/pages/browse';
import { Product } from '@/pages/product';
import { Checkout } from '@/pages/checkout';
import { Orders } from '@/pages/orders';
import { Offers } from '@/pages/offers';
import { ByteBank } from '@/pages/byte-bank';
import { HowItWorks } from '@/pages/how-it-works';
import { Business } from '@/pages/business';
import { SignIn } from '@/pages/auth/sign-in';
import { SignUp } from '@/pages/auth/sign-up';
import { PartnerDashboard } from '@/pages/partner-dashboard';

export function Routes() {
  const path = window.location.pathname;
  
  switch (path) {
    case '/browse':
      return <Browse />;
    case '/product':
      return <Product />;
    case '/checkout':
      return <Checkout />;
    case '/orders':
      return <Orders />;
    case '/offers':
      return <Offers />;
    case '/byte-bank':
      return <ByteBank />;
    case '/how-it-works':
      return <HowItWorks />;
    case '/business':
      return <Business />;
    case '/auth/sign-in':
      return <SignIn />;
    case '/auth/sign-up':
      return <SignUp />;
    case '/partner-dashboard':
      return <PartnerDashboard />;
    default:
      return <Home />;
  }
}