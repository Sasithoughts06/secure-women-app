
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Shield, Users, MapPin, Lightbulb } from 'lucide-react';

const Dashboard = () => {
  const [contacts, setContacts] = useState<string[]>([]);
  const [contactInput, setContactInput] = useState('');
  const [location, setLocation] = useState<string>('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const savedContacts = localStorage.getItem('trustedContacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    toast({
      title: "Logged Out",
      description: "You have been safely logged out",
    });
    navigate('/');
  };

  const handleSOS = () => {
    setIsGettingLocation(true);
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationText = `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`;
          setLocation(locationText);
          
          toast({
            title: "🚨 Emergency Alert Sent!",
            description: "Location shared with trusted contacts",
          });
          
          setIsGettingLocation(false);
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to get your location",
            variant: "destructive",
          });
          setIsGettingLocation(false);
        }
      );
    }
  };

  const addContact = () => {
    if (contactInput.trim() && !contacts.includes(contactInput.trim())) {
      const newContacts = [...contacts, contactInput.trim()];
      setContacts(newContacts);
      localStorage.setItem('trustedContacts', JSON.stringify(newContacts));
      setContactInput('');
      
      toast({
        title: "Contact Added",
        description: "Trusted contact has been saved",
      });
    }
  };

  const removeContact = (index: number) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
    localStorage.setItem('trustedContacts', JSON.stringify(newContacts));
    
    toast({
      title: "Contact Removed",
      description: "Contact has been removed from your list",
    });
  };

  const safetyTips = [
    "Trust your instincts - if something feels wrong, it probably is",
    "Stay aware of your surroundings and avoid distractions",
    "Share your location with trusted friends and family",
    "Keep emergency contacts easily accessible",
    "Learn basic self-defense techniques",
    "Avoid isolated areas, especially at night",
    "Keep your home and vehicle doors locked"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-purple-700">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-white" />
              <h1 className="text-2xl font-bold text-white">Women Safety Dashboard</h1>
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-white hover:bg-white/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency SOS Section */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-100 rounded-full">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Emergency SOS</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Click the button below in case of emergency to get your current location and alert your trusted contacts.
            </p>
            
            <Button
              onClick={handleSOS}
              disabled={isGettingLocation}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isGettingLocation ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Getting Location...</span>
                </div>
              ) : (
                '🚨 EMERGENCY SOS'
              )}
            </Button>
            
            {location && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500 animate-slide-in-right">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-red-800">Your Current Location:</h3>
                </div>
                <p className="text-red-700 mt-1">{location}</p>
                <p className="text-sm text-red-600 mt-2">
                  Share this location with your trusted contacts immediately.
                </p>
              </div>
            )}
          </div>

          {/* Trusted Contacts Section */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Trusted Contacts</h2>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <Input
                type="tel"
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                placeholder="Enter phone number"
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && addContact()}
              />
              <Button
                onClick={addContact}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                Add
              </Button>
            </div>
            
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {contacts.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No contacts added yet</p>
              ) : (
                contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-blue-50 rounded-lg animate-slide-in-right"
                  >
                    <span className="text-gray-700">📱 {contact}</span>
                    <Button
                      onClick={() => removeContact(index)}
                      variant="destructive"
                      size="sm"
                    >
                      Remove
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Safety Tips Section */}
        <div className="mt-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl animate-fade-in">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-yellow-100 rounded-full">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Safety Tips for Women</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyTips.map((tip, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500 transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
