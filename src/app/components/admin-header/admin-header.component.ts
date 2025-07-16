import { Component, signal, EventEmitter, Output, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '@core/services/auth.service';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: Date;
  read: boolean;
}

@Component({
  selector: 'app-admin-header',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-header.component.html'
})
export class AdminHeaderComponent {
  private authService = inject(AuthService);
  @Output() mobileMenuToggle = new EventEmitter<void>();

  // Signals for reactive state
  searchQuery = signal('');
  showNotifications = signal(false);
  showUserMenu = signal(false);
  notificationCount = signal(3);

  // Mock notifications data
  notifications = signal<Notification[]>([
    {
      id: 1,
      title: 'New user registration',
      message: 'John Doe has registered for an account',
      time: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: false
    },
    {
      id: 2,
      title: 'System update completed',
      message: 'The latest system update has been successfully installed',
      time: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      read: false
    },
    {
      id: 3,
      title: 'Backup reminder',
      message: 'Daily backup is scheduled for tonight at 2:00 AM',
      time: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
      read: false
    }
  ]);

  constructor(private router: Router) { }

  // Get current page name for breadcrumbs
  currentPage(): string {
    const path = this.router.url.split('/').pop();
    switch (path) {
      case 'dashboard':
        return 'Dashboard';
      case 'todos':
        return 'Todos';
      case 'users':
        return 'Users';
      case 'analytics':
        return 'Analytics';
      case 'reports':
        return 'Reports';
      case 'settings':
        return 'Settings';
      case 'logs':
        return 'System Logs';
      case 'backup':
        return 'Backup & Restore';
      default:
        return 'Dashboard';
    }
  }

  // Get user initials for avatar
  getUserInitials(): string {
    const name = 'Admin User'; // Replace with actual user name
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.mobileMenuToggle.emit();
  }

  // Toggle notifications dropdown
  toggleNotifications(): void {
    this.showNotifications.update(show => !show);
    if (this.showNotifications()) {
      this.showUserMenu.set(false);
    }
  }

  // Toggle user menu dropdown
  toggleUserMenu(): void {
    this.showUserMenu.update(show => !show);
    if (this.showUserMenu()) {
      this.showNotifications.set(false);
    }
  }

  // Sign out functionality
  signOut(): void {
    // TODO: Implement sign out logic
    console.log('Sign out');
    this.authService.signOut();
  }

  // Mock user data (replace with actual user service)
  user(): any {
    return {
      user: {
        name: 'Admin User',
        email: 'admin@example.com'
      }
    };
  }
}
