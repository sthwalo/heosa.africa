/**
 * Type definitions for Navigation
 */

export interface MenuItem {
  title: string;
  path: string;
  submenu?: MenuItem[];
}

export interface NavigationConfig {
  leftMenu: MenuItem[];
  rightMenu: MenuItem[];
}
