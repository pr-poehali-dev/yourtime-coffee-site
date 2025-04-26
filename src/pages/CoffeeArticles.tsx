import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Coffee, Globe, Tag } from "lucide-react";

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "origins" | "brewing" | "beans";
  readTime: string;
  date: string;
};

const CoffeeArticles = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const articles: Article[] = [
    {
      id: 1,
      title: "Арабика vs Робуста: в чем разница?",
      description: "Подробный разбор отличий двух основных видов кофейных зерен, их вкусовых характеристик и способов применения.",
      image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "beans",
      readTime: "7 мин",
      date: "15 апреля 2025"
    },
    {
      id: 2,
      title: "Секреты правильной обжарки кофе",
      description: "Как температура и время обжарки влияют на вкус кофе и почему светлая обжарка сохраняет больше нюансов вкуса.",
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "beans",
      readTime: "5 мин",
      date: "10 апреля 2025"
    },
    {
      id: 3,
      title: "Кофе из Эфиопии: вкус истории",
      description: "Погрузитесь в историю родины кофе — узнайте о традиционных способах обработки и уникальных нотах эфиопских сортов.",
      image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "origins",
      readTime: "8 мин",
      date: "2 апреля 2025"
    },
    {
      id: 4,
      title: "Колумбийский кофе: от фермы до чашки",
      description: "Почему колумбийский кофе считается эталоном качества и как местные фермеры достигают непревзойденного вкуса.",
      image: "https://images.unsplash.com/photo-1518783211485-10fd3bfb2ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "origins",
      readTime: "6 мин",
      date: "25 марта 2025"
    },
    {
      id: 5,
      title: "Искусство альтернативного заваривания",
      description: "Химекс, аэропресс, пуровер — сравнение методов ручного заваривания и их влияние на экстракцию вкуса.",
      image: "https://images.unsplash.com/photo-1559001724-fbad036dbc9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "brewing",
      readTime: "9 мин",
      date: "18 марта 2025"
    },
    {
      id: 6,
      title: "Холодное заваривание: гид для начинающих",
      description: "Все, что нужно знать о приготовлении cold brew кофе в домашних условиях для получения идеального освежающего напитка.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "brewing",
      readTime: "5 мин",
      date: "10 марта 2025"
    }
  ];

  const filteredArticles = activeTab === "all" 
    ? articles 
    : articles.filter(article => article.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "origins":
        return <Globe className="h-4 w-4" />;
      case "brewing":
        return <Coffee className="h-4 w-4" />;
      case "beans":
        return <Tag className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case "origins":
        return "Происхождение";
      case "brewing":
        return "Заваривание";
      case "beans":
        return "О зернах";
      default:
        return category;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-2">Статьи о кофе</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Погрузитесь в мир кофе — от тонкостей выращивания до секретов приготовления идеальной чашки
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-10">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="beans">Зерна</TabsTrigger>
                <TabsTrigger value="origins">Регионы</TabsTrigger>
                <TabsTrigger value="brewing">Заваривание</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="flex flex-col h-full overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground rounded-full px-2 py-1">
                      {getCategoryIcon(article.category)}
                      {getCategoryName(article.category)}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-0 flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <Button variant="outline" size="sm">Читать статью</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoffeeArticles;
