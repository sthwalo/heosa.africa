/**
 * Navigation Menu Configuration
 * 
 * ⚠️ FALLBACK DATA - Currently using hardcoded values
 * TODO: Make navigation configurable via CMS when backend is implemented
 */

import { NavigationConfig } from '../types';

export const NAVIGATION: NavigationConfig = {
  leftMenu: [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Awards/Summit',
      path: '/awards',
      submenu: [
        { title: 'Overview', path: '/awards/overview' },
        { title: 'Award Categories', path: '/awards/categories' },
        { title: 'Award Winners', path: '/winners' },
      ]
    },
    {
      title: 'Our Partners',
      path: '/partners',
    },
  ],
  rightMenu: [
    {
      title: 'Medical Events',
      path: '/medical-events',
    },
    {
      title: 'Winners',
      path: '/winners',
      submenu: [
        { title: 'View Finalists', path: '/finalists' },
        { title: 'Past Winners', path: '/past-winners' }
      ]
    },
    {
      title: 'Gallery',
      path: '/gallery',
      submenu: [
        { title: 'Events', path: '/gallery#events' },
        { title: 'Awards', path: '/gallery#awards' },
        { title: 'Videos', path: '/gallery#videos' }
      ]
    },
    {
      title: 'Contact',
      path: '/contact',
      submenu: [
        { title: 'Get in Touch', path: '/contact' },
        { title: 'Support', path: '/contact#support' },
        { title: 'Locations', path: '/contact#locations' }
      ]
    }
  ]
};
