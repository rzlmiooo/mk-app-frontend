'use client'

import React from "react";

// Skeleton loading components (Next.js + Tailwind friendly)
// Usage examples:
// <SkeletonCard />
// <GridSkeleton cols={3} count={6} />

export function SkeletonCard() {
  return (
    <div className="max-w-sm w-full border rounded-lg p-4 bg-neutral-800">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-neutral-700 animate-pulse" />
        <div className="flex-1">
          <div className="h-3 rounded-md bg-neutral-700 animate-pulse w-1/2 mb-2" />
          <div className="h-2 rounded-md bg-neutral-700 animate-pulse w-1/3" />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="h-40 rounded-md bg-neutral-700 relative overflow-hidden">
          {/* diagonal stripes overlay */}
          <div className="absolute inset-0"
               style={{
                 backgroundImage:
                   'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 6px, transparent 6px 12px)'
               }}
          />
          {/* shimmer */}
          <div className="absolute inset-0 shimmer" />
        </div>

        <div className="h-3 rounded-md bg-neutral-700 animate-pulse w-5/6" />
        <div className="h-3 rounded-md bg-neutral-700 animate-pulse w-2/3" />
      </div>

      <style jsx>{`
        .shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%);
          transform: translateX(-30%);
          animation: shimmer 1.2s infinite;
          mix-blend-mode: screen;
        }

        @keyframes shimmer {
          0% { transform: translateX(-30%); }
          100% { transform: translateX(130%); }
        }
      `}</style>
    </div>
  );
}

export function GridSkeleton({ cols = 3, count = 6 }) {
  const items = Array.from({ length: count });
  const colClass = `grid-cols-${cols}`;

  // Tailwind doesn't support dynamic grid-cols via template strings at runtime,
  // so in a real project prefer fixed-ish variants or compute classes elsewhere.

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((_, i) => (
        <div key={i} className="border rounded-lg p-4 bg-neutral-800">
          <div className="h-36 rounded-md bg-neutral-700 relative overflow-hidden">
            <div className="absolute inset-0"
                 style={{
                   backgroundImage:
                     'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 6px, transparent 6px 12px)'
                 }}
            />
            <div className="absolute inset-0 shimmer" />
          </div>

          <div className="mt-3">
            <div className="h-3 rounded-md bg-neutral-700 animate-pulse w-3/4 mb-2" />
            <div className="h-2 rounded-md bg-neutral-700 animate-pulse w-1/2" />
          </div>
        </div>
      ))}

      <style jsx>{`
        .shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%);
          transform: translateX(-30%);
          animation: shimmer 1.2s infinite;
          mix-blend-mode: screen;
        }

        @keyframes shimmer {
          0% { transform: translateX(-30%); }
          100% { transform: translateX(130%); }
        }
      `}</style>
    </div>
  );
}

export default function ExampleUsage() {
  return (
    <div className="space-y-6">
      <SkeletonCard />

      <div>
        <h3 className="text-sm text-neutral-300 mb-2">Grid skeleton</h3>
        <GridSkeleton count={6} />
      </div>
    </div>
  );
}
