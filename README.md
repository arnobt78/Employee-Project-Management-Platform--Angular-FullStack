# Modern Employee & Project Management Platform - Angular 18, TypeScript, MongoDB Full-Stack Serverless Application (Including Real-time Dashboard, Calendar, Gantt Chart, Business Insights, API Monitoring)

A comprehensive, full-stack Employee Management System built with **Angular 18**, featuring real-time dashboards, project tracking, calendar views, Gantt charts, business insights, and API monitoring. This is a production-ready CRUD application demonstrating modern web development practices with serverless architecture.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Components & Reusability](#-components--reusability)
- [Routes & Navigation](#-routes--navigation)
- [Serverless Architecture](#️-serverless-architecture)
- [Database Schema](#-database-schema)
- [Key Functionalities](#-key-functionalities)
- [Code Examples](#-code-examples)
- [Deployment](#-deployment)
- [Keywords](#-keywords)
- [Conclusion](#-conclusion)

---

## 🎯 Overview

EmpowerHub is a modern, feature-rich Employee Management System designed to help organizations manage their workforce, projects, and resources efficiently. The application provides a complete solution for:

- **Employee Management**: Track employee information, departments, roles, and assignments
- **Project Management**: Manage projects with timelines, milestones, approvals, and resource planning
- **Resource Allocation**: Assign employees to projects with role-based access and tracking
- **Analytics & Insights**: Real-time dashboards, business insights, and performance metrics
- **Calendar & Timeline**: Visual calendar views, timeline visualization, and Gantt charts
- **API Monitoring**: Real-time API status tracking, performance monitoring, and documentation

The application is built with a modern tech stack, following best practices for scalability, maintainability, and user experience.

---

## ✨ Features

### Core Features

- **🔐 Authentication System**: Secure login with demo credentials
- **👥 Employee Management**: Full CRUD operations for employees with department hierarchy
- **📊 Project Management**: Comprehensive project tracking with approval workflows
- **🔗 Project Assignments**: Assign employees to projects with role management
- **📈 Dashboard**: Real-time statistics and insights
- **📅 Calendar View**: Interactive calendar with milestone and due date tracking
- **📉 Timeline View**: Visual timeline representation of projects
- **📊 Gantt Chart**: Project timeline visualization with dynamic calculations
- **💡 Business Insights**: Analytics and reporting features
- **📚 API Documentation**: Interactive API documentation with Swagger-style interface
- **🔍 API Status Monitoring**: Real-time API health monitoring and performance tracking
- **📧 Email Notifications**: Automated email notifications for key events
- **🤖 AI Integration**: AI-powered project overview generation (Gemini/Groq)
- **📦 Contentful Integration**: CMS integration for content management

### Advanced Features

- **Real-time Data**: All data is fetched dynamically from MongoDB via Prisma
- **Serverless Architecture**: Deployable on Vercel with serverless functions
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI Components**: Shadcn UI components for consistent design
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Lazy loading, code splitting, and optimized builds
- **SEO Optimized**: Comprehensive meta tags and Open Graph support

---

## 🛠 Technology Stack

### Frontend

- **Angular 18**: Latest version with standalone components, signals, and modern features
- **TypeScript 5.4**: Type-safe development
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Shadcn UI**: High-quality, accessible component library
- **RxJS 7.8**: Reactive programming for async operations
- **Lucide Angular**: Modern icon library
- **Font Awesome**: Icon library for additional icons

### Backend

- **Node.js**: Serverless runtime environment
- **Prisma 6.19**: Next-generation ORM for database access
- **MongoDB**: NoSQL database for flexible data storage
- **Nodemailer**: Email sending capabilities

### Development Tools

- **Angular CLI**: Development and build tooling
- **Concurrently**: Run multiple commands simultaneously
- **Vercel**: Serverless deployment platform
- **ESLint/Prettier**: Code quality and formatting

### Integrations

- **Google Gemini API**: AI-powered content generation
- **Groq API**: Alternative AI provider
- **Contentful**: Headless CMS integration
- **Resend**: Email service provider

---

## 📁 Project Structure

```bash
employee-management/
├── api/                          # Serverless API functions
│   ├── _lib/                    # Shared utilities
│   │   ├── prisma-client.mjs    # Prisma client initialization
│   │   ├── bootstrap.mjs        # Database seeding
│   │   ├── contentful.mjs       # Contentful integration
│   │   └── ai.mjs              # AI service integration
│   └── employee-management/     # Main API handlers
│       ├── [...segments].js     # Vercel serverless route
│       ├── handler.mjs          # Request handler
│       ├── repository.mjs       # Database operations
│       ├── monitoring.mjs       # API monitoring system
│       └── notifications.mjs   # Email notifications
├── src/                         # Angular application source
│   ├── app/
│   │   ├── components/          # Reusable components
│   │   │   ├── calendar-view/   # Calendar component
│   │   │   ├── gantt-view/      # Gantt chart component
│   │   │   ├── timeline-view/   # Timeline component
│   │   │   └── ui/              # UI components (buttons, toasts, etc.)
│   │   ├── pages/               # Page components
│   │   │   ├── login/           # Login page
│   │   │   ├── dashboard/       # Dashboard page
│   │   │   ├── employee/        # Employee management
│   │   │   ├── project/         # Project listing
│   │   │   ├── project-form/    # Project create/edit
│   │   │   ├── project-employee/ # Project assignments
│   │   │   ├── business-insights/ # Analytics
│   │   │   ├── calendar-timeline/ # Calendar & timeline
│   │   │   ├── api-doc/         # API documentation
│   │   │   └── api-status/      # API monitoring
│   │   ├── service/             # Services
│   │   │   └── master.service.ts # API service
│   │   ├── model/               # Data models
│   │   │   ├── interface/       # TypeScript interfaces
│   │   │   └── class/          # TypeScript classes
│   │   ├── lib/                 # Utilities
│   │   ├── app.component.ts     # Root component
│   │   ├── app.routes.ts        # Route configuration
│   │   └── app.config.ts        # App configuration
│   ├── environments/            # Environment configurations
│   └── index.html              # Main HTML file
├── prisma/                      # Prisma configuration
│   └── schema.prisma           # Database schema
├── public/                      # Static assets
├── tools/                       # Development tools
│   └── dev-api-server.mjs      # Local API server
├── vercel.json                 # Vercel configuration
├── angular.json                # Angular configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud instance like MongoDB Atlas)
- **Git** for version control

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd employee-management
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) section)

4. **Set up Prisma**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**

   ```bash
   npm start
   ```

   This will start both the Angular frontend (port 4200) and the API server (port 4310)

6. **Access the application**
   - Frontend: <http://localhost:4200>
   - API: <http://localhost:4310>

### Login Credentials

Login credentials are configured via environment variables (see below). Set `NG_APP_DEMO_USERNAME` and `NG_APP_DEMO_PASSWORD` in your `.env` file.

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

### Required Variables

```env
# Database
DATABASE_URL="mongodb://localhost:27017/employee-management"
# or for MongoDB Atlas:
# DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority"

# API Configuration
API_PORT=4310
NG_APP_API_BASE_URL=/api/employee-management/

# Demo Login Credentials (required)
NG_APP_DEMO_USERNAME=your_username_here
NG_APP_DEMO_PASSWORD=your_password_here
```

### Optional Variables

```env
# AI Integration
NG_APP_GEMINI_API_KEY=your_gemini_api_key
NG_APP_GROQ_API_KEY=your_groq_api_key
NG_APP_OPENROUTER_API_KEY=your_openrouter_api_key

# Contentful CMS
NG_APP_CONTENTFUL_SPACE_ID=your_space_id
NG_APP_CONTENTFUL_ENVIRONMENT=master
NG_APP_CONTENTFUL_DELIVERY_TOKEN=your_delivery_token

# Email Configuration
NG_APP_RESEND_API_KEY=your_resend_api_key
NG_APP_SMTP_HOST=smtp.example.com
NG_APP_SMTP_USER=your_smtp_user

# Storage (for file uploads)
NG_APP_CLOUDINARY_UPLOAD_PRESET=your_preset
NG_APP_IMAGEKIT_PUBLIC_KEY=your_public_key

# Feature Toggles
NG_APP_FEATURE_READINESS_V2=true
NG_APP_FEATURE_AI_SUMMARY=false
NG_APP_FEATURE_WORKFLOW_TIMELINE=false

# Notification Recipients (comma-separated)
NOTIFY_APPROVAL_TO=admin@example.com,manager@example.com
```

### Environment Variable Details

#### Database Configuration

- **DATABASE_URL**: MongoDB connection string. For local development, use `mongodb://localhost:27017/employee-management`. For production, use MongoDB Atlas connection string.

#### API Configuration

- **API_PORT**: Port for the local API server (default: 4310)
- **NG_APP_API_BASE_URL**: Base URL for API calls (default: `/api/employee-management/`)

#### AI Integration

- **NG_APP_GEMINI_API_KEY**: Google Gemini API key for AI-powered features
- **NG_APP_GROQ_API_KEY**: Groq API key (alternative AI provider)
- **NG_APP_OPENROUTER_API_KEY**: OpenRouter API key for additional AI services

#### Contentful CMS

- **NG_APP_CONTENTFUL_SPACE_ID**: Your Contentful space ID
- **NG_APP_CONTENTFUL_ENVIRONMENT**: Contentful environment (usually "master")
- **NG_APP_CONTENTFUL_DELIVERY_TOKEN**: Contentful delivery API token

#### Email Configuration

- **NG_APP_RESEND_API_KEY**: Resend API key for transactional emails
- **NG_APP_SMTP_HOST**: SMTP server hostname
- **NG_APP_SMTP_USER**: SMTP username

#### Feature Toggles

Control feature availability:

- **NG_APP_FEATURE_READINESS_V2**: Enable version 2 of readiness checklist
- **NG_APP_FEATURE_AI_SUMMARY**: Enable AI summary generation
- **NG_APP_FEATURE_WORKFLOW_TIMELINE**: Enable workflow timeline feature

---

## 🔌 API Endpoints

The application provides a RESTful API with 27 endpoints organized into categories:

### Departments (2 endpoints)

- `GET /api/employee-management/GetParentDepartment` - Get all parent departments
- `GET /api/employee-management/GetChildDepartmentByParentId?deptId={id}` - Get child departments by parent ID

### Employees (4 endpoints)

- `GET /api/employee-management/GetAllEmployees` - Get all employees
- `POST /api/employee-management/CreateEmployee` - Create a new employee
- `PUT /api/employee-management/UpdateEmployee/{id}` - Update an employee
- `DELETE /api/employee-management/DeleteEmployee/{id}` - Delete an employee

### Projects (5 endpoints)

- `GET /api/employee-management/GetAllProjects` - Get all projects
- `GET /api/employee-management/GetProject/{id}` - Get project by ID
- `POST /api/employee-management/CreateProject` - Create a new project
- `PUT /api/employee-management/UpdateProject/{id}` - Update a project
- `DELETE /api/employee-management/DeleteProject/{id}` - Delete a project

### Project Resources (1 endpoint)

- `GET /api/employee-management/GetProjectResources/{id}` - Get resource insights for a project

### Assignments (4 endpoints)

- `GET /api/employee-management/GetAllProjectEmployees` - Get all project-employee assignments
- `POST /api/employee-management/CreateProjectEmployee` - Create a new assignment
- `PUT /api/employee-management/UpdateProjectEmployee/{id}` - Update an assignment
- `DELETE /api/employee-management/DeleteProjectEmployee/{id}` - Delete an assignment

### Dashboard (1 endpoint)

- `GET /api/employee-management/GetDashboard` - Get dashboard snapshot with statistics

### Schedule (1 endpoint)

- `GET /api/employee-management/GetSchedule` - Get schedule data for calendar and timeline views

### Approvals (6 endpoints)

- `POST /api/employee-management/RequestApproval` - Request project approval
- `POST /api/employee-management/ApproveProject` - Approve a project
- `POST /api/employee-management/RejectProject` - Reject a project
- `POST /api/employee-management/ResetProjectApproval` - Reset approval status
- `POST /api/employee-management/AddReviewerComment` - Add reviewer comment
- `POST /api/employee-management/ResolveReviewerComment` - Resolve reviewer comment

### AI (1 endpoint)

- `POST /api/employee-management/GenerateOverviewDraft` - Generate AI-powered project overview

### Content (1 endpoint)

- `GET /api/employee-management/GetContentfulBrief?entryId={id}&contentType={type}&slug={slug}` - Get Contentful content

### Monitoring (2 endpoints)

- `GET /api/employee-management/GetApiStatus` - Get API status and monitoring data
- `GET /api/employee-management/GetApiDocumentation` - Get API documentation

### Example API Request

```typescript
// Using Angular HttpClient
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

getAllEmployees() {
  return this.http.get<Employee[]>('/api/employee-management/GetAllEmployees');
}

createEmployee(employee: Employee) {
  return this.http.post<IApiResponse>(
    '/api/employee-management/CreateEmployee',
    employee
  );
}
```

---

## 🧩 Components & Reusability

### Reusable UI Components

The project includes several reusable components located in `src/app/components/ui/`:

#### Button Component (`button.ts`)

A flexible button directive with multiple variants:

```typescript
import { UbButtonDirective } from '@/app/components/ui/button';

// Usage in template
<button ubButton variant="primary" size="md">Click Me</button>
<button ubButton variant="outline" size="sm">Cancel</button>
<button ubButton variant="ghost" size="lg">Submit</button>
```

**Variants**: `primary`, `secondary`, `outline`, `ghost`, `destructive`
**Sizes**: `sm`, `md`, `lg`

#### Toast Component (`toast.service.ts`, `toast-container.component.ts`)

Display notifications to users:

```typescript
import { ToastService } from '@/app/components/ui/toast.service';

constructor(private toast: ToastService) {}

showSuccess() {
  this.toast.success({
    title: 'Success!',
    description: 'Operation completed successfully.'
  });
}

showError() {
  this.toast.error({
    title: 'Error',
    description: 'Something went wrong.'
  });
}
```

#### Hover Tooltip Component (`hover-tooltip.component.ts`)

Custom tooltip for hover interactions:

```typescript
<app-hover-tooltip
  [trigger]="tooltipTrigger"
  [side]="'top'"
  [sideOffset]="8">
  <div>Tooltip content</div>
</app-hover-tooltip>
```

#### Optimized Image Component (`optimized-image.component.ts`)

Image component with lazy loading:

```typescript
<app-optimized-image
  [src]="imageUrl"
  [alt]="imageAlt"
  [width]="300"
  [height]="200">
</app-optimized-image>
```

#### Floating Background Component (`floating-background.component.ts`)

Animated background for login/auth pages:

```typescript
<app-floating-background></app-floating-background>
```

### View Components

#### Calendar View (`calendar-view.component.ts`)

Reusable calendar component for displaying events:

```typescript
import { CalendarViewComponent } from '@/app/components/calendar-view/calendar-view.component';

// Usage
<app-calendar-view
  [events]="scheduleEvents"
  [currentMonth]="selectedMonth"
  (eventClick)="onEventClick($event)">
</app-calendar-view>
```

**Features**:

- Month navigation
- Event display with color coding
- Click handlers for events
- Expandable event lists

#### Timeline View (`timeline-view.component.ts`)

Visual timeline representation:

```typescript
<app-timeline-view
  [projects]="projects"
  [dateRange]="dateRange"
  (projectClick)="navigateToProject($event)">
</app-timeline-view>
```

**Features**:

- Dynamic timeline calculation
- Project bars with duration
- Interactive dots and rings
- Hover tooltips

#### Gantt View (`gantt-view.component.ts`)

Gantt chart for project visualization:

```typescript
<app-gantt-view
  [projects]="projects"
  [dateRange]="dateRange"
  (projectClick)="navigateToProject($event)">
</app-gantt-view>
```

**Features**:

- Dynamic bar width calculation
- Month/year headers
- Hover tooltips with project details
- Clickable bars for navigation

### How to Reuse Components

**Step 1: Import the component** in your module or standalone component:

```typescript
import { CalendarViewComponent } from '@/app/components/calendar-view/calendar-view.component';

@Component({
  standalone: true,
  imports: [CalendarViewComponent],
  // ...
})
```

**Step 2: Use in template**:

```html
<app-calendar-view [events]="myEvents"></app-calendar-view>
```

**Step 3: Customize with inputs and outputs**:

```typescript
// Component inputs
@Input() events: Event[] = [];
@Input() currentMonth: Date = new Date();

// Component outputs
@Output() eventClick = new EventEmitter<Event>();
```

---

## 🗺 Routes & Navigation

The application uses Angular Router with the following route structure:

### Route Configuration

```typescript
// src/app/app.routes.ts
export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { layout: "auth" } },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "employee", component: EmployeeComponent },
      { path: "projects", component: ProjectComponent },
      { path: "new-project", component: ProjectFormComponent },
      { path: "update-project/:id", component: ProjectFormComponent },
      { path: "project-employee", component: ProjectEmployeeComponent },
      { path: "business-insights", component: BusinessInsightsComponent },
      { path: "calendar-timeline", component: CalendarTimelineComponent },
      { path: "api-doc", component: ApiDocComponent },
      { path: "api-status", component: ApiStatusComponent },
    ],
  },
];
```

### Route Data

Each route can include metadata:

```typescript
{
  path: 'dashboard',
  component: DashboardComponent,
  data: {
    layout: 'private',
    pageTitle: 'Dashboard',
  },
}
```

### Programmatic Navigation

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

navigateToProject(projectId: number) {
  this.router.navigate(['/update-project', projectId]);
}

navigateToDashboard() {
  this.router.navigate(['/dashboard']);
}
```

### Route Guards (Future Enhancement)

You can add route guards for authentication:

```typescript
// auth.guard.ts
export const authGuard: CanActivateFn = (route, state) => {
  // Check authentication
  return isAuthenticated ? true : router.createUrlTree(["/login"]);
};
```

---

## ☁️ Serverless Architecture

This project is designed to work with **Vercel's serverless functions**, making it highly scalable and cost-effective.

### How Serverless Works

1. **API Routes**: The `api/employee-management/[...segments].js` file is a Vercel serverless function that handles all API requests.

2. **Request Handling**: When a request comes to `/api/employee-management/*`, Vercel routes it to the serverless function.

3. **Cold Starts**: Functions start on-demand, with cold start times typically under 100ms.

4. **Scaling**: Automatically scales based on traffic.

### Serverless Function Structure

```javascript
// api/employee-management/[...segments].js
import { handleEmployeeManagementRequest } from "./handler.mjs";

export default async function handler(req, res) {
  await handleEmployeeManagementRequest(req, res);
}
```

### Local Development

For local development, use the dev server:

```javascript
// tools/dev-api-server.mjs
import { createServer } from "node:http";
import { handleEmployeeManagementRequest } from "../api/employee-management/handler.mjs";

const server = createServer((request, response) => {
  if (request.url.startsWith("/api/employee-management")) {
    handleEmployeeManagementRequest(request, response);
  }
});

server.listen(4310);
```

### Deployment to Vercel

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Deploy**:

   ```bash
   vercel
   ```

3. **Environment Variables**: Set all environment variables in Vercel dashboard.

### Using in Other Projects

To use this serverless architecture in other projects:

1. **Copy the API structure**:

   ```bash
   api/
     your-module/
       [...segments].js
       handler.mjs
       repository.mjs
   ```

2. **Create handler**:

   ```javascript
   export async function handleYourModuleRequest(request, response) {
     // Your logic here
   }
   ```

3. **Set up route**:

   ```javascript
   // [...segments].js
   import { handleYourModuleRequest } from "./handler.mjs";
   export default async function handler(req, res) {
     await handleYourModuleRequest(req, res);
   }
   ```

---

## 🗄 Database Schema

The application uses **MongoDB** with **Prisma ORM**. Here's the schema structure:

### Models

#### Employee

```prisma
model Employee {
  id            String   @id @map("_id") @db.ObjectId
  employeeId    Int      @unique
  employeeName  String
  emailId       String?
  deptId        Int?
  role          String?
  // ... more fields
}
```

#### Project

```prisma
model Project {
  id             String   @id @map("_id") @db.ObjectId
  projectId      Int      @unique
  projectName    String
  clientName     String?
  status         String   @default("draft")
  approvalStatus String   @default("draft")
  // ... more fields
}
```

#### ProjectEmployee

```prisma
model ProjectEmployee {
  id           String   @id @map("_id") @db.ObjectId
  empProjectId Int      @unique
  projectId    Int
  empId        Int
  role         String?
  isActive     Boolean  @default(true)
  // ... more fields
}
```

### Database Operations

```typescript
// Using Prisma
import { prisma } from "./prisma-client";

// Create
const employee = await prisma.employee.create({
  data: { employeeName: "John Doe", emailId: "john@example.com" },
});

// Read
const employees = await prisma.employee.findMany();

// Update
await prisma.employee.update({
  where: { employeeId: 1 },
  data: { role: "Manager" },
});

// Delete
await prisma.employee.delete({
  where: { employeeId: 1 },
});
```

---

## 🔧 Key Functionalities

### 1. Employee Management

**Features**:

- Create, read, update, delete employees
- Department hierarchy management
- Employee search and filtering
- Role-based access (future enhancement)

**Implementation**:

```typescript
// Service method
getAllEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>(
    this.getProxyUrl('GetAllEmployees')
  );
}
```

### 2. Project Management

**Features**:

- Full project lifecycle management
- Approval workflow (draft → requested → approved/rejected)
- Reviewer comments system
- Timeline and milestone tracking
- Resource planning
- Readiness checklist

**Workflow**:

1. Create project (draft)
2. Request approval
3. Reviewer comments
4. Approve/Reject
5. Project execution

### 3. Calendar & Timeline

**Features**:

- Calendar view with month navigation
- Event display (milestones, due dates, reminders)
- Timeline visualization
- Gantt chart with dynamic calculations
- Clickable events for navigation

**Data Structure**:

```typescript
interface ScheduleEvent {
  id: string;
  date: string;
  type: "milestone" | "due-date" | "reminder";
  title: string;
  projectId: number;
  projectName: string;
}
```

### 4. Business Insights

**Features**:

- Dashboard statistics
- Project health metrics
- Resource utilization
- Performance analytics

### 5. API Monitoring

**Features**:

- Real-time API status
- Performance history (7 days)
- Endpoint health by category
- Recent activity log
- Success rate tracking
- Response time monitoring

**Implementation**:
The monitoring system uses in-memory logging:

```javascript
// api/employee-management/monitoring.mjs
export function logRequest({ endpoint, method, status, responseTime }) {
  // Log request to memory
  // Calculate metrics
  // Clean up old logs
}
```

### 6. Email Notifications

**Features**:

- Automated emails for:
  - Employee creation/update/deletion
  - Project creation/update/deletion
  - Approval requests
  - Reviewer comments
  - Assignment changes

**Configuration**:
Set up email service in environment variables (Resend or SMTP).

---

## 💻 Code Examples

### Creating a New Service

```typescript
// src/app/service/my-service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MyService {
  private apiUrl = "/api/employee-management/";

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}GetData`);
  }

  createData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}CreateData`, data);
  }
}
```

### Creating a New Component

```typescript
// src/app/pages/my-page/my-page.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyService } from "@/app/service/my-service";

@Component({
  selector: "app-my-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./my-page.component.html",
  styleUrls: ["./my-page.component.css"],
})
export class MyPageComponent implements OnInit {
  data: any[] = [];

  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.myService.getData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.error("Error loading data:", error);
      },
    });
  }
}
```

### Using Signals (Angular 18)

```typescript
import { signal, computed } from "@angular/core";

export class MyComponent {
  // Define signals
  count = signal(0);
  items = signal<string[]>([]);

  // Computed signal
  doubleCount = computed(() => this.count() * 2);

  // Update signals
  increment() {
    this.count.update((value) => value + 1);
  }

  addItem(item: string) {
    this.items.update((items) => [...items, item]);
  }
}
```

### Form Handling

```typescript
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class MyFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      age: [0, [Validators.required, Validators.min(18)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      // Submit data
    }
  }
}
```

### Error Handling

```typescript
this.service.getData().subscribe({
  next: (data) => {
    // Handle success
    this.data = data;
  },
  error: (error) => {
    // Handle error
    this.toast.error({
      title: "Error",
      description: error.message || "An error occurred",
    });
  },
});
```

---

## 🚀 Deployment

### Vercel Deployment

1. **Connect Repository**:

   - Push code to GitHub/GitLab
   - Import project in Vercel

2. **Configure Build Settings**:

   - Framework: Angular
   - Build Command: `npm run build`
   - Output Directory: `dist/employee_management_app_angular18`

3. **Set Environment Variables**:

   - Add all required environment variables in Vercel dashboard

4. **Deploy**:
   - Vercel will automatically deploy on push to main branch

### Environment-Specific Builds

```bash
# Development
npm run build

# Production
npm run build -- --configuration production
```

### Build Optimization

The Angular build process includes:

- Tree shaking
- Code splitting
- Minification
- AOT compilation
- Bundle optimization

---

## 🏷 Keywords

**Technologies**: Angular 18, TypeScript, Node.js, MongoDB, Prisma, Tailwind CSS, Shadcn UI, Vercel, Serverless

**Concepts**: CRUD Application, RESTful API, Serverless Architecture, Real-time Dashboard, Project Management, Employee Management, Resource Allocation, Calendar View, Gantt Chart, Timeline Visualization, API Monitoring, Business Intelligence, Email Notifications, AI Integration, CMS Integration

**Features**: Authentication, Authorization, Approval Workflow, Reviewer Comments, Milestone Tracking, Due Date Reminders, Performance Analytics, API Documentation, Health Monitoring

**Development**: Standalone Components, Signals, Reactive Programming, Type Safety, Component Reusability, Modular Architecture, Responsive Design, SEO Optimization

---

## 📝 Conclusion

EmpowerHub is a comprehensive, production-ready Employee Management System that demonstrates modern web development practices. It showcases:

- **Modern Angular Development**: Using the latest Angular 18 features including standalone components, signals, and reactive programming
- **Full-Stack Architecture**: Complete frontend and backend implementation with serverless functions
- **Real-World Features**: Authentication, CRUD operations, approval workflows, analytics, and monitoring
- **Best Practices**: Type safety, component reusability, error handling, and performance optimization
- **Scalability**: Serverless architecture that scales automatically with traffic
- **Developer Experience**: Well-structured codebase, comprehensive documentation, and reusable components

This project serves as an excellent learning resource for:

- Angular 18 development
- TypeScript best practices
- Serverless architecture
- MongoDB with Prisma
- Modern UI/UX design
- API design and documentation
- Real-time monitoring and analytics

The codebase is well-organized, documented, and ready for extension. You can use individual components, services, or the entire architecture as a foundation for your own projects.

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
