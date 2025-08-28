import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Skeleton className="h-9 w-32" />
        </div>

        {/* Header description skeleton */}
        <div className="mb-8">
          <Skeleton className="h-6 w-full max-w-2xl mb-2" />
          <Skeleton className="h-6 w-3/4" />
        </div>

        {/* Search bar skeleton */}
        <div className="mb-8">
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>

        {/* Category filters skeleton */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-lg" />
            ))}
          </div>
          <Skeleton className="h-5 w-20" />
        </div>

        {/* Results section skeleton */}
        <div className="mb-6">
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Course cards grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card border rounded-lg overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <div className="p-6">
                <Skeleton className="h-4 w-20 mb-3" />
                <Skeleton className="h-6 w-full mb-3" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
  