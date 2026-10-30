
import { profile } from "../data/portfolio";

const L = ({
  href,
  children,
}: {
  href?: string;
  children: string;
}) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-lime"
    >
      {children}
    </a>
  ) : (
    <span
      className="opacity-40"
      title="Add URL in src/data/portfolio.ts"
    >
      {children}
    </span>
  );

export default function Footer() {
  return (
    <footer className="border-t line px-5 py-10 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 text-sm tracking-wider text-mute md:grid-cols-3 md:items-center">
        <a href="#home" className="text-lg font-bold text-fg">
          JUG KALARIA<sup>®</sup>
        </a>

        <p className="md:text-center">
          CREATIVE DEVELOPER · INDIA
        </p>

        <div className="flex flex-wrap gap-5 md:justify-end">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-lime"
          >
            Email
          </a>

          <L href="https://github.com/jugkalaria116-create">
            GitHub
          </L>

          <L href="https://www.linkedin.com/in/jug-kalaria-02a5242b4/">
            LinkedIn
          </L>

          <a href="#home" className="hover:text-lime">
            Back to Top ↑
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-7xl text-xs tracking-[0.2em] text-mute">
        © {new Date().getFullYear()} JUG KALARIA · DESIGNED WITH
        CURIOSITY. BUILT WITH CODE.
      </p>
    </footer>
  );
}
