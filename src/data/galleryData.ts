export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  year: string;
  description?: string;
  images?: string[];
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // 2024 Images
  {
    id: 1,
    url: '/images/2024/Awards/1.jpg',
    images: [
      ...Array.from({ length: 21 }, (_, i) => `/images/2024/Awards/${i + 1}.jpg`),
    
    ],
    title: 'Awards Ceremony 2024',
    category: 'Awards',
    year: '2024',
    description: 'African Health Excellence Awards Ceremony',
  },
  {
    id: 2,
    url: '/images/summit/27.png',
    images: [
      ...Array.from({ length: 28 }, (_, i) => `/images/2024/Summit/${i + 1}.png`),
    ],
    title: 'Summit & Exhibition 2024',
    category: 'Events',
    year: '2024',
    description: 'African Health Excellence Summit',
  },

  // 2023 Images
  {
    id: 101,
    url: '/images/2023/20232.jpeg',
    images: [
        ...Array.from({ length: 109 }, (_, i) => `/images/2023/2023${i + 1}.jpeg`),
    ],
    title: 'African Health Excellence Awards',
    category: 'Awards',
    year: '2023',
    description: 'Excellence in Healthcare Awards',
  },

  // 2022 Images
  {
    id: 201,
    url: '/images/2022/Awards/202216.jpg',
    images: [
        ...Array.from({ length: 20 }, (_, i) => `/images/2022/Awards/2022${i + 1}.jpg`),
    ],
    title: 'Awards Ceremony 2022',
    category: 'Awards',
    year: '2022',
    description: 'Excellence in Healthcare Awards',
  },
  {
    id: 202,
    url: '/images/2022/Symposium/202210.jpg',
    images: [
      ...Array.from({ length: 20 }, (_, i) => `/images/2022/Symposium/2022${i + 1}.jpg`),
    ],
    title: 'Symposium 2022',
    category: 'Events',
    year: '2022',
    description: 'Healthcare Innovation Summit',
  },

  // 2019 Images
  {
    id: 301,
    url: '/images/2019/Awards /20196.jpg',
    images: [
      ...Array.from({ length: 20 }, (_, i) => `/images/2019/Awards /2019${i + 1}.jpg`),
    ],
    title: 'Health Excellence Awards',
    category: 'Awards',
    year: '2019',
    description: 'Pre-pandemic Healthcare Excellence Event',
  },
  {
    id: 302,
    url: '/images/2019/Congress/20191.jpg',
    images: [
      ...Array.from({ length: 20 }, (_, i) => `/images/2019/Congress/2019${i + 1}.jpg`),
    ],
    title: 'Congress 2019',
    category: 'Events',
    year: '2019',
    description: 'Pre-pandemic Healthcare Excellence Event',
  },

  // 2018 Images
  {
    id: 401,
    url: '/images/2018/201819.jpg',
    images: [
      ...Array.from({ length: 20 }, (_, i) => `/images/2018/2018${i + 1}.jpg`),  
    ],
    title: 'Health Excellence Awards',
    category: 'Awards',
    year: '2018',
    description: 'Annual Healthcare Professionals Awards',
  },
  // 2017 Images
  {
    id: 501,
    url: '/images/2017/201720.jpg',
    images: [
      ...Array.from({ length: 20 }, (_, i) => `/images/2017/2017${i + 1}.jpg`),
    ],
    title: 'Health Excellence Awards',
    category: 'Awards',
    year: '2017',
    description: 'First African Health Excellence Awards Event',
  },

  // Videos Section (can be added to any year)
  {
    id: 601,
    url: '/images/events/1.png',
    images: [
      '/videos/Nominees1.mp4',
      '/videos/Nominees2.mp4',
      '/videos/Nominees3.mp4',
      '/videos/Nominees4.mp4',
      '/videos/Nominees5.mp4',
      '/videos/Nominees6.mp4',
      '/videos/Nominees7.mp4',
      '/videos/Nominees8.mp4',
      '/videos/Nominees9.mp4',
      '/videos/Nominees10.mp4',
      '/videos/Nominees11.mp4',
    ],
    title: 'Nominees',
    category: 'Videos',
    year: '2024',
    description: 'Video highlights from our ceremonies',
  }
];

export const getYears = () => {
  const years = Array.from(new Set(GALLERY_IMAGES.map(img => img.year)));
  return years.sort((a, b) => parseInt(b) - parseInt(a)); // Sort years descending
};

export const getCategories = (year: string) => {
  const yearImages = GALLERY_IMAGES.filter(img => img.year === year);
  return ['All', ...Array.from(new Set(yearImages.map(img => img.category)))];
};

export const filterImages = (year: string, category: string) => {
  let filtered = GALLERY_IMAGES.filter(img => img.year === year);
  if (category !== 'All') {
    filtered = filtered.filter(img => img.category === category);
  }
  return filtered;
};
