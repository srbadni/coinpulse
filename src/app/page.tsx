import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex min-h-[calc(100svh-12rem)] items-center justify-center text-center">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">شروع سریع فارسی</p>
          <h1 className="text-4xl font-black tracking-tight text-balance sm:text-6xl">
            سلام دنیا 👋
          </h1>
          <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
            این یک پروژه Next.js با پشتیبانی RTL است.
          </p>
        </div>
        <Button size="lg" className="gap-2">
          شروع توسعه
          <ArrowLeft aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
