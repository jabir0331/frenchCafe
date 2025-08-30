import React, { useState } from 'react';
import { Coffee, Croissant, Utensils, Clock, Star, Award } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuCategories = {
    coffee: {
      name: 'Coffee',
      icon: Coffee,
      items: [
        { name: 'Classic Espresso', description: 'Intense and full-bodied black coffee with rich crema', price: '$3.50', popular: true },
        { name: 'Café au Lait', description: 'Espresso with hot frothy milk, French café style', price: '$4.80', popular: false },
        { name: 'Cappuccino', description: 'Perfect balance of espresso, hot milk and velvety foam', price: '$5.20', popular: true },
        { name: 'Café Noisette', description: 'Espresso with just a touch of warm milk', price: '$4.20', popular: false },
        { name: 'Café Crème', description: 'Long coffee with fresh cream and delicate foam', price: '$5.50', popular: false },
        { name: 'French Press', description: 'Full-bodied coffee brewed to perfection', price: '$4.80', popular: false },
      ]
    },
    pastries: {
      name: 'Pastries',
      icon: Croissant,
      items: [
        { name: 'Butter Croissant', description: 'Traditional buttery croissant, flaky and golden', price: '$3.80', popular: true },
        { name: 'Pain au Chocolat', description: 'Pastry with premium dark chocolate', price: '$4.20', popular: true },
        { name: 'Coffee Éclair', description: 'Choux pastry filled with rich coffee cream', price: '$5.80', popular: false },
        { name: 'Mille-feuille', description: 'Crispy puff pastry layers with vanilla pastry cream', price: '$6.50', popular: false },
        { name: 'Apple Tart', description: 'Caramelized apple tart with cinnamon', price: '$7.20', popular: true },
        { name: 'Almond Croissant', description: 'Croissant filled with sweet almond cream', price: '$4.50', popular: false },
      ]
    },
    breakfast: {
      name: 'Breakfast',
      icon: Utensils,
      items: [
        { name: 'Avocado Toast', description: 'Grilled artisan bread, avocado, tomato, poached egg', price: '$12.50', popular: true },
        { name: 'French Omelette', description: 'Herb omelette with fresh green salad and toast', price: '$11.80', popular: false },
        { name: 'Croque Monsieur', description: 'Ham, Gruyère cheese, béchamel, brioche bread', price: '$13.20', popular: true },
        { name: 'Granola Bowl', description: 'House-made granola, fresh fruits, Greek yogurt', price: '$9.90', popular: false },
        { name: 'French Toast', description: 'Brioche French toast with berry compote', price: '$10.50', popular: false },
      ]
    },
    lunch: {
      name: 'Lunch',
      icon: Utensils,
      items: [
        { name: 'Parisian Salad', description: 'Mixed greens, warm goat cheese, walnuts, vinaigrette', price: '$15.50', popular: true },
        { name: 'Quiche Lorraine', description: 'Traditional quiche with bacon and Gruyère cheese', price: '$14.80', popular: true },
        { name: 'French Onion Soup', description: 'Cheese-gratinated soup with croutons', price: '$12.90', popular: false },
        { name: 'Chef\'s Special', description: 'Daily specialty featuring seasonal ingredients', price: '$18.50', popular: false },
        { name: 'Croque Madame', description: 'Croque Monsieur topped with a fried egg', price: '$15.20', popular: false },
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cafe-cream via-white to-cafe-cream/50 py-24 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cafe-gold/10 to-cafe-wine/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cafe-wine/10 to-cafe-navy/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-cafe-navy/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-wine/20 to-cafe-gold/20 px-8 py-4 rounded-full mb-8 border border-cafe-wine/30 shadow-lg">
            <Award className="h-6 w-6 text-cafe-wine" />
            <span className="font-sans font-bold text-cafe-navy text-lg">Artisanal Menu</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-cafe-navy mb-8 relative leading-tight">
            Our Exquisite Menu
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-cafe-gold via-cafe-wine to-cafe-gold rounded-full shadow-lg"></div>
          </h1>
          <p className="font-sans text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our French specialties prepared with passion and the finest ingredients, 
            bringing authentic Parisian flavors to every bite and sip
          </p>
        </div>

        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center mb-20 gap-6">
          {Object.entries(menuCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`group relative px-10 py-5 rounded-2xl font-sans font-bold text-lg transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl border-2 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-cafe-wine via-cafe-wine to-cafe-wine/90 text-white shadow-2xl border-cafe-wine/50 scale-110'
                    : 'bg-white text-cafe-navy hover:bg-gradient-to-r hover:from-cafe-gold/20 hover:to-cafe-wine/10 hover:text-cafe-wine border-cafe-cream hover:border-cafe-gold/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className={`h-6 w-6 transition-colors duration-300 ${
                    activeCategory === key ? 'text-cafe-gold' : 'text-cafe-navy group-hover:text-cafe-wine'
                  }`} />
                  <span>{category.name}</span>
                </div>
                {activeCategory === key && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-cafe-gold rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Enhanced Menu Items */}
        <div className="bg-gradient-to-br from-white via-white to-cafe-cream/20 rounded-3xl shadow-3xl p-12 md:p-16 border-2 border-cafe-cream/50 backdrop-blur-sm relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-cafe-gold rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-cafe-wine rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-cafe-navy/10 to-cafe-wine/10 px-8 py-4 rounded-2xl border border-cafe-gold/30 mb-6">
                {React.createElement(menuCategories[activeCategory as keyof typeof menuCategories].icon, {
                  className: "h-8 w-8 text-cafe-wine"
                })}
                <h2 className="font-serif text-4xl font-bold text-cafe-navy">
                  {menuCategories[activeCategory as keyof typeof menuCategories].name}
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-cafe-gold to-cafe-wine mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-8">
              {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
                <div 
                  key={index}
                  className="group relative flex justify-between items-start p-8 md:p-10 border-b-2 border-cafe-cream/50 last:border-b-0 hover:bg-gradient-to-r hover:from-cafe-cream/60 hover:via-cafe-gold/10 hover:to-cafe-wine/10 transition-all duration-500 rounded-3xl hover:shadow-xl transform hover:-translate-y-1"
                >
                  {/* Popular badge */}
                  {item.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cafe-wine to-cafe-wine/90 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span>Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-cafe-gold/20 to-cafe-wine/10 p-3 rounded-2xl group-hover:from-cafe-wine/20 group-hover:to-cafe-gold/20 transition-all duration-500 shadow-lg">
                        <Coffee className="h-6 w-6 text-cafe-navy group-hover:text-cafe-wine transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-cafe-navy mb-4 group-hover:text-cafe-wine transition-colors duration-500">
                          {item.name}
                        </h3>
                        <p className="font-sans text-gray-600 leading-relaxed text-lg md:text-xl max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-8 flex flex-col items-end space-y-3">
                    <span className="font-serif text-3xl font-bold text-cafe-wine bg-gradient-to-r from-cafe-cream/80 to-cafe-gold/20 px-6 py-3 rounded-2xl group-hover:from-cafe-gold/30 group-hover:to-cafe-wine/20 transition-all duration-500 shadow-lg border border-cafe-gold/20">
                      {item.price}
                    </span>
                    {item.popular && (
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-cafe-gold fill-current" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Special Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="text-center p-10 bg-gradient-to-br from-white via-cafe-cream/30 to-cafe-gold/10 rounded-3xl border-2 border-cafe-gold/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-cafe-gold/30 to-cafe-wine/20 p-6 rounded-3xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Clock className="h-8 w-8 text-cafe-wine" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-4">Fresh Daily</h3>
            <p className="font-sans text-cafe-navy/80 text-lg leading-relaxed">
              All our products are prepared daily with fresh, premium quality ingredients sourced from local artisans
            </p>
          </div>

          <div className="text-center p-10 bg-gradient-to-br from-white via-cafe-cream/30 to-cafe-wine/10 rounded-3xl border-2 border-cafe-wine/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="bg-gradient-to-br from-cafe-wine/30 to-cafe-gold/20 p-6 rounded-3xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Award className="h-8 w-8 text-cafe-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-4">Award Winning</h3>
            <p className="font-sans text-cafe-navy/80 text-lg leading-relaxed">
              Our master chefs have won multiple culinary awards for authentic French pastry excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;