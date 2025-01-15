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
    url: '/images/events/1.png',
    images: [
      '/images/events/1.png',
      '/images/events/2.png',
      '/images/events/3.png',
      '/images/events/4.png',
      '/images/events/5.png',
      '/images/events/6.png',
      '/images/events/7.png',
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
      '/images/summit/8.png',
      '/images/summit/9.png',
      '/images/summit/10.png',
      '/images/summit/11.png',
      '/images/summit/12.png',
      '/images/summit/13.png',
      '/images/summit/14.png',
        '/images/summit/15.png',
        '/images/summit/16.png',
        '/images/summit/17.png',
        '/images/summit/18.png',
        '/images/summit/19.png',
        '/images/summit/20.png',
        '/images/summit/21.png',
        '/images/summit/22.png',
        '/images/summit/23.png',
        '/images/summit/24.png',
        '/images/summit/25.png',
        '/images/summit/26.png',
        '/images/summit/27.png',
        '/images/summit/28.png',
        '/images/summit/29.png',
        '/images/summit/30.png',
        '/images/summit/31.png',
        '/images/summit/32.png',
        '/images/summit/33.png',
        '/images/summit/34.png',
        '/images/summit/35.png',
    ],
    title: 'Summit & Exhibition 2024',
    category: 'Events',
    year: '2024',
    description: 'African Health Excellence Summit',
  },

  // 2023 Images
  {
    id: 101,
    url: '/images/2023/202388.jpeg',
    images: [
      ...Array.from({ length: 360 - 88 + 1 }, (_, i) => `/images/2023/2023${i + 88}.jpeg`),
    ],
    title: 'Summit & Exhibition 2023',
    category: 'Events',
    year: '2023',
    description: 'Annual Healthcare Summit',
  },
  {
    id: 102,
    url: '/images/2023/20232.jpeg',
    images: [
        ...Array.from({ length: 360 - 2 + 1 }, (_, i) => `/images/2023/2023${i + 2}.jpeg`),
    ],
    title: 'Awards Ceremony 2023',
    category: 'Awards',
    year: '2023',
    description: 'Excellence in Healthcare Awards',
  },

  // 2022 Images
  {
    id: 201,
    url: '/images/2022/Symposium/2022Symp3.jpg',
    images: [
      '/images/2022/Symposium/2022Symp1.jpg',
      '/images/2022/Symposium/2022Symp2.jpg',
      '/images/2022/Symposium/2022Symp3.jpg',
        '/images/2022/Symposium/2022Symp4.jpg',
        '/images/2022/Symposium/2022Symp5.jpg',
        '/images/2022/Symposium/2022Symp6.jpg',
        '/images/2022/Symposium/2022Symp7.jpg',
        '/images/2022/Symposium/2022Symp8.jpg',
        '/images/2022/Symposium/2022Symp9.jpg',
    ],
    title: 'Symposium 2022',
    category: 'Events',
    year: '2022',
    description: 'Healthcare Innovation Summit',
  },
  {
    id: 202,
    url: '/images/2022/Awards/2022Awa2.jpg',
    images: [
      '/images/2022/Awards/2022Awa1.jpg',
      '/images/2022/Awards/2022Awa2.jpg',
        '/images/2022/Awards/2022Awa3.jpg',
        '/images/2022/Awards/2022Awa4.jpg',
        '/images/2022/Awards/2022Awa5.jpg',
        '/images/2022/Awards/2022Awa6.jpg',
        '/images/2022/Awards/2022Awa7.jpg',
        '/images/2022/Awards/2022Awa8.jpg',
        '/images/2022/Awards/2022Awa9.jpg',
        '/images/2022/Awards/2022Awa10.jpg',
        '/images/2022/Awards/2022Awa11.jpg',
        '/images/2022/Awards/2022Awa12.jpg',
        '/images/2022/Awards/2022Awa13.jpg',
        '/images/2022/Awards/2022Awa14.jpg',
        '/images/2022/Awards/2022Awa15.jpg',
        '/images/2022/Awards/2022Awa16.jpg',
        '/images/2022/Awards/2022Awa17.jpg',
        '/images/2022/Awards/2022Awa18.jpg',
        '/images/2022/Awards/2022Awa19.jpg',
        '/images/2022/Awards/2022Awa20.jpg',
        '/images/2022/Awards/2022Awa21.jpg',
        '/images/2022/Awards/2022Awa22.jpg',
        '/images/2022/Awards/2022Awa23.jpg',
        '/images/2022/Awards/2022Awa24.jpg',
        '/images/2022/Awards/2022Awa25.jpg',
        '/images/2022/Awards/2022Awa26.jpg',
        '/images/2022/Awards/2022Awa27.jpg',
        '/images/2022/Awards/2022Awa28.jpg',
        '/images/2022/Awards/2022Awa29.jpg',
        '/images/2022/Awards/2022Awa30.jpg',
        '/images/2022/Awards/2022Awa31.jpg',
        '/images/2022/Awards/2022Awa32.jpg',
        '/images/2022/Awards/2022Awa33.jpg',
        '/images/2022/Awards/2022Awa34.jpg',
        '/images/2022/Awards/2022Awa35.jpg',
        '/images/2022/Awards/2022Awa36.jpg',
        '/images/2022/Awards/2022Awa37.jpg',
        '/images/2022/Awards/2022Awa38.jpg',
        ...Array.from({ length: 91 }, (_, i) => `/images/2022/Awards/2022Awa${i + 40}.jpg`),
    ],
    title: 'Awards Ceremony 2022',
    category: 'Awards',
    year: '2022',
    description: 'Excellence in Healthcare Awards',
  },

  // 2019 Images
  {
    id: 301,
    url: '/images/2019/20196.jpeg',
    images: [
      ...Array.from({ length: 130 }, (_, i) => `/images/2019/2019${i + 1}.jpeg`),
    ],
    title: 'Healthcare Summit 2019',
    category: 'Events',
    year: '2019',
    description: 'Pre-pandemic Healthcare Excellence Event',
  },

  // 2018 Images
  {
    id: 401,
    url: '/images/2018/20182.jpeg',
    images: [
      '/images/2018/20181.jpeg',
        '/images/2018/20182.jpeg',
        '/images/2018/20183.jpeg',
        '/images/2018/20184.jpeg',
        '/images/2018/20185.jpeg',
        '/images/2018/20186.jpeg',
        '/images/2018/20187.jpeg',
        '/images/2018/20188.jpeg',
        '/images/2018/20189.jpeg',
        '/images/2018/201810.jpeg',
        '/images/2018/201811.jpeg',
        '/images/2018/201812.jpeg',
        '/images/2018/201813.jpeg',
        '/images/2018/201814.jpeg',
        '/images/2018/201815.jpeg',
        '/images/2018/201816.jpeg',
        '/images/2018/201817.jpeg',
        '/images/2018/201818.jpeg',
        '/images/2018/201819.jpeg',
        '/images/2018/201820.jpeg',
        '/images/2018/201821.jpeg',
        '/images/2018/201822.jpeg',
        '/images/2018/201823.jpeg',
        '/images/2018/201824.jpeg',
        '/images/2018/201825.jpeg', 
        '/images/2018/201826.jpeg',
        '/images/2018/201827.jpeg',
        '/images/2018/201828.jpeg',
        '/images/2018/201829.jpeg',
        '/images/2018/201830.jpeg',
        '/images/2018/201831.jpeg',
        '/images/2018/201832.jpeg',
        '/images/2018/201833.jpeg',
        '/images/2018/201834.jpeg',
        '/images/2018/201835.jpeg',
        '/images/2018/201836.jpeg',
        '/images/2018/201837.jpeg',
        '/images/2018/201838.jpeg', 
        '/images/2018/201839.jpeg',
        '/images/2018/201840.jpeg',
        '/images/2018/201841.jpeg',
        '/images/2018/201842.jpeg',
        '/images/2018/201843.jpeg',
        '/images/2018/201844.jpeg',
        '/images/2018/201845.jpeg',
        '/images/2018/201846.jpeg',
        '/images/2018/201847.jpeg',
        '/images/2018/201848.jpeg',
        '/images/2018/201849.jpeg',
        '/images/2018/201850.jpeg', 
    ],
    title: 'Summit 2018',
    category: 'Events',
    year: '2018',
    description: 'Annual Healthcare Professionals Meeting',
  },
  // 2017 Images
  {
    id: 501,
    url: '/images/2017/201725.jpeg',
    images: [
      '/images/2017/20171.jpeg',
        '/images/2017/20172.jpeg',
        '/images/2017/20173.jpeg',
        '/images/2017/20174.jpeg',
        '/images/2017/20175.jpeg',
        '/images/2017/20176.jpeg',
        '/images/2017/20177.jpeg',
        '/images/2017/20178.jpeg',
        '/images/2017/20179.jpeg',
        '/images/2017/201710.jpeg',
        '/images/2017/201711.jpeg',
        '/images/2017/201712.jpeg',
        '/images/2017/201713.jpeg',
        '/images/2017/201714.jpeg',
        '/images/2017/201715.jpeg',
        '/images/2017/201716.jpeg',
        '/images/2017/201717.jpeg',
        '/images/2017/201718.jpeg',
        '/images/2017/201719.jpeg',
        '/images/2017/201720.jpeg',
        '/images/2017/201721.jpeg',
        '/images/2017/201722.jpeg',
        '/images/2017/201723.jpeg',
        '/images/2017/201724.jpeg',
        '/images/2017/201725.jpeg',
        '/images/2017/201726.jpeg',
        '/images/2017/201727.jpeg',
        '/images/2017/201728.jpeg',
        '/images/2017/201729.jpeg',
        '/images/2017/201730.jpeg',
    ],
    title: 'Inaugural Summit 2017',
    category: 'Events',
    year: '2017',
    description: 'First African Health Excellence Summit',
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
    title: 'Award Ceremonies',
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
