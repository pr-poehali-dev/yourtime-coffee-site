import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Coffee className="h-6 w-6 text-primary mr-2" />
            <span className="font-bold text-xl">YourTime</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {new Date().getFullYear()} YourTime Кофейня</p>
            <p className="text-sm text-muted-foreground mt-1">Ваше время для идеального кофе</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Часы работы</h3>
            <p className="text-sm text-muted-foreground">Пн-Пт: 8:00 - 20:00</p>
            <p className="text-sm text-muted-foreground">Сб-Вс: 9:00 - 21:00</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Контакты</h3>
            <p className="text-sm text-muted-foreground">+7 (123) 456-7890</p>
            <p className="text-sm text-muted-foreground">info@yourtime.coffee</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Адрес</h3>
            <p className="text-sm text-muted-foreground">
              ул. Кофейная, 42<br />
              г. Москва, 123456
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
