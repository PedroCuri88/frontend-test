<<<<<<< HEAD
# Process

Fork the repository into your account. Once your code is ready open a pull-request on this repository and we will review it.

# Introduction

The aim of the test is to develop a mini-application for managing a Binance websocket pricing update.

1. The appliction should consume this endpoint `GET` https://api.binance.com/api/v3/exchangeInfo and list it. 
2. Users should be able create a list of symbols.
3. Users should be able to add symbols to a list for watching the last price updates, best bid price, best ask price and price change percent.
   1. For that, the application should connect to a websocket using the symbols previously selected by the user.
   2. The update should occur in almost near real time.
   3. Use the following url for connection to the websocket. wss://data-stream.binance.com/stream?streams={symbol}/{symbol}
      1. Example: wss://data-stream.binance.com/stream?streams=ethbtc/bnbbtc

Websocket sample response:
```
{
  "e": "24hrTicker",  // Event type
  "E": 123456789,     // Event time
  "s": "BNBBTC",      // Symbol
  "p": "0.0015",      // Price change
  "P": "250.00",      // Price change percent
  "w": "0.0018",      // Weighted average price
  "x": "0.0009",      // First trade(F)-1 price (first trade before the 24hr rolling window)
  "c": "0.0025",      // Last price
  "Q": "10",          // Last quantity
  "b": "0.0024",      // Best bid price
  "B": "10",          // Best bid quantity
  "a": "0.0026",      // Best ask price
  "A": "100",         // Best ask quantity
  "o": "0.0010",      // Open price
  "h": "0.0025",      // High price
  "l": "0.0010",      // Low price
  "v": "10000",       // Total traded base asset volume
  "q": "18",          // Total traded quote asset volume
  "O": 0,             // Statistics open time
  "C": 86400000,      // Statistics close time
  "F": 0,             // First trade ID
  "L": 18150,         // Last trade Id
  "n": 18151          // Total number of trades
}
````

# Technical Requirements

- React 14+
- Use context for data flow
- Must be responsive
- Typescript
- Usage of functional components

# Bonus
- unit-tests for the UI
- integration-test (one (or more) just in order to show that you know what is it (: )

# Docs
  
Binance documentation:
- https://binance-docs.github.io/apidocs/spot/en/#introduction

UI Sample to use as a guide:
![Screenshot 2023-03-15 at 10 51 49](https://user-images.githubusercontent.com/20883536/225329370-30ff8f83-7493-4b91-9ae1-561b6fe6bda3.png)
=======
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
>>>>>>> my-project/main
