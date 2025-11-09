'use client';

import { useState, useEffect } from 'react';

interface HeroData {
  title: string;
  subtitle: string;
  location: string;
  cta1Text: string;
  cta2Text: string;
}

interface TrustBadge {
  title: string;
  description: string;
}

export default function HomepageEditor() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [hero, setHero] = useState<HeroData>({
    title: '',
    subtitle: '',
    location: '',
    cta1Text: '',
    cta2Text: '',
  });

  const [trustBadges, setTrustBadges] = useState<TrustBadge[]>([
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: '' },
    { title: '', description: '' },
  ]);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/admin/homepage');
      if (res.ok) {
        const data = await res.json();
        if (data.hero) setHero(data.hero);
        if (data.trustBadges) setTrustBadges(data.trustBadges);
      }
    } catch (error) {
      console.error('Failed to fetch homepage content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch('/api/admin/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hero, trustBadges }),
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Homepage content saved successfully!' });
      } else {
        const error = await res.json();
        setMessage({ type: 'error', text: error.error || 'Failed to save content' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-gray-600">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Success/Error Message */}
      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Hero Section</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Main Title
            </label>
            <input
              type="text"
              value={hero.title}
              onChange={(e) => setHero({ ...hero, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Curtain Cleaning Johannesburg | Professional On-Site Service"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtitle
            </label>
            <input
              type="text"
              value={hero.subtitle}
              onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="We clean curtains where they hang - No takedown, No shrinkage, No hassle"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location Text
            </label>
            <input
              type="text"
              value={hero.location}
              onChange={(e) => setHero({ ...hero, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Serving Sandton, Bryanston, Fourways, Rosebank, and all Johannesburg suburbs"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Button Text
              </label>
              <input
                type="text"
                value={hero.cta1Text}
                onChange={(e) => setHero({ ...hero, cta1Text: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Call Now: +27 75 011 9200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Secondary Button Text
              </label>
              <input
                type="text"
                value={hero.cta2Text}
                onChange={(e) => setHero({ ...hero, cta2Text: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Get Free Quote"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Trust Badges (4 items)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-500 mb-2">Badge {index + 1}</p>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={badge.title}
                    onChange={(e) => {
                      const newBadges = [...trustBadges];
                      newBadges[index].title = e.target.value;
                      setTrustBadges(newBadges);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    placeholder="No Shrinkage Guarantee"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={badge.description}
                    onChange={(e) => {
                      const newBadges = [...trustBadges];
                      newBadges[index].description = e.target.value;
                      setTrustBadges(newBadges);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    rows={2}
                    placeholder="All work guaranteed against shrinkage and fabric damage"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className={`px-8 py-3 rounded-lg font-bold text-white transition-all ${
            saving
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary hover:bg-primary-dark'
          }`}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
