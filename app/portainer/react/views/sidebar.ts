import angular from 'angular';

import { AngularSidebarService } from '@/react/sidebar/useSidebarState';
import { Sidebar } from '@/react/sidebar/Sidebar';
import { r2a } from '@/react-tools/react2angular';

import { sidebarWrapper } from './sidebar-wrapper';

export const sidebarModule = angular
  .module('portainer.app.sidebar', [])
  .component('sidebar', sidebarWrapper)
  .component('sidebarReact', r2a(Sidebar, ['environment']))
  .factory('SidebarService', AngularSidebarService).name;
