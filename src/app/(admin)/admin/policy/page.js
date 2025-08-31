'use client';

import { useState } from 'react';
import AdminTable from '../../../../components/AdminTable';

// Dummy policy data
const initialPolicies = [
  { id: 1, title: 'Privacy Policy', content: 'This privacy policy describes how we collect and use your information.', type: 'Privacy', status: 'published', lastUpdated: '2024-01-15' },
  { id: 2, title: 'Terms of Service', content: 'By using our service, you agree to these terms and conditions.', type: 'Terms', status: 'published', lastUpdated: '2024-01-15' },
  { id: 3, title: 'Return Policy', content: 'We offer a 30-day return policy for all products.', type: 'Returns', status: 'published', lastUpdated: '2024-01-20' },
  { id: 4, title: 'Shipping Policy', content: 'Standard shipping takes 3-5 business days.', type: 'Shipping', status: 'draft', lastUpdated: '2024-02-01' },
  { id: 5, title: 'Cookie Policy', content: 'We use cookies to improve your browsing experience.', type: 'Privacy', status: 'published', lastUpdated: '2024-01-25' }
];

export default function AdminPolicyPage() {
  const [policies, setPolicies] = useState(initialPolicies);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPolicy, setEditingPolicy] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'General',
    status: 'published'
  });

  const handleAdd = () => {
    setEditingPolicy(null);
    setFormData({
      title: '',
      content: '',
      type: 'General',
      status: 'published'
    });
    setIsModalOpen(true);
  };

  const handleEdit = (policy) => {
    setEditingPolicy(policy);
    setFormData({
      title: policy.title,
      content: policy.content,
      type: policy.type,
      status: policy.status
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this policy?')) {
      setPolicies(policies.filter(policy => policy.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingPolicy) {
      setPolicies(policies.map(policy => 
        policy.id === editingPolicy.id 
          ? { ...policy, ...formData, lastUpdated: new Date().toISOString().split('T')[0] }
          : policy
      ));
    } else {
      const newPolicy = {
        id: Math.max(...policies.map(p => p.id)) + 1,
        ...formData,
        lastUpdated: new Date().toISOString().split('T')[0]
      };
      setPolicies([...policies, newPolicy]);
    }

    setIsModalOpen(false);
    setFormData({
      title: '',
      content: '',
      type: 'General',
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
    title: 'Policy Management',
    fields: [
      { key: 'id', label: 'ID' },
      { key: 'title', label: 'Title' },
      { key: 'type', label: 'Type' },
      { key: 'status', label: 'Status', render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'published' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
        }`}>
          {value}
        </span>
      )},
      { key: 'lastUpdated', label: 'Last Updated' }
    ]
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Policy Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your website policies and legal documents
        </p>
      </div>

      <AdminTable
        data={policies}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        addButtonText="Add Policy"
      />

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {editingPolicy ? 'Edit Policy' : 'Add New Policy'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows="8"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Enter the policy content here..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="General">General</option>
                    <option value="Privacy">Privacy</option>
                    <option value="Terms">Terms</option>
                    <option value="Returns">Returns</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Legal">Legal</option>
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
                  {editingPolicy ? 'Update' : 'Add'} Policy
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
