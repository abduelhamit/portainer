import angular from 'angular';

import formComponentsModule from './form-components';
import sidebarModule from './sidebar';
import gitFormModule from './forms/git-form';
import porAccessManagementModule from './accessManagement';
import widgetModule from './widget';
import { boxSelectorModule } from './BoxSelector';
import { pageHeaderModule } from './PageHeader';

import { TooltipAngular } from './Tip/Tooltip';
import { beFeatureIndicator } from './BEFeatureIndicator';
import { InformationPanelAngular } from './InformationPanel';
import { ViewLoadingAngular } from './ViewLoading';

export default angular
  .module('portainer.app.components', [pageHeaderModule, boxSelectorModule, widgetModule, sidebarModule, gitFormModule, porAccessManagementModule, formComponentsModule])
  .component('informationPanel', InformationPanelAngular)
  .component('viewLoading', ViewLoadingAngular)
  .component('portainerTooltip', TooltipAngular)
  .component('beFeatureIndicator', beFeatureIndicator).name;
