'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin/products', label: 'Products', icon: '📦' },
    { href: '/admin/users', label: 'Users', icon: '👥' },
    { href: '/admin/faq', label: 'FAQ', icon: '❓' },
    { href: '/admin/policy', label: 'Policy', icon: '📋' },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
          Admin Panel
        </h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
