import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

export default function AdminPackages() {
  const [formData, setFormData] = useState({
    name: '',
    diamonds: '',
    price: '',
    currency: 'USD',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/packages`, {
        ...formData,
        diamonds: parseInt(formData.diamonds),
        price: parseFloat(formData.price),
      });
      setMessage('✅ Package uploaded successfully!');
      setFormData({ name: '', diamonds: '', price: '', currency: 'USD', description: '' });
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('❌ Failed to upload package');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Upload Packages - Admin</title>
      </Head>
      <main className='min-h-screen bg-gray-900'>
        <div className='container mx-auto px-4 py-12'>
          <h1 className='text-4xl font-bold text-white mb-8'>💎 Upload Diamond Package</h1>

          <div className='max-w-2xl mx-auto bg-gray-800 rounded-lg p-8'>
            {message && (
              <div className={`mb-6 p-4 rounded ${message.includes('✅') ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Package Name */}
              <div>
                <label className='block text-white font-bold mb-2'>Package Name *</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='e.g., Starter Pack'
                  required
                  className='w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              {/* Diamonds */}
              <div>
                <label className='block text-white font-bold mb-2'>Diamonds Amount *</label>
                <input
                  type='number'
                  name='diamonds'
                  value={formData.diamonds}
                  onChange={handleChange}
                  placeholder='e.g., 500'
                  required
                  className='w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              {/* Price */}
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-white font-bold mb-2'>Price *</label>
                  <input
                    type='number'
                    name='price'
                    value={formData.price}
                    onChange={handleChange}
                    placeholder='e.g., 4.99'
                    step='0.01'
                    required
                    className='w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
                <div>
                  <label className='block text-white font-bold mb-2'>Currency</label>
                  <select
                    name='currency'
                    value={formData.currency}
                    onChange={handleChange}
                    className='w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>INR</option>
                    <option>PHP</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className='block text-white font-bold mb-2'>Description</label>
                <textarea
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  placeholder='e.g., Perfect for beginners'
                  rows={4}
                  className='w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={loading}
                className='w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition'
              >
                {loading ? '⏳ Uploading...' : '✅ Upload Package'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
