
import { Link } from "react-router-dom";
import { Coffee, Home, Utensils, Video, BookOpen } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">YourTime</span>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(navigationMenuTriggerStyle(), "flex items-center")}>
                <Home className="mr-2 h-4 w-4" />
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/menu" className={cn(navigationMenuTriggerStyle(), "flex items-center")}>
                <Utensils className="mr-2 h-4 w-4" />
                Меню
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/coffee-guide" className={cn(navigationMenuTriggerStyle(), "flex items-center")}>
                <Video className="mr-2 h-4 w-4" />
                Как готовить кофе
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/coffee-articles" className={cn(navigationMenuTriggerStyle(), "flex items-center")}>
                <BookOpen className="mr-2 h-4 w-4" />
                Статьи о кофе
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
