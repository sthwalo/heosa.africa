interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Events
  {
    id: 1,
    url: "https://heosa.africa/wp-content/uploads/2024/06/HCP-Author-of-the-year-Ms-Pamela-Sedibe.jpg",
    title: "HCP Author of the Year Award",
    category: "Events",
    description: "Ms. Pamela Sedibe receiving her award"
  },
  {
    id: 2,
    url: "https://heosa.africa/wp-content/uploads/2024/06/Medi-Personality-of-the-year-Christopher-Zungu.jpg",
    title: "Media Personality Award Ceremony",
    category: "Events",
    description: "Christopher Zungu's award presentation"
  },
  {
    id: 3,
    url: "https://heosa.africa/wp-content/uploads/2024/06/Media-HCP-Educator-of-the-year-Dr-Thandeka-Ngcobo.jpg",
    title: "HCP Educator Award",
    category: "Events",
    description: "Dr. Thandeka Ngcobo's recognition ceremony"
  },

  // Conferences
  {
    id: 4,
    url: "https://heosa.africa/wp-content/uploads/2024/10/SUMMIT-POSTER-scaled.jpg",
    title: "Healthcare Summit 2024",
    category: "Conferences",
    description: "Annual healthcare leadership summit"
  },
  {
    id: 5,
    url: "https://heosa.africa/wp-content/uploads/2024/10/Awards-Poster.jpg",
    title: "Awards Conference",
    category: "Conferences",
    description: "Healthcare excellence awards conference"
  },

  // Exhibitions
  {
    id: 6,
    url: "https://heosa.africa/wp-content/uploads/2024/06/Most-Compasionate-Noxolo-Singwane.jpg",
    title: "Healthcare Innovation Exhibition",
    category: "Exhibitions",
    description: "Showcasing healthcare innovations"
  },
  {
    id: 7,
    url: "https://heosa.africa/wp-content/uploads/2024/06/Most-Voted-HCP-Noxolo-Singwane.jpg",
    title: "Medical Technology Showcase",
    category: "Exhibitions",
    description: "Latest medical technology exhibition"
  }
];
