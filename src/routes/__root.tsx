import type { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
} from "@tanstack/react-router";
import { useEffect } from 'react';
import { Layout } from "@/components/Layout";

function NotFoundComponent() {
  return (
    <section>
      <div className="container" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <section>
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Something went wrong</h1>
        <p>We couldn't load this page. Try again or go home.</p>
        <div className="btn-group" style={{ justifyContent: "center" }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <Link to="/" className="btn btn-outline">
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}

function RootComponent() {
  const location = useLocation(); // 1. Monitor the route state

  useEffect(() => {
    // 2. Immediate fail-safe: Force a scroll reset on the new page view
    window.scrollTo(0, 0);

    // 3. Define a quick check function for elements inside the viewport
    const runRevealCheck = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If the element is within or above the viewport, show it
        if (rect.top < window.innerHeight) {
          el.classList.add("in");
        }
      });
    };

    // 4. Run it immediately for elements already at the top of the new page
    setTimeout(runRevealCheck, 50);

    // 5. Re-attach scroll event listener for any elements further down the page
    window.addEventListener("scroll", runRevealCheck);
    return () => window.removeEventListener("scroll", runRevealCheck);
  }, [location.pathname]); // 🔥 Fires every time you change pages!

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
