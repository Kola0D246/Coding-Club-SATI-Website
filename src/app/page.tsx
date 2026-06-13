// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Testing the Fonts and Text Colors */}
      <h1 className="text-5xl font-bold mb-4 font-heading">
        Coding Club <span className="text-primary">SATI</span>
      </h1>
      <p className="text-muted-foreground mb-12">
        Testing the Cyberpunk Theme Integration
      </p>

      {/* Testing the Glassmorphism and Neon Accents */}
      <div className="glass p-8 rounded-2xl max-w-md w-full text-center glass-hover transition-all duration-300">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Glassmorphism Active
        </h2>
        <p className="text-foreground">
          This card should have a blurred, semi-transparent background with a subtle cyan border that glows when hovered.
        </p>
      </div>
    </main>
  );
}