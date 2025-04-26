
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BaristaGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1516600694147-4991aa0c8d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Бариста готовит эспрессо",
      caption: "Искусство приготовления эспрессо"
    },
    {
      src: "https://images.unsplash.com/photo-1518057111178-44a106bad149?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Бариста делает латте-арт",
      caption: "Создание идеального латте-арта"
    },
    {
      src: "https://images.unsplash.com/photo-1513270246933-35904915bf2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Процесс обжарки кофейных зерен",
      caption: "Обжарка свежих кофейных зерен"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Наши бариста за работой</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg group">
            <AspectRatio ratio={4/3} className="bg-muted">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
              />
            </AspectRatio>
            <p className="text-center mt-2 text-sm text-muted-foreground">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaristaGallery;
