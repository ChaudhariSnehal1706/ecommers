# MyStore - E-Commerce Platform

A modern, full-featured e-commerce platform built with Next.js 15, Redux Toolkit, NextAuth, and Tailwind CSS.

## Features

### 🔹 Redux Toolkit Setup
- **Cart Management**: Add, remove, update quantity, clear cart
- **Theme Management**: Dark/light mode toggle with localStorage persistence
- **Products Management**: Static mock products with filtering capabilities

### 🔹 NextAuth Authentication
- **Credentials Provider**: Username + password authentication
- **Admin Access**: Role-based access control for admin routes
- **Protected Routes**: Middleware protection for `/admin/*` routes

### 🔹 User Panel
- **Home Page**: Hero banner + featured products
- **About Page**: Company information and story
- **Products Page**: Product listing with advanced filters
- **Product Detail**: Individual product view with add to cart
- **Cart Page**: Shopping cart management
- **Checkout Page**: Complete checkout process

### 🔹 Admin Panel (Protected)
- **Products Management**: CRUD operations for products
- **Users Management**: CRUD operations for user accounts
- **FAQ Management**: Manage frequently asked questions
- **Policy Management**: Manage website policies and legal documents

### 🔹 Dark/Light Mode
- **Theme Toggle**: Available in both user and admin panels
- **Persistent Storage**: Theme preference saved in localStorage
- **Dynamic Styling**: Tailwind classes update based on Redux state

## Demo Credentials

**Admin Login:**
- Username: `admin`
- Password: `admin123`

## Tech Stack

- **Frontend**: Next.js 15, React 19
- **State Management**: Redux Toolkit
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash (placeholder images)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-ecommers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (admin)/          # Admin panel routes
│   │   └── admin/        # Protected admin pages
│   ├── (user)/           # User panel routes
│   ├── api/              # API routes
│   │   └── auth/         # NextAuth API
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout with providers
│   └── providers.js      # Redux + NextAuth providers
├── components/            # Reusable components
│   ├── AdminTable.js     # Admin CRUD table component
│   ├── FilterSidebar.js  # Product filtering sidebar
│   ├── Footer.js         # Site footer
│   ├── Navbar.js         # Navigation bar
│   ├── ProductCard.js    # Product display card
│   ├── Sidebar.js        # Admin panel sidebar
│   └── Topbar.js         # Admin panel top bar
├── lib/                   # Utility libraries
│   └── auth.js           # NextAuth configuration
├── middleware.js          # Route protection middleware
└── store/                 # Redux store
    ├── hooks.js           # Redux hooks
    ├── store.js           # Store configuration
    └── slices/            # Redux slices
        ├── cartSlice.js   # Shopping cart state
        ├── productsSlice.js # Products state
        └── themeSlice.js  # Theme state
```

## Key Components

### Redux Store
- **cartSlice**: Manages shopping cart state and operations
- **themeSlice**: Handles dark/light mode with localStorage persistence
- **productsSlice**: Manages product data and filtering

### Authentication
- **NextAuth**: Credentials provider with role-based access
- **Middleware**: Protects admin routes from unauthorized access
- **Session Management**: JWT-based authentication

### UI Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Complete dark/light theme support
- **Accessibility**: Semantic HTML and ARIA labels

## Features in Detail

### Shopping Cart
- Add/remove products
- Quantity management
- Total calculation
- Persistent state (Redux)

### Product Management
- Advanced filtering (category, brand, price, rating)
- Search functionality
- Responsive grid layout
- Product cards with images

### Admin Panel
- Protected routes with authentication
- CRUD operations for all entities
- Responsive tables with pagination
- Modal forms for data entry

### Theme System
- Dark/light mode toggle
- localStorage persistence
- Dynamic Tailwind class updates
- Consistent theming across components

## Customization

### Adding New Products
Edit `src/store/slices/productsSlice.js` to add more mock products or connect to a real API.

### Modifying Themes
Update `src/store/slices/themeSlice.js` to add more theme options or modify existing ones.

### Extending Admin Features
Add new admin pages in `src/app/(admin)/admin/` following the existing pattern.

## Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Environment Variables
Create a `.env.local` file for production:
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://yourdomain.com
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.

---

**Note**: This is a demo application with mock data. For production use, replace mock data with real API endpoints and implement proper security measures.
