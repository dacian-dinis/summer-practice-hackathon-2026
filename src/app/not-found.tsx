import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound(): JSX.Element {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="space-y-2">
        <div className="text-6xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
          404
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          We couldn&apos;t find the page you were looking for.
        </p>
      </div>
      <Link href="/">
        <Button type="button">Back to home</Button>
      </Link>
    </div>
  );
}
