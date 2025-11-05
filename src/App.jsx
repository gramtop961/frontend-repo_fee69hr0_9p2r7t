import Hero from './components/Hero';
import EditorPreview from './components/EditorPreview';
import Features from './components/Features';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] antialiased">
      <Hero />
      <EditorPreview />
      <Features />
      <FinalCTA />
      <footer className="border-t border-[#E5E7EB] bg-white/70 py-10 text-center text-sm text-[#4B5563] backdrop-blur-md">
        © {new Date().getFullYear()} NeuronForge AI — Build intelligent apps in minutes.
      </footer>
    </div>
  );
}

export default App;
