import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './ui/navigation-menu';

export default function Navbar() {
  return (
    <nav className="bg-[#fbd560] text-white p-4 shadow-md fixed w-full z-[99]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold leading-relaxed text-[#090909]">
          TastyApp
        </h1>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <Link to="/" className="text-[#090909] hover:underline">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/products" className="text-[#090909] hover:underline">
                Recipes
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="text-[#090909] hover:underline">
                About
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
