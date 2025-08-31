import React, { useState } from 'react';
import { Coffee, Croissant, Utensils, Clock, Star, Sandwich, UtensilsCrossed } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuCategories = {
    coffee: {
      name: 'Coffee',
      icon: Coffee,
      items: [
        { name: 'Classic Espresso', description: 'Intense and full-bodied black coffee with rich crema', price: 'LKR 400', popular: true, image: '/images/menu/coffee/classicEspresso.jpg' },
        { name: 'Cappuccino', description: 'Perfect balance of espresso, hot milk and velvety foam', price: 'LKR 600', popular: true, image: '/images/menu/coffee/cappuccino.jpg' },
        { name: 'Hazelnut Coffee', description: 'Espresso with just a touch of warm milk', price: 'LKR 500', popular: false, image: '/images/menu/coffee/hazelnutCoffee.jpg' },
        { name: 'Cream Coffee', description: 'Long coffee with fresh cream and delicate foam', price: 'LKR 650', popular: false, image: '/images/menu/coffee/creamCoffee.jpg' },
        { name: 'French Press', description: 'Full-bodied coffee brewed to perfection', price: 'LKR 550', popular: false, image: '/images/menu/coffee/frenchPress.jpg' },
      ]
    },
    pastries: {
      name: 'Pastries',
      icon: Croissant,
      items: [
        { name: 'Butter Croissant', description: 'Traditional buttery croissant, flaky and golden', price: 'LKR 450', popular: true, image: '/images/menu/pastries/butterCroissant.jpg' },
        { name: 'Chocolate Pastry', description: 'Pastry with premium dark chocolate', price: 'LKR 500', popular: true, image: '/images/menu/pastries/chocolatePastry.jpg' },
        { name: 'Coffee Eclair Pastry', description: 'Choux pastry filled with rich coffee cream', price: 'LKR 650', popular: false, image: '/images/menu/pastries/coffeeEclairPastry.jpg' },
        { name: 'Apple Tart', description: 'Caramelized apple tart with cinnamon', price: 'LKR 750', popular: true, image: '/images/menu/pastries/appleTart.jpg' },
        { name: 'Almond Croissant', description: 'Croissant filled with sweet almond cream', price: 'LKR 550', popular: false, image: '/images/menu/pastries/almondCroissant.jpg' },
      ]
    },
    breakfast: {
      name: 'Breakfast',
      icon: Sandwich,
      items: [
        { name: 'Avocado Toast', description: 'Grilled artisan bread, avocado, tomato, poached egg', price: 'LKR 1,200', popular: true, image: '/images/menu/breakfast/avocadoToast.jpg' },
        { name: 'French Omelette', description: 'Herb omelette with fresh green salad and toast', price: 'LKR 950', popular: false, image: '/images/menu/breakfast/frenchOmelette.jpg' },
        { name: 'Toasted Beef & Cheese Sandwich', description: 'Beef, Gruyère cheese, béchamel, brioche bread', price: 'LKR 1,300', popular: true, image: '/images/menu/breakfast/toastedBeefCheeseSandwich.jpg' },
        { name: 'Granola Bowl', description: 'House-made granola, fresh fruits, Greek yogurt', price: 'LKR 850', popular: false, image: '/images/menu/breakfast/granolaBowl.jpg' },
        { name: 'French Toast', description: 'Brioche French toast with berry compote', price: 'LKR 950', popular: false, image: '/images/menu/breakfast/frenchToast.jpg' },
      ]
    },
    lunch: {
      name: 'Lunch',
      icon: Utensils,
      items: [
        { name: 'Parisian Salad', description: 'Mixed greens, warm goat cheese, walnuts, vinaigrette', price: 'LKR 1,400', popular: false, image: '/images/menu/lunch/parisianSalad.jpg' },
        { name: 'Lorraine Quiche', description: 'Traditional quiche with bacon and Gruyère cheese', price: 'LKR 1,350', popular: true, image: '/images/menu/lunch/lorraineQuiche.jpg' },
        { name: 'French Onion Soup', description: 'Cheese-gratinated soup with croutons', price: 'LKR 1,200', popular: false, image: '/images/menu/lunch/frenchOnionSoup.jpg' },
        { name: "Ratatouille", description: 'Slow-cooked vegetables in a tomato and herb sauce, served warm', price: 'LKR 1,500', popular: true, image: '/images/menu/lunch/ratatouille.jpg' },
        { name: 'Salmon en Papillote', description: 'Salmon baked in parchment paper with vegetables and herbs', price: 'LKR 1,600', popular: false, image: '/images/menu/lunch/salmonEnPapillote.jpg' },
      ]
    },
    dinner: {
      name: 'Dinner',
      icon: UtensilsCrossed, // you may want to use a different icon here (like a Wine icon 🍷)
      items: [
        {
          name: 'Coq au Vin',
          description: 'Classic French chicken braised in red wine with mushrooms, onions, and herbs',
          price: 'LKR 1,800',
          popular: true,
          image: '/images/menu/dinner/coqAuVin.jpg'
        },
        {
          name: 'Boeuf Bourguignon',
          description: 'Slow-cooked beef stew in red wine sauce with root vegetables, rich and hearty',
          price: 'LKR 2,400',
          popular: true,
          image: '/images/menu/dinner/boeufBourguignon.jpg'
        },
        {
          name: 'Duck Confit',
          description: 'Crispy duck leg confit served with roasted potatoes and seasonal greens',
          price: 'LKR 2,200',
          popular: false,
          image: '/images/menu/dinner/duckConfit.jpg'
        },
        {
          name: 'Steak Frites',
          description: 'Grilled beef steak with golden French fries and house-made herb butter',
          price: 'LKR 2,500',
          popular: true,
          image: '/images/menu/dinner/steakFrites.jpg'
        },
        {
          name: 'Cassoulet',
          description: 'Slow-cooked casserole of white beans, and duck - a French countryside classic',
          price: 'LKR 2,200',
          popular: false,
          image: '/images/menu/dinner/cassoulet.jpg'
        },
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
        <div className="text-left mt-10 mb-10">

          <h1 className="font-serif md:text-4xl font-bold text-cafe-navy mb-2 relative leading-tight">
            Our Exquisite Menu
          </h1>
          <p className="font-sans text-xl text-gray-600 max-w-5xl leading-relaxed font-light">
            Discover our French specialties bringing authentic Parisian flavors to every bite and sip
          </p>
        </div>

        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-6">
          {Object.entries(menuCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`group relative px-14 py-5 rounded-2xl font-sans font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 ${activeCategory === key
                  ? 'bg-gradient-to-r from-cafe-wine via-cafe-wine to-cafe-wine/90 text-white shadow-2xl border-cafe-wine/50 scale-105'
                  : 'bg-white text-cafe-navy hover:bg-gradient-to-r hover:from-cafe-gold/20 hover:to-cafe-wine/10 hover:text-cafe-wine border-cafe-cream hover:border-cafe-gold/50'
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className={`h-6 w-6 transition-colors duration-300 ${activeCategory === key ? 'text-cafe-gold' : 'text-cafe-navy group-hover:text-cafe-wine'
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
        <div className="bg-gradient-to-br from-white via-white to-cafe-cream/20 rounded-3xl shadow-3xl p-10 md:p-10 border-3 border-cafe-cream/50 backdrop-blur-sm relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-cafe-gold rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-cafe-wine rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-5">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-cafe-navy/10 to-cafe-wine/10 px-8 py-4 rounded-2xl border border-cafe-gold/30 mb-6">
                {React.createElement(menuCategories[activeCategory as keyof typeof menuCategories].icon, {
                  className: "h-8 w-8 text-cafe-wine"
                })}
                <h2 className="font-serif text-3xl font-bold text-cafe-navy">
                  {menuCategories[activeCategory as keyof typeof menuCategories].name}
                </h2>
              </div>

            </div>

            <div className="grid gap-8">
              {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex justify-between items-start p-8 md:p-10 border-2 border-cafe-cream/50 hover:bg-gradient-to-r hover:from-cafe-cream/50 hover:via-cafe-gold/10 hover:to-cafe-wine/10 transition-all duration-500 rounded-3xl hover:shadow-xl transform hover:-translate-y-1"
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

                  <div className="flex-1 items-center">
                    <div className="flex items-start space-x-4">
                      <div className="transition-all duration-500 shadow-lg rounded-2xl">
                        {/* <Coffee className="h-10 w-10 text-cafe-navy group-hover:text-cafe-wine transition-colors duration-300" /> */}
                        <img src={item.image} className="h-20 w-20 rounded-2xl" />
                      </div>
                      <div>
                        <h3 className="font-serif md:text-xl font-bold text-cafe-navy mb-3 group-hover:text-cafe-wine transition-colors duration-500">
                          {item.name}
                        </h3>
                        <p className="font-sans text-gray-600 leading-relaxed text-md md:text-md max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-8 flex flex-col items-end space-y-3">
                    <span className="font-sans text-2xl font-bold text-cafe-wine bg-gradient-to-r from-cafe-cream/80 to-cafe-gold/20 px-6 py-3 rounded-2xl group-hover:from-cafe-gold/30 group-hover:to-cafe-wine/20 transition-all duration-500 shadow-lg border border-cafe-gold/20">
                      {item.price}
                    </span>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MenuPage;