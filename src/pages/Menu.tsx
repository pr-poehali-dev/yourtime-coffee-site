import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("coffee");

  const coffeeItems: MenuItem[] = [
    {
      id: 1,
      name: "Эспрессо",
      description: "Крепкий концентрированный кофе с насыщенным вкусом",
      price: 200,
      image: "https://images.unsplash.com/photo-1621555470457-d442812c6b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Американо",
      description: "Эспрессо, разбавленный горячей водой",
      price: 250,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Капучино",
      description: "Эспрессо с добавлением взбитого молока и молочной пены",
      price: 320,
      image: "https://images.unsplash.com/photo-1534005520203-99641d30edd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Латте",
      description: "Кофейный напиток на основе эспрессо с добавлением молока",
      price: 330,
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Флэт Уайт",
      description: "Двойной эспрессо с шелковистым молоком",
      price: 350,
      image: "https://images.unsplash.com/photo-1572286258217-215cf8e667b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Раф",
      description: "Кофе с ванильным сахаром и взбитыми сливками",
      price: 370,
      image: "https://images.unsplash.com/photo-1556845292-28a9946e4c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const waffleItems: MenuItem[] = [
    {
      id: 1,
      name: "Классические вафли",
      description: "С маслом и кленовым сиропом",
      price: 320,
      image: "https://images.unsplash.com/photo-1562376552-0d160a2f35be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Бельгийские вафли",
      description: "С кленовым сиропом и свежими ягодами",
      price: 390,
      image: "https://images.unsplash.com/photo-1504388192519-fb4be897c4d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Шоколадные вафли",
      description: "С шоколадным соусом и взбитыми сливками",
      price: 370,
      image: "https://images.unsplash.com/photo-1588195558493-33ce78261321?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Вафли с карамелью",
      description: "С соленой карамелью и орехами",
      price: 410,
      image: "https://images.unsplash.com/photo-1589634498858-ff8bd4ae25a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-2">Наше меню</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя мир изысканных кофейных напитков и восхитительных десертов в YourTime
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="coffee">Кофе</TabsTrigger>
                <TabsTrigger value="waffles">Вафли</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="coffee">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeItems.map((item) => (
                  <div key={item.id} className="bg-card rounded-lg overflow-hidden shadow-sm group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <span className="text-primary font-medium">₽{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="waffles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {waffleItems.map((item) => (
                  <div key={item.id} className="bg-card rounded-lg overflow-hidden shadow-sm group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <span className="text-primary font-medium">₽{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
