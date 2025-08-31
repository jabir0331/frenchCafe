import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Heart, Users, X, Sparkles } from 'lucide-react';

// Type definitions
interface CategoryDetail {
  title: string;
  emoji: string;
  image: string;
  points: string[];
  description: string;
}

interface CategoryDetails {
  music: CategoryDetail;
  sweetheart: CategoryDetail;
  proposal: CategoryDetail;
  pet: CategoryDetail;
}

type CategoryKey = keyof CategoryDetails;

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: CategoryKey | null;
}

// Detail Modal Component
const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, category }) => {
  if (!isOpen || !category) return null;

  const details: CategoryDetails = {
    'music': {
      title: 'Live French Music – "La Bonne Nuit"',
      emoji: '🎶',
      image: 'images/musicNightItem1.jpg',
      points: [
        'Every Friday Night, 6:00 PM – 10:00 PM',
        'Live French songs: classic chansons & soft jazz',
        'Cozy Parisian cafe ambiance with indoor & outdoor seating',
        'Exclusive French drinks and dessert combos available',
        'Pet-friendly area for those bringing furry companions'
      ],
      description: 'Immerse yourself in authentic French culture with our weekly live music nights featuring talented local artists performing classic French chansons and smooth jazz melodies in our intimate cafe setting.'
    },
    'sweetheart': {
      title: 'Sweetheart Saturday',
      emoji: '💕',
      image: 'images/sweetHeartSaturday.jpg',
      points: [
        'Every Saturday evening romantic transformation',
        'Sweetheart Package for Two – LKR 6,000',
        'Reserved candlelit table with rose petals',
        '2 Signature drinks plus decadent shared dessert',
        'Polaroid photo keepsake to cherish forever'
      ],
      description: 'Transform your Saturday into an unforgettable romantic experience with our exclusive couples package, featuring gourmet treats, intimate ambiance, and lasting memories in true Parisian style.'
    },
    'proposal': {
      title: '"Will You?" Proposal Package',
      emoji: '💍',
      image: 'images/marryMe.avif',
      points: [
        'Private reserved table (indoor or outdoor setting)',
        'Romantic decorations with flower bouquet included',
        'Special 2-course sharing menu designed for two',
        'Customized "Will You Marry Me?" dessert presentation',
        'Professional photo session with optional live music'
      ],
      description: 'Create the perfect moment for your life-changing question with our comprehensive proposal package, designed to make your special moment absolutely magical and unforgettable.'
    },
    'pet': {
      title: 'Pet-Friendly Outdoor Lounge',
      emoji: '🐾',
      image: 'images/petFriendlyLounge.jpg',
      points: [
        'Serene garden haven for you and your pets',
        'Pet-friendly outdoor seating with comfortable amenities',
        'Special pet treats and water bowls provided',
        'Cozy romantic setting perfect for pet lovers',
        'Safe, enclosed area where pets can relax freely'
      ],
      description: 'At Cafe Lumière, love includes our furry friends. Our "Amour des Paws" outdoor lounge provides a beautiful space where couples and their pets can enjoy quality time together in comfort.'
    }
  };

  const detail: CategoryDetail = details[category];
  if (!detail) return null;

  return (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform animate-in zoom-in-95 duration-300 border border-gray-100">
        {/* Header with Enhanced Image */}
        <div className="relative h-96 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url("${detail.image}")` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 opacity-30">
            <Sparkles className="h-8 w-8 text-white animate-pulse" />
          </div>
          
          {/* Enhanced Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 group border border-white/20"
          >
            <X className="h-6 w-6 transition-transform duration-300" />
          </button>

          {/* Enhanced Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4 animate-bounce">{detail.emoji}</div>
              <h2 className="font-serif text-4xl md:text-4xl font-bold mb-3 text-white leading-tight">
                {detail.title}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="overflow-y-auto max-h-[35vh]">
          <div className="p-8 md:p-12 bg-gradient-to-b from-white to-gray-50/50">
            {/* Description with Enhanced Typography */}
            <div className="mb-10">
              <p className="font-light text-justify text-xl text-gray-700 leading-relaxed mb-5 ">
                {detail.description}
              </p>
            </div>

            {/* Enhanced Features Section */}
            <div className="relative">
              {/* Decorative background pattern */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full opacity-30 blur-xl"></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="font-serif text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-3 rounded-xl mr-4 shadow-lg">
                    <Star className="h-7 w-7 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    What's Included
                  </span>
                </h3>
                
                <div className="grid gap-6">
                  {detail.points.map((point, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group hover:shadow-md hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 relative">
                        {/* Animated dot */}
                        <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300 shadow-lg">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-ping opacity-20"></div>
                        </div>
                      </div>
                      <p className="font-medium text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-orange-100 to-amber-100 rounded-full opacity-20 blur-2xl"></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleLearnMore = (category: CategoryKey): void => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/heroTest3.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cafe-gold/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-cafe-wine/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-10 mx-auto">
          <h1 className="font-serif text-4xl md:text-8xl font-bold mt-20 mb-5 animate-slide-up bg-gradient-to-r from-white via-cafe-cream to-white bg-clip-text text-transparent leading-tight">
            Cafe Lumière
          </h1>
          <p className="font-sans text-2xl md:text-3xl mb-4 text-cafe-cream/95 max-w-3xl mx-auto leading-relaxed font-light">
            Authentic French Cafe Experience
          </p>
          <p className="font-sans text-lg md:text-xl mb-12 text-cafe-cream/80 max-w-4xl mx-auto leading-relaxed">
            Where every cup tells a story and every moment becomes a cherished memory
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            <Link to="/menu">
              <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cafe-wine via-cafe-wine to-cafe-wine/90 hover:from-cafe-wine/90 hover:via-cafe-wine hover:to-cafe-wine text-white px-12 py-5 rounded-full font-sans font-semibold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl border-2 border-white/20 hover:border-cafe-gold/50">
                <span>Explore Our Menu</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>

            <Link to="/reservation">
              <button className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-12 py-5 rounded-full font-sans font-semibold text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-xl border-2 border-white/30 hover:border-cafe-gold/70">
                <span>Reserve Table</span>
                <Users className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </Link>

          </div>
        </div>

        {/* Scroll indicator */}
        <a href = "#features">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </a>
      </section>

      {/* Discover What Makes Us Different Section */}
      <section id="features" className="pt-32 pb-0 bg-gradient-to-br from-cafe-cream/20 via-white to-cafe-cream/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-cafe-gold/15 to-cafe-wine/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-br from-cafe-wine/10 to-cafe-gold/15 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <h2 className="font-serif text-4xl md:text-4xl font-bold text-cafe-navy mb-2 leading-tight">
              Discover What Makes Us Different
            </h2>
            <p className="font-sans text-xl md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Unforgettable experiences crafted with French elegance and modern charm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Live Music Nights */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url("images/musicNightItem1.jpg")'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 text-3xl">🎶</div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-4">Live Music Nights</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-justify mb-5">
                  Enjoy soulful French jazz and acoustic evenings, with live performers setting the perfect mood for a cozy escape filled with music, laughter, and fine coffee.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleLearnMore('music')}
                    className="group/btn inline-flex items-center space-x-2 bg-cafe-wine hover:bg-cafe-wine/90 text-white px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sweetheart Saturdays */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url("images/sweetHeartSaturday.jpg")'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 text-3xl">💕</div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-4">Sweetheart Saturdays</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-justify mb-5">
                  Celebrate love with our exclusive couple's menu, paired with a cozy candlelight setting that creates the perfect ambiance for romance and unforgettable memories.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleLearnMore('sweetheart')}
                    className="group/btn inline-flex items-center space-x-2 bg-cafe-wine hover:bg-cafe-wine/90 text-white px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Proposal Moments */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url("images/marryMe.avif")'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 text-3xl">💍</div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-4">Proposal Moments</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-justify mb-5">
                  Let us create the perfect backdrop for your special 'Yes' moment, blending Parisian elegance with intimate charm to make your proposal truly unforgettable.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleLearnMore('proposal')}
                    className="group/btn inline-flex items-center space-x-2 bg-cafe-wine hover:bg-cafe-wine/90 text-white px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pet-Friendly Lounge */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url("images/petFriendlyLounge.jpg")'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 text-3xl">🐾</div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-4">Pet-Friendly Lounge</h3>
                <p className="font-sans text-gray-600 leading-relaxed text-justify mb-5">
                  Bring along your furry friend and unwind in our charming outdoor café garden, where both you and your pet can relax, play, and enjoy the serene Parisian-inspired ambiance together.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleLearnMore('pet')}
                    className="group/btn inline-flex items-center space-x-2 bg-cafe-wine hover:bg-cafe-wine/90 text-white px-6 py-3 rounded-full font-sans font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-white via-cafe-cream/30 to-white relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-cafe-gold/20 to-cafe-wine/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cafe-wine/15 to-cafe-gold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cafe-navy/5 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-20">
            <h2 className="font-serif text-4xl md:text-4xl font-bold text-cafe-navy mb-2 leading-tight">
              Why Choose Cafe Lumière?
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-5xl leading-relaxed">
              An authentic French experience that transports you to the heart of Paris
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group relative border border-cafe-gold/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-gold/30 to-cafe-wine/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-gold/40 group-hover:via-cafe-wine/30 group-hover:to-cafe-gold/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:rotate-6 border-4 border-white/50">
                  <Star className="h-12 w-12 text-cafe-wine group-hover:text-cafe-gold transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-gold/20 to-cafe-wine/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Premium Quality</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-md">Artisanal coffees and fresh pastries prepared every morning with the traditional French techniques</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>

            <div className="text-center group relative border border-cafe-wine/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-wine/30 to-cafe-gold/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-wine/40 group-hover:via-cafe-gold/30 group-hover:to-cafe-wine/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:-rotate-6 border-4 border-white/50">
                  <Clock className="h-12 w-12 text-cafe-gold group-hover:text-cafe-wine transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-wine/20 to-cafe-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Swift Service</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-md">Efficient service without compromising quality and attention to detail that makes every visit memorable</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>

            <div className="text-center group relative border border-cafe-navy/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-cafe-cream via-cafe-gold/30 to-cafe-navy/20 p-10 rounded-3xl w-28 h-28 mx-auto flex items-center justify-center group-hover:from-cafe-navy/40 group-hover:via-cafe-wine/30 group-hover:to-cafe-gold/20 transition-all duration-700 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-125 group-hover:rotate-6 border-4 border-white/50">
                  <Heart className="h-12 w-12 text-cafe-navy group-hover:text-cafe-gold transition-colors duration-500" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cafe-navy/20 to-cafe-wine/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cafe-navy mb-6 group-hover:text-cafe-wine transition-colors duration-500">Warm Atmosphere</h3>
              <p className="font-sans text-gray-600 leading-relaxed text-md">An authentic Parisian setting perfect for all your precious moments, business meetings, and intimate gatherings</p>
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-cream/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <DetailModal
        isOpen={modalOpen}
        onClose={closeModal}
        category={selectedCategory}
      />
    </div>
  );
};

export default HomePage;