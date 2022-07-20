import Link from 'next/link'

export function TableOfContents() {
  return (
    <nav className="sticky toc-top self-start pb-8 px-6 border-l-[1px] border-l-slate-200 shrink-0">
      <ul className="flex flex-col gap-1">
        <li><Link href="#"><a>Setup</a></Link></li>
        <li><Link href="#"><a>Deploy</a></Link></li>
        <li>
        <Link href="#"><a className="pl-2">Deply with Vercel</a></Link>
        </li>
        <li>
        <Link href="#"><a className="pl-2">Deploy with Netlify</a></Link>
        </li>
      </ul>
    </nav>
  );
}


