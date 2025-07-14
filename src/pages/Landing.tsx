
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Users, MapPin, Bell, Heart, Lock } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Emergency SOS",
      description: "One-click emergency alert with location sharing"
    },
    {
      icon: Users,
      title: "Trusted Contacts",
      description: "Manage your emergency contact list easily"
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "Share your real-time location with loved ones"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Intelligent notifications for your safety"
    },
    {
      icon: Heart,
      title: "Safety Tips",
      description: "Expert advice and safety guidelines"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your data is encrypted and protected"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-purple-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              🛡️ Women Safety
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Your safety is our priority. Stay connected, stay protected with our comprehensive safety platform designed specifically for women.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                onClick={() => navigate('/register')}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Free
              </Button>
              <Button
                onClick={() => navigate('/login')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Safety Features
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to stay safe and connected, all in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Take Control of Your Safety?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of women who trust our platform for their safety and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/register')}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Safety Journey
              </Button>
              <Button
                onClick={() => navigate('/dashboard')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
