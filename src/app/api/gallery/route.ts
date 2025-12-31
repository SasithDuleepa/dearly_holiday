import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = "force-static";

export async function GET(req: NextRequest) {
  try {
    const categoryPaths = {
      'cooking-class': 'cooking class',
      'guest-house': 'guest house',
      'safari': 'safari',
    };

    const imagesByCategory = Object.entries(categoryPaths).reduce((acc, [category, dirName]) => {
      const categoryDir = path.join(process.cwd(), 'public', 'gallery', dirName);
      try {
        if (fs.existsSync(categoryDir)) {
          const imageFiles = fs.readdirSync(categoryDir);
          const imageUrls = imageFiles.map(file => `/gallery/${dirName}/${file}`);
          acc[category] = imageUrls;
        } else {
          acc[category] = [];
        }
      } catch (e) {
        console.error(e)
        acc[category] = [];
      }
      return acc;
    }, {} as Record<string, string[]>);

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '9', 10);
    const filter = searchParams.get('filter') || 'all';

    let allImages: string[] = [];
    if (filter === 'all') {
      allImages = Object.values(imagesByCategory).flat();
    } else {
      allImages = imagesByCategory[filter] || [];
    }

    const totalImages = allImages.length;
    const totalPages = Math.ceil(totalImages / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedImages = allImages.slice(startIndex, endIndex);

    return NextResponse.json({
      images: paginatedImages,
      totalPages,
      currentPage: page,
      allImages: imagesByCategory,
    });

  } catch (error) {
    console.error('Failed to read gallery images:', error);
    return NextResponse.json({ error: 'Failed to read gallery images' }, { status: 500 });
  }
}
