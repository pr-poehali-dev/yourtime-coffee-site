import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type VideoGuide = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  embedId: string;
};

const CoffeeGuide = () => {
  const [activeTab, setActiveTab] = useState("espresso");

  const espressoGuides: VideoGuide[] = [
    {
      id: 1,
      title: "Идеальный эспрессо в домашних условиях",
      description: "Подробное руководство по приготовлению эспрессо на профессиональной кофемашине.",
      thumbnail: "https://images.unsplash.com/photo-1515283709260-ee29296f1534?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      embedId: "dQw4w9WgXcQ" // Это пример ID видео YouTube
    },
    {
      id: 2,
      title: "Секреты темперовки кофе",
      description: "Как правильно темперовать кофе для идеального эспрессо.",
      thumbnail: "https://images.unsplash.com/photo-1565600129908-c73603792db8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      embedId: "dQw4w9WgXcQ"
    },
  ];

  const pouroverGuides: VideoGuide[] = [
    {
      id: 1,
      title: "Метод пуровер: V60",
      description: "Пошаговое руководство по приготовлению кофе методом пуровер с использованием Hario V60.",
      thumbnail: "https://images.unsplash.com/photo-1544273980-38e1b191fe92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Кофе по-японски: Метод Кемекс",
      description: "Как приготовить идеальный кофе в Кемексе с контролем всех параметров.",
      thumbnail: "https://images.unsplash.com/photo-1523239424176-956a1180625b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      embedId: "dQw4w9WgXcQ"
    },
  ];

  const latteArtGuides: VideoGuide[] = [
    {
      id: 1,
      title: "Основы латте-арт: Сердце",
      description: "Научитесь рисовать классическое сердце на латте для начинающих бариста.",
      thumbnail: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      embedId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Продвинутый латте-арт: Розетта",
      description: "Техника создания рисунка розетты на поверхности кофе.",
      thumbnail: "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      embedId: "dQw4w9WgXcQ"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-2">Как приготовить кофе</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Видеоруководства по различным методам приготовления кофе от наших опытных бариста
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="espresso">Эспрессо</TabsTrigger>
                <TabsTrigger value="pourover">Пуровер</TabsTrigger>
                <TabsTrigger value="latteart">Латте-арт</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="espresso">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {espressoGuides.map((guide) => (
                  <Card key={guide.id} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${guide.embedId}`}
                          title={guide.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="object-cover"
                        />
                      </AspectRatio>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pourover">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pouroverGuides.map((guide) => (
                  <Card key={guide.id} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${guide.embedId}`}
                          title={guide.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="object-cover"
                        />
                      </AspectRatio>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="latteart">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latteArtGuides.map((guide) => (
                  <Card key={guide.id} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${guide.embedId}`}
                          title={guide.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="object-cover"
                        />
                      </AspectRatio>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-xl mb-2">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardContent>
                  </Card>
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

export default CoffeeGuide;
