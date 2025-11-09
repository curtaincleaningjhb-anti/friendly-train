'use client';

import { useState, useEffect } from 'react';

interface LocationSection {
  heading: string;
  content: string;
}

interface Location {
  slug: string;
  title: string;
  intro: string;
  neighborhoods: string[];
  longContent: {
    sections: LocationSection[];
  };
  seoTitle: string;
  seoDescription: string;
  published: boolean;
}

export default function LocationsEditor() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [formData, setFormData] = useState<Location | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const locationsList = [
    { slug: 'sandton', name: 'Sandton' },
    { slug: 'fourways', name: 'Fourways' },
    { slug: 'rosebank', name: 'Rosebank' },
    { slug: 'randburg', name: 'Randburg' },
  ];

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      const location = locations.find(l => l.slug === selectedLocation);
      if (location) {
        setFormData(location);
      }
    }
  }, [selectedLocation, locations]);

  const fetchLocations = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/locations');
      if (res.ok) {
        const data = await res.json();
        setLocations(data.locations || []);
      }
    } catch (error) {
      console.error('Failed to fetch locations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch('/api/admin/locations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: 'success', text: 'Location updated successfully!' });
        fetchLocations();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to update location' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  const updateNeighborhood = (index: number, value: string) => {
    if (!formData) return;
    const newNeighborhoods = [...formData.neighborhoods];
    newNeighborhoods[index] = value;
    setFormData({ ...formData, neighborhoods: newNeighborhoods });
  };

  const addNeighborhood = () => {
    if (!formData) return;
    setFormData({ ...formData, neighborhoods: [...formData.neighborhoods, ''] });
  };

  const removeNeighborhood = (index: number) => {
    if (!formData) return;
    const newNeighborhoods = formData.neighborhoods.filter((_, i) => i !== index);
    setFormData({ ...formData, neighborhoods: newNeighborhoods });
  };

  const updateSection = (index: number, field: 'heading' | 'content', value: string) => {
    if (!formData) return;
    const newSections = [...formData.longContent.sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setFormData({
      ...formData,
      longContent: { sections: newSections }
    });
  };

  const addSection = () => {
    if (!formData) return;
    setFormData({
      ...formData,
      longContent: {
        sections: [...formData.longContent.sections, { heading: '', content: '' }]
      }
    });
  };

  const removeSection = (index: number) => {
    if (!formData) return;
    const newSections = formData.longContent.sections.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      longContent: { sections: newSections }
    });
  };

  if (loading) {
    return <div className="text-center py-8">Loading locations...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Location to Edit
        </label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">-- Select a location --</option>
          {locationsList.map(location => (
            <option key={location.slug} value={location.slug}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      {formData && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Page Title (Hero Heading)
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Introduction Text
              </label>
              <textarea
                value={formData.intro || ''}
                onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm font-medium text-gray-700">Published (visible on website)</span>
              </label>
            </div>
          </div>

          {/* Neighborhoods */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Neighborhoods Served</h3>
              <button
                type="button"
                onClick={addNeighborhood}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                + Add Neighborhood
              </button>
            </div>
            
            {formData.neighborhoods.map((neighborhood, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={neighborhood}
                  onChange={(e) => updateNeighborhood(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={`Neighborhood ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeNeighborhood(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Content Sections</h3>
              <button
                type="button"
                onClick={addSection}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                + Add Section
              </button>
            </div>

            {formData.longContent.sections.map((section, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Section {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeSection(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Remove Section
                  </button>
                </div>
                
                <input
                  type="text"
                  value={section.heading}
                  onChange={(e) => updateSection(index, 'heading', e.target.value)}
                  placeholder="Section Heading"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                
                <textarea
                  value={section.content}
                  onChange={(e) => updateSection(index, 'content', e.target.value)}
                  placeholder="Section Content"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            ))}
          </div>

          {/* SEO Settings */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">SEO Settings</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Title (appears in search results)
              </label>
              <input
                type="text"
                value={formData.seoTitle || ''}
                onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                maxLength={60}
              />
              <p className="text-xs text-gray-500 mt-1">Recommended: 50-60 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Description (appears in search results)
              </label>
              <textarea
                value={formData.seoDescription || ''}
                onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                maxLength={160}
              />
              <p className="text-xs text-gray-500 mt-1">Recommended: 150-160 characters</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {saving ? 'Saving...' : 'Save Location'}
            </button>

            {message && (
              <div className={`px-4 py-2 rounded-lg ${
                message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {message.text}
              </div>
            )}
          </div>
        </form>
      )}

      {!selectedLocation && (
        <div className="text-center py-12 text-gray-500">
          Select a location from the dropdown above to start editing
        </div>
      )}
    </div>
  );
}
