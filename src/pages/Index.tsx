import { Link } from "react-router-dom";
import { Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BaristaGallery from "@/components/BaristaGallery";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div 
            className="h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Ваше время для идеального кофе
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Уютная кофейня, где каждая чашка — это история вкуса и аромата
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="font-semibold">
                    <Link to="/menu">
                      Наше меню
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 font-semibold">
                    <Link to="/coffee-guide">
                      Как готовить кофе
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Отборные зерна</h3>
                <p className="text-muted-foreground">Мы используем только свежеобжаренные зерна высшего качества от лучших плантаций мира.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Время для себя</h3>
                <p className="text-muted-foreground">Наша кофейня — идеальное место, чтобы остановиться и насладиться моментом в суете дня.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Мастерство бариста</h3>
                <p className="text-muted-foreground">Наши бариста — настоящие художники кофе, постоянно совершенствующие свое мастерство.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Menu Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Популярные напитки</h2>
              <Button asChild variant="outline">
                <Link to="/menu">
                  Все меню
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card overflow-hidden rounded-lg shadow-sm group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534005520203-99641d30edd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Капучино" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">Капучино</h3>
                    <span className="text-primary font-medium">₽320</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Эспрессо с бархатистой молочной пеной</p>
                </div>
              </div>
              
              <div className="bg-card overflow-hidden rounded-lg shadow-sm group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1572286258217-215cf8e667b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Флэт Уайт" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">Флэт Уайт</h3>
                    <span className="text-primary font-medium">₽350</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Двойной эспрессо с шелковистым молоком</p>
                </div>
              </div>
              
              <div className="bg-card overflow-hidden rounded-lg shadow-sm group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1608651057580-4a150ad53be8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Бельгийские вафли" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">Бельгийские вафли</h3>
                    <span className="text-primary font-medium">₽390</span>
                  </div>
                  <p className="text-sm text-muted-foreground">С кленовым сиропом и свежими ягодами</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Barista Gallery */}
        <section className="py-16 bg-muted">
          <div className="container">
            <BaristaGallery />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
