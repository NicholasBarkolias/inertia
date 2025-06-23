# Jewelry Industry Todo & Booking System Plan

## Project Overview
A comprehensive todo and booking management system designed for jewelry businesses. Features include appointment scheduling with calendar integration, photo upload capabilities for jewelry pieces, and task management workflows.

## Core Features

### 1. Booking System
- **Calendar Integration**: Interactive calendar for appointment scheduling
- **Time Slot Management**: Configurable availability slots
- **Client Information**: Customer details and contact information
- **Service Types**: Different appointment types (consultation, repair, custom design, etc.)
- **Booking Status**: Pending, confirmed, completed, cancelled states

### 2. Photo Management
- **Image Upload**: Camera/file upload for jewelry pieces
- **Image Storage**: Secure file storage with thumbnails
- **Gallery View**: Grid display of uploaded jewelry photos
- **Image Association**: Link photos to specific bookings/tasks

### 3. Todo/Task Management
- **Task Creation**: Create tasks with descriptions, priorities, due dates
- **Task Categories**: Repair, design, appraisal, cleaning, etc.
- **Status Tracking**: Todo, in-progress, completed, on-hold
- **Client Association**: Link tasks to specific customers

### 4. Client Management
- **Customer Profiles**: Contact details, preferences, history
- **Booking History**: Past appointments and services
- **Photo Gallery**: Customer's jewelry collection photos
- **Notes**: Service notes and customer preferences

## Technical Implementation Plan

### Phase 1: Database Schema & Core Models
- [ ] Create Ecto schemas for:
  - `Clients` (name, email, phone, address, notes)
  - `Bookings` (client_id, datetime, service_type, status, notes)
  - `Tasks` (title, description, category, priority, status, due_date, client_id)
  - `Photos` (filename, path, description, booking_id, task_id, client_id)
  - `Services` (name, duration, description, price)

### Phase 2: Backend API & Business Logic
- [ ] Phoenix controllers for CRUD operations
- [ ] File upload handling with image processing
- [ ] Calendar availability logic
- [ ] Booking validation and scheduling
- [ ] Task management workflows

### Phase 3: Frontend Components
- [ ] Calendar component with booking interface
- [ ] Photo upload with preview functionality
- [ ] Task management dashboard
- [ ] Client profile pages
- [ ] Booking forms and management

### Phase 4: Advanced Features
- [ ] Email notifications for bookings
- [ ] Photo gallery with lightbox
- [ ] Search and filtering
- [ ] Reporting and analytics
- [ ] Mobile responsiveness

## Database Schema

```elixir
# Clients
- id (primary key)
- name (string)
- email (string)
- phone (string)
- address (text)
- notes (text)
- inserted_at, updated_at

# Services
- id (primary key)
- name (string)
- description (text)
- duration (integer, minutes)
- price (decimal)
- active (boolean)

# Bookings
- id (primary key)
- client_id (foreign key)
- service_id (foreign key)
- scheduled_at (datetime)
- status (enum: pending, confirmed, completed, cancelled)
- notes (text)
- inserted_at, updated_at

# Tasks
- id (primary key)
- client_id (foreign key, nullable)
- title (string)
- description (text)
- category (enum: repair, design, appraisal, cleaning, other)
- priority (enum: low, medium, high, urgent)
- status (enum: todo, in_progress, completed, on_hold)
- due_date (date, nullable)
- inserted_at, updated_at

# Photos
- id (primary key)
- filename (string)
- original_filename (string)
- content_type (string)
- file_size (integer)
- description (text, nullable)
- client_id (foreign key, nullable)
- booking_id (foreign key, nullable)
- task_id (foreign key, nullable)
- inserted_at, updated_at
```

## UI/UX Design Considerations

### Dashboard Layout
- **Sidebar Navigation**: Bookings, Tasks, Clients, Calendar
- **Main Content Area**: Context-specific views
- **Quick Actions**: New booking, new task, upload photo

### Calendar View
- **Month/Week/Day Views**: Multiple calendar perspectives
- **Booking Slots**: Visual time slot indicators
- **Drag & Drop**: Reschedule appointments
- **Status Colors**: Color-coded booking statuses

### Photo Management
- **Grid Layout**: Thumbnail gallery view
- **Upload Zone**: Drag-and-drop file upload
- **Image Preview**: Lightbox for full-size viewing
- **Metadata**: Capture photo details and descriptions

## File Upload Implementation

### Frontend (React)
```javascript
// Photo upload component with preview
- File input with drag-and-drop
- Image preview before upload
- Progress indicator
- Multiple file selection
- Image compression/resizing
```

### Backend (Phoenix)
```elixir
# File upload handling
- Image validation (type, size)
- Secure file storage
- Thumbnail generation
- Database record creation
- Association with bookings/tasks
```

## Development Workflow

### Step 1: Foundation
1. Generate Ecto migrations for all schemas
2. Create Phoenix contexts (Bookings, Tasks, Clients, Photos)
3. Set up file upload configuration

### Step 2: Core Features
1. Implement booking CRUD operations
2. Build calendar component with React
3. Create photo upload functionality
4. Develop task management system

### Step 3: Integration
1. Connect photos to bookings/tasks
2. Implement client management
3. Add search and filtering
4. Polish UI/UX

### Step 4: Enhancement
1. Email notifications
2. Mobile optimization
3. Advanced reporting
4. Performance optimization

## Technology Stack Additions

### New Dependencies
```elixir
# mix.exs additions
{:arc, "~> 0.11.0"},           # File uploads
{:arc_ecto, "~> 0.11.3"},      # Ecto integration
{:ex_image_info, "~> 0.2.4"},  # Image processing
{:bamboo, "~> 2.3"},           # Email sending
```

### Frontend Packages
```json
// package.json additions
"react-big-calendar": "^1.8.2",    // Calendar component
"react-dropzone": "^14.2.3",       // File upload
"react-image-gallery": "^1.3.0",   // Photo gallery
"date-fns": "^2.30.0"              // Date utilities
```

## Next Steps
1. Review and approve this plan
2. Begin with Phase 1: Database schema implementation
3. Set up file upload infrastructure
4. Create basic booking and task models
5. Build calendar integration