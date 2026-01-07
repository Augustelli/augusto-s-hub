import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

/**
 * 404 Not Found Page
 * 
 * Provides a clear message and navigation back to home.
 * Includes proper SEO meta to prevent indexing of 404 pages.
 */

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Augusto Tomás Mancuso</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <main 
        className="min-h-screen bg-background flex items-center justify-center px-4"
        role="main"
      >
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page not found
          </h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Go to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-muted border border-border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Go Back
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
