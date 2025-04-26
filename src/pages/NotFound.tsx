import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md text-center">
          <Coffee className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl font-bold mb-2">Страница не найдена</h1>
          <p className="text-muted-foreground mb-8">
            Кажется, вы заблудились. Пока вы ищете нужную страницу, как насчет чашечки кофе?
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
