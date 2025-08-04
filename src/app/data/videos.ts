export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export const videos: Video[] = [
  {
    id: "video-001",
    title: "Neomotion Reklam Filmi",
    description: "Yapay zeka ile hazırlanan modern ve dinamik reklam filmimiz.",
    videoUrl: "/videos/neomotion-col-reklam.mp4",
  },
  {
    id: "video-002",
    title: "Ünal Tesisat Reklam Filmi",
    description: "Ünal Tesisat için hazırladığımız dikkat çekici reklam filmi.",
    videoUrl: "/videos/unal-tesisat-reklam.mp4",
  },
];
