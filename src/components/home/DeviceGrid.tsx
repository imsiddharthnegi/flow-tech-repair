import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Device {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  guideCount: number;
  difficulty: 'easy' | 'moderate' | 'hard';
  avgTime: string;
  rating: number;
  popular: boolean;
}

const devices: Device[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'Phone',
    image: '/placeholder.svg',
    guideCount: 42,
    difficulty: 'moderate',
    avgTime: '45 min',
    rating: 4.8,
    popular: true,
  },
  {
    id: '2',
    name: 'MacBook Pro M3',
    brand: 'Apple',
    category: 'Laptop',
    image: '/placeholder.svg',
    guideCount: 28,
    difficulty: 'hard',
    avgTime: '2 hours',
    rating: 4.6,
    popular: true,
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    category: 'Phone',
    image: '/placeholder.svg',
    guideCount: 35,
    difficulty: 'moderate',
    avgTime: '50 min',
    rating: 4.7,
    popular: false,
  },
  {
    id: '4',
    name: 'iPad Pro 12.9',
    brand: 'Apple',
    category: 'Tablet',
    image: '/placeholder.svg',
    guideCount: 19,
    difficulty: 'easy',
    avgTime: '30 min',
    rating: 4.9,
    popular: false,
  },
  {
    id: '5',
    name: 'Dell XPS 13',
    brand: 'Dell',
    category: 'Laptop',
    image: '/placeholder.svg',
    guideCount: 24,
    difficulty: 'moderate',
    avgTime: '1.5 hours',
    rating: 4.5,
    popular: true,
  },
  {
    id: '6',
    name: 'Nintendo Switch',
    brand: 'Nintendo',
    category: 'Gaming',
    image: '/placeholder.svg',
    guideCount: 31,
    difficulty: 'easy',
    avgTime: '25 min',
    rating: 4.8,
    popular: false,
  },
];

export default function DeviceGrid() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'moderate': return 'difficulty-moderate';
      case 'hard': return 'difficulty-hard';
      default: return 'difficulty-moderate';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="text-gradient">Devices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our most popular devices and start your repair journey today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device) => (
            <Link
              key={device.id}
              to={`/devices/${device.id}`}
              className="group block"
            >
              <div className="glass-card hover-lift p-6 h-full">
                {/* Header with Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                      {device.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{device.brand}</p>
                  </div>
                  {device.popular && (
                    <Badge variant="secondary" className="text-xs">
                      Popular
                    </Badge>
                  )}
                </div>

                {/* Device Image */}
                <div className="aspect-video bg-surface/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Wrench className="w-4 h-4 text-muted-foreground" />
                    <span>{device.guideCount} guides</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{device.avgTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span>{device.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getDifficultyColor(device.difficulty)}`}
                    >
                      {device.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary-hover transition-smooth">
                  <span>View Guides</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass-card hover-lift">
            View All Devices
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}