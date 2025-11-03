import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  try {
    // Optional: verify secret if configured
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (secret) {
      const url = new URL(req.url);
      const provided = url.searchParams.get('secret') || req.headers.get('x-webhook-secret');
      if (provided !== secret) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
      }
    }

    const body = await req.json().catch(() => ({}));

    // Expecting Sanity webhook payload, e.g. { _type, slug: { current }, paths: [] }
  const paths: string[] = [];

    // Revalidate by slug if present
    const slug = body?.slug?.current as string | undefined;
    const docType = body?._type as string | undefined;

    if (docType === 'article' && slug) {
  paths.push(`/knowledge-base/articles/${slug}`);
    }
    if (docType === 'glossaryTerm' && slug) {
  paths.push(`/glossary/${slug}`);
    }

    // Fallback paths commonly impacted
  paths.push('/');
  paths.push('/sitemap.xml');

    for (const p of paths) {
      revalidatePath(p);
    }

    return NextResponse.json({ revalidated: true, paths: Array.from(new Set(paths)) });
  } catch (err) {
    return NextResponse.json({ revalidated: false, message: (err as Error).message }, { status: 500 });
  }
}
