# SMS Sender Application

## Overview

This is a web-based SMS sending application that allows users to send text messages through a simple interface. The application uses Twilio's API to deliver SMS messages to phone numbers worldwide. It features a clean, gradient-styled UI with real-time character counting and form validation. The backend is built with Express.js and integrates with Replit's Connector system for secure credential management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: Vanilla JavaScript, HTML5, CSS3

The frontend uses a simple, single-page application approach with no frameworks. Key design decisions include:

- **Form Validation**: Client-side validation ensures phone numbers include country codes (must start with '+') and both fields are filled before submission
- **User Feedback**: Real-time character counter (160 character limit typical for SMS) with color-coded warnings when exceeding the limit
- **Status Updates**: Dynamic status messaging system to inform users of sending progress, success, or errors
- **Responsive Design**: CSS with gradient background and centered card layout for modern, mobile-friendly UI

The form submission is handled asynchronously using the Fetch API to communicate with the backend without page reloads.

**Message History Feature**: The application includes a message history view that displays previously sent SMS messages:

- **Security**: All user-supplied content is sanitized using HTML escaping before rendering to prevent XSS attacks
- **Real-time Updates**: History refreshes automatically after sending new messages
- **Display Format**: Shows phone number, message content, timestamp, and delivery status for each message
- **Empty State**: Displays a friendly message when no messages have been sent yet

### Backend Architecture

**Technology Stack**: Node.js, Express.js v5.1.0

The backend implements a RESTful API architecture with the following key decisions:

- **Module System**: Uses ES modules (`"type": "module"` in package.json) for modern JavaScript syntax
- **Middleware Stack**: 
  - CORS enabled for cross-origin requests
  - JSON body parser for API requests
  - Static file serving for frontend assets
- **API Endpoints**: 
  - POST `/api/send-sms`: Handles SMS sending requests and saves to database
  - GET `/api/messages`: Retrieves message history from database (limited to 50 most recent)
- **Credential Management**: Uses Replit's Connector API for secure, environment-based credential retrieval rather than hardcoded secrets
- **Database Integration**: PostgreSQL database stores all sent messages with automatic schema initialization on server startup

**Authentication Pattern**: The application authenticates with Replit's Connector service using environment-based tokens (`REPL_IDENTITY` or `WEB_REPL_RENEWAL`) to fetch Twilio credentials dynamically. This provides:
- Security: No credentials stored in code
- Flexibility: Easy credential rotation without code changes
- Replit Integration: Seamless use of Replit's managed connection system

### External Dependencies

**Twilio SMS Service**

The application integrates with Twilio as its SMS delivery provider:

- **SDK Version**: twilio ^5.10.4
- **Credentials Required**:
  - Account SID
  - Auth Token or API Key Secret
  - API Key (optional)
  - Phone Number (sender number)
- **Connection Method**: Credentials are fetched from Replit's Connector API at runtime via HTTPS request to `REPLIT_CONNECTORS_HOSTNAME`

**Replit Connectors Integration**

The application uses Replit's Connector system for third-party service management:

- **API Endpoint**: `https://{hostname}/api/v2/connection` with query parameter `connector_names=twilio`
- **Authentication**: X_REPLIT_TOKEN header using either deployment or repl identity tokens
- **Secrets Handling**: Requests include `include_secrets=true` to retrieve sensitive credentials
- **Error Handling**: Validates connector availability and throws clear errors if Twilio is not connected

**PostgreSQL Database**

The application uses Replit's managed PostgreSQL database for persistence:

- **Schema**: Simple `sms_messages` table with columns: id, phone_number, message, status, message_sid, created_at
- **Initialization**: Database schema is automatically created on server startup using `CREATE TABLE IF NOT EXISTS`
- **Connection**: Uses the `pg` library with connection string from `DATABASE_URL` environment variable
- **Security**: All user-supplied content is sanitized before rendering to prevent XSS attacks
- **Query Limit**: Message history endpoint returns maximum of 50 most recent messages

**NPM Dependencies**

- **express** (^5.1.0): Web server framework
- **cors** (^2.8.5): Cross-Origin Resource Sharing middleware
- **twilio** (^5.10.4): Official Twilio Node.js SDK
- **pg** (^8.13.1): PostgreSQL client for Node.js

The architecture prioritizes simplicity and security, with all sensitive operations handled server-side and credentials managed through Replit's secure infrastructure rather than environment variables or configuration files.