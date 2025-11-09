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

### Backend Architecture

**Technology Stack**: Node.js, Express.js v5.1.0

The backend implements a RESTful API architecture with the following key decisions:

- **Module System**: Uses ES modules (`"type": "module"` in package.json) for modern JavaScript syntax
- **Middleware Stack**: 
  - CORS enabled for cross-origin requests
  - JSON body parser for API requests
  - Static file serving for frontend assets
- **API Endpoint**: Single `/api/send-sms` POST endpoint handles SMS sending requests
- **Credential Management**: Uses Replit's Connector API for secure, environment-based credential retrieval rather than hardcoded secrets

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

**NPM Dependencies**

- **express** (^5.1.0): Web server framework
- **cors** (^2.8.5): Cross-Origin Resource Sharing middleware
- **twilio** (^5.10.4): Official Twilio Node.js SDK

The architecture prioritizes simplicity and security, with all sensitive operations handled server-side and credentials managed through Replit's secure infrastructure rather than environment variables or configuration files.