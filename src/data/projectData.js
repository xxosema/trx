export const projectData = {
  info: [
    { id: 'gal', name: 'INFO_GAL.PDF', type: 'pdf' },
    { id: 'esp', name: 'INFO_ESP.PDF', type: 'pdf' },
    { id: 'eng', name: 'INFO_ENG.PDF', type: 'pdf' }
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
          url: 'https://www.somoscomarca.es/media/somoscomarca/images/2025/08/02/2025080212303629583.jpg'
        },
        { id: 'img2', name: 'IMG_002.JPG', type: 'image', url: '/images/trx001_img2.jpg' },
        { id: 'vid1', name: 'VID_001.MP4', type: 'video', url: '/videos/trx001_vid1.mp4' },
        { id: 'pattern1', name: 'PATTERN_001.PDF', type: 'pdf', url: '/patterns/trx001_pattern1.pdf' }
      ]
    },
    {
      id: 'trx_002',
      name: 'TRX_002',
      files: [
        { id: 'img3', name: 'IMG_003.JPG', type: 'image', url: '/images/trx002_img3.jpg' },
        { id: 'img4', name: 'IMG_004.JPG', type: 'image', url: '/images/trx002_img4.jpg' },
        { id: 'vid2', name: 'VID_002.MP4', type: 'video', url: '/videos/trx002_vid2.mp4' },
        { id: 'pattern2', name: 'PATTERN_002.PDF', type: 'pdf', url: '/patterns/trx002_pattern2.pdf' }
      ]
    }
  ],
  contact: {
    email: 'EMAIL'
  }
};

