'use client';

import { useState } from 'react';
import AdminTable from '../../../../components/AdminTable';

// Dummy FAQ data
const initialFaqs = [
  { id: 1, question: 'What is your return policy?', answer: 'We offer a 30-day return policy for all products.', category: 'Returns', status: 'published' },
  { id: 2, question: 'How long does shipping take?', answer: 'Standard shipping takes 3-5 business days.', category: 'Shipping', status: 'published' },
  { id: 3, question: 'Do you ship internationally?', answer: 'Yes, we ship to most countries worldwide.', category: 'Shipping', status: 'draft' },
  { id: 4, question: 'What payment methods do you accept?', answer: 'We accept all major credit cards and PayPal.', category: 'Payment', status: 'published' },
  { id: 5, question: 'How can I track my order?', answer: 'You will receive a tracking number via email once your order ships.', category: 'Orders', status: 'published' }
];

export default function AdminFaqPage() {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: 'General',
    status: 'published'
  });

  const handleAdd = () => {
    setEditingFaq(null);
    setFormData({
      question: '',
      answer: '',
      category: 'General',
      status: 'published'
    });
    setIsModalOpen(true);
  };

  const handleEdit = (faq) => {
    setEditingFaq(faq);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      status: faq.status
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      setFaqs(faqs.filter(faq => faq.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingFaq) {
      setFaqs(faqs.map(faq => 
        faq.id === editingFaq.id 
          ? { ...faq, ...formData }
          : faq
      ));
    } else {
      const newFaq = {
        id: Math.max(...faqs.map(f => f.id)) + 1,
        ...formData
      };
      setFaqs([...faqs, newFaq]);
    }

    setIsModalOpen(false);
    setFormData({
      question: '',
      answer: '',
      category: 'General',
      status: 'published'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const columns = {
    title: 'FAQ Management',
    fields: [
      { key: 'id', label: 'ID' },
      { key: 'question', label: 'Question' },
      { key: 'category', label: 'Category' },
      { key: 'status', label: 'Status', render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'published' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
        }`}>
          {value}
        </span>
      )}
    ]
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          FAQ Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage frequently asked questions
        </p>
      </div>

      <AdminTable
        data={faqs}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        addButtonText="Add FAQ"
      />

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl mx-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Question
                </label>
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Answer
                </label>
                <textarea
                  name="answer"
                  value={formData.answer}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="General">General</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Returns">Returns</option>
                    <option value="Payment">Payment</option>
                    <option value="Orders">Orders</option>
                    <option value="Products">Products</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {editingFaq ? 'Update' : 'Add'} FAQ
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
