export default {
  data: [
    {
      id: '1',
      type: 'offices',
      links: {
        self:
          'https://johnny-appleseed.clientsecure.me/client-portal-api/offices/1',
      },
      attributes: {
        city: 'Port Alyssonbury',
        name: 'Main Office',
        state: 'NV',
        zip: '51859',
        phone: '(626) 298-1956',
        isVideo: false,
        geolocation: {
          lat: '27.34',
          lng: '-80.34',
        },
        isPublic: false,
      },
    },
    {
      id: '63968',
      type: 'offices',
      links: {
        self:
          'https://johnny-appleseed.clientsecure.me/client-portal-api/offices/63968',
      },
      attributes: {
        city: 'Los Angeles',
        name: 'Therapy Center',
        state: 'CA',
        zip: '90017',
        phone: '(626) 298-1956',
        isVideo: false,
        geolocation: {
          lat: '34.05',
          lng: '-118.26',
        },
        isPublic: false,
      },
    },
    {
      id: '3781352',
      type: 'offices',
      links: {
        self:
          'https://johnny-appleseed.clientsecure.me/client-portal-api/offices/3781352',
      },
      attributes: {
        city: 'Santa Monica',
        name: 'Downtown Office',
        state: 'CA',
        zip: '90401',
        phone: '(626) 298-1956',
        isVideo: false,
        geolocation: {
          lat: '34.02',
          lng: '-118.5',
        },
        isPublic: false,
      },
    },
    {
      id: '8377723',
      type: 'offices',
      links: {
        self:
          'https://johnny-appleseed.clientsecure.me/client-portal-api/offices/8377723',
      },
      attributes: {
        name: 'Video Office',
        phone: '(626) 298-1956',
        isVideo: true,
        geolocation: {
          lat: '0.0',
          lng: '0.0',
        },
        isPublic: false,
      },
    },
  ],
  links: {
    first:
      'https://johnny-appleseed.clientsecure.me/client-portal-api/offices?page%5Bnumber%5D=1&page%5Bsize%5D=10',
    last:
      'https://johnny-appleseed.clientsecure.me/client-portal-api/offices?page%5Bnumber%5D=1&page%5Bsize%5D=10',
  },
};
