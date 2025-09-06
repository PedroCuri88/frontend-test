# Binance-websocket-pricing-update

## Overview

This is a full-stack web application built with React and Express.js that appears to be a cryptocurrency trading dashboard or market data viewer. The application implements a modern monorepo structure with shared TypeScript types and a comprehensive UI component system. The frontend displays real-time cryptocurrency market data, likely sourced from Binance WebSocket streams, with features for viewing price changes, trading volumes, and market statistics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Components**: Comprehensive design system built on Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Context API for global state, TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Real-time Data**: WebSocket integration for live cryptocurrency market data from Binance API

### Backend Architecture  

- **Framework**: Express.js with TypeScript in ESM module format
- **Development**: Hot reload using tsx for TypeScript execution
- **Storage Interface**: Abstracted storage layer with in-memory implementation and planned database integration
- **API Design**: RESTful API structure with `/api` prefix for all backend routes
- **Build System**: esbuild for production bundling with Node.js platform targeting

### Data Storage

- **Database**: PostgreSQL configured via Drizzle ORM with type-safe schema definitions
- **Schema Management**: Drizzle Kit for migrations and database schema versioning
- **Connection**: Neon Database serverless PostgreSQL integration
- **Session Storage**: PostgreSQL-backed session storage using connect-pg-simple

### Development Workflow

- **Monorepo Structure**: Shared types and schemas between client and server in `/shared` directory
- **Hot Reload**: Vite dev server with React Fast Refresh and backend auto-restart
- **Type Safety**: Strict TypeScript configuration with path mapping for clean imports
- **Error Handling**: Runtime error overlay in development with structured error boundaries

### Component Architecture

- **Design System**: Complete UI component library with consistent theming and accessibility
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints and custom hooks for device detection

## External Dependencies

### Database Services

- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database operations with automatic TypeScript inference

### UI and Design

- **Radix UI**: Headless component primitives for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Consistent icon library with tree-shaking support

### Development Tools

- **Replit Integration**: Custom Vite plugins for Replit development environment
- **TanStack React Query**: Server state management with caching and background updates
- **React Hook Form**: Performance-optimized form handling with minimal re-renders

### External APIs

- **Binance WebSocket API**: Real-time cryptocurrency market data streams
- **Binance REST API**: Exchange information and historical market data
