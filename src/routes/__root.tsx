import type { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
