"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImagesByCategory {
  [category: string]: string[];
}

export default function AdminGalleryPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [images, setImages] = useState<ImagesByCategory>({});
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [uploading, setUploading] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/gallery');
      if (!res.ok) throw new Error('Failed to fetch images');
      const data = await res.json();
      setImages(data.allImages);
      setSelectedCategory(Object.keys(data.allImages)[0] || '');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      fetchImages();
    }
  }, [loggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '11' && password === '11') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !selectedCategory) {
      setError('Please select a file and a category.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('category', selectedCategory);
    setUploading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/gallery/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      await fetchImages(); // Refresh images after upload
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setUploading(false);
      setSelectedFile(null);
    }
  };

  const handleDelete = async (imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const res = await fetch('/api/admin/gallery/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl }),
      });
      if (!res.ok) throw new Error('Delete failed');
      await fetchImages(); // Refresh images after delete
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form onSubmit={handleLogin} className="p-8 bg-white rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gallery Management</h1>
        <button onClick={() => setLoggedIn(false)} className="bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Upload New Image</h2>
        <form onSubmit={handleUpload} className="flex flex-col sm:flex-row gap-4 items-center">
          <input type="file" onChange={handleFileChange} className="border p-2 rounded-lg" required />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2 rounded-lg" required>
            {Object.keys(images).map(cat => <option key={cat} value={cat}>{cat.replace(/-/g, ' ')}</option>)}
          </select>
          <button type="submit" disabled={uploading} className="bg-green-500 text-white px-6 py-2 rounded-lg disabled:bg-gray-400">
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Existing Images</h2>
        {loading ? <p>Loading images...</p> : (
          Object.entries(images).map(([category, urls]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-bold capitalize mb-4">{category.replace(/-/g, ' ')}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {urls.map(url => (
                  <div key={url} className="relative group">
                    <Image src={url} alt={url} width={200} height={200} className="rounded-lg object-cover w-full h-full" />
                    <button onClick={() => handleDelete(url)} className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
