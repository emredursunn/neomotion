import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.neomotion.com.tr'; // Lütfen burayı kendi alan adınızla güncelleyin

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Örnek olarak, private bir sayfanız varsa buraya ekleyebilirsiniz
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
