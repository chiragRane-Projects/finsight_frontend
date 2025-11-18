export default function VideoSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">See FinSight AI in Action</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">Experience the power of AI-driven financial insights</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video 
              className="w-full h-96 object-cover"
              controls
              poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            >
              <source src="/fintech.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}