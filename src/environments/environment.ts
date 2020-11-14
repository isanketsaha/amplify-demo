// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export const sideNavOptions = {
  Home: [
    {
      title: 'Dashboard',
      icon: 'fa fa-home',
    },
  ],
  Activity: [
    {
      title: 'Authorizations',
      icon: 'fa fa-lock',
    },
    {
      title: 'Charging Session',
      icon: 'fa fa-bolt',
    },
  ],
  Assert: [
    {
      title: 'Charging Points',
      icon: 'fa fa-plug',
    },
    {
      title: 'Charging Zones',
      icon: 'fa fa-map-marker',
    },
    {
      title: 'Location',
      icon: 'fa fa-map',
    },
    {
      title: 'Location Images',
      icon: 'fa fa-file-image-o',
    },
  ],
  CRM: [
    {
      title: 'Users',
      icon: 'fa fa-user-o',
    },
    {
      title: 'RFID tags',
      icon: 'fa fa-id-card',
    },
  ],
  Partners: [
    {
      title: 'Partners',
      icon: 'fa fa-user-circle',
    },
    {
      title: 'Patner Contacts',
      icon: 'fa fa-file-image-o',
    },
  ],
  Analytics: [
    {
      title: 'Reports',
      icon: 'fa fa-line-chart',
    },
    {
      title: 'SigFox Data',
      icon: 'fa fa-book',
    },
  ],
  Configurations: [
    {
      title: 'Admin Account',
      icon: 'fa fa-info-circle',
    },
    {
      title: 'Company Details',
      icon: 'fa fa-folder-open',
    },
    {
      title: 'Change Password',
      icon: 'fa fa-sign-in',
    },
  ],
};

export const DashboardData = {
  'Fault & Conectivity Loss': {
    score: 12,
    color:'blue'
  },
  'Active Charging session': {
    score: 9,
    color: 'blue',
    value: '9.967 kWh'
  },
  'Charging Sessions': {
    score: 232,
    value :'4.5% Increase',
    icon : 'fa fa-line-chart success',
    filter : true
  },
  'Total Energy': {
    score: 460.426,
    value :'0.07% Decrease',
    icon : 'fa fa-sort-amount-desc failed',
    filter : true
  },
  'Total Revenue': {
    score: 0,
    value: 'No Data',
    filter : true
  },
  'New User': {
    score: 7,
    value: 'No prior data',
    filter : true
  },
  'New Charging Point': {
    score: 2,
    value :'50% Decrease',
    icon : 'fa fa-sort-amount-desc failed',
    filter : true
  },
  'Charge points by type': {
    total : 21,
    dataPoint: {
      'Commercial Public': 14,
      'Commercial private': 7,
      'Personal(Home)': 1,
    },
  },
  'Location by city': {
    total : 16,
    dataPoint: {
      Bangaluru: 8,
      Mumbai: 5,
      Thane: 3,
    },
  },
};
