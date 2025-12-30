import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    const categories = fs.readdirSync(galleryDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const imagesByCategory = categories.reduce((acc, category) => {
      const categoryDir = path.join(galleryDir, category);
      const imageFiles = fs.readdirSync(categoryDir);
      const imageUrls = imageFiles.map(file => `/gallery/${category}/${file}`);
      acc[category.replace(/\s/g, '-').toLowerCase()] = imageUrls;
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
