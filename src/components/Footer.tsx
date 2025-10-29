import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© 2025 Abhishek Clinton</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Designed with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for data, strategy, and storytelling
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
            <span>Digital Marketing Strategist</span>
            <span>•</span>
            <span>Programmatic Advertising</span>
            <span>•</span>
            <span>Audience Segmentation</span>
            <span>•</span>
            <span>GA4 Dashboards</span>
            <span>•</span>
            <span>Data Storytelling</span>
          </div>

          <div className="text-xs text-slate-600 text-center max-w-2xl">
            Keywords: marketing analytics, e-commerce growth, media strategy, performance marketing, consumer analytics, brand strategy, digital storytelling
          </div>
        </div>
      </div>
    </footer>
  );
}
