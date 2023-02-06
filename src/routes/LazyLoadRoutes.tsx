import { lazy, Suspense } from "react";

export function LazyLoadRoutes({ componentName }: { componentName: string }) {
  const LazyElement = lazy(() => import(`../Pages/${componentName}.tsx`));

  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  );
}
