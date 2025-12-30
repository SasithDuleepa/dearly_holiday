import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const category = formData.get('category') as string;

  if (!file || !category) {
    return NextResponse.json({ error: 'File and category are required' }, { status: 400 });
  }

  const categoryPaths: { [key: string]: string } = {
    'cooking-class': 'cooking home',
    'guest-house': 'guest house',
    'safari': 'safari',
  };

  const dirName = categoryPaths[category];
  if (!dirName) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'images', dirName);

  try {
    await fs.mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);
    return NextResponse.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Upload failed:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
