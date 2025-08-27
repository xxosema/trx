export const projectData = {
  info: [
    { id: 'gal', name: 'INFO_GAL.TXT', type: 'pdf' },
    { id: 'esp', name: 'INFO_ESP.TXT', type: 'pdf' },
    { id: 'eng', name: 'INFO_ENG.TXT', type: 'pdf' }
  ],
  projects: [
    {
      id: 'trx_001',
      name: 'TRX_001',
      files: [
        { 
          id: 'img1', 
          name: 'IMG_001.JPG', 
          type: 'image', 
          url: '/images/IMG_001.jpg'
        },
        { id: 'img2', name: 'IMG_002.JPG', type: 'image', url: '/images/IMG_002.jpg' },
        { id: 'vid1', name: 'VID_001.MP4', type: 'video', url: '/videos/VID_001.mp4' },
        { id: 'pattern1', name: 'PATTERN_001.PDF', type: 'pattern', url: '/patterns/trx001_pattern1.pdf' }
      ]
    },
    {
      id: 'trx_002',
      name: 'TRX_002',
      files: [
        { id: 'img3', name: 'IMG_003.JPG', type: 'image', url: '/images/IMG_003.jpg' },
        { id: 'img4', name: 'IMG_004.JPG', type: 'image', url: '/images/IMG_004.jpg' },
        { id: 'vid2', name: 'VID_002.MP4', type: 'video', url: '/videos/VID_002.mp4' },
        { id: 'pattern2', name: 'PATTERN_002.PDF', type: 'pattern', url: '/patterns/trx002_pattern2.pdf' }
      ]
    }
  ],
  contact: {
    email: 'EMAIL'
  }
};

