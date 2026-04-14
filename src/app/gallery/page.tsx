import Image from "next/image";

export default function GalleryPage() {
  const portfolioItems = [
    { id: 1, title: "Modern Dashboard UI", student: "Alice Johnson", image: "https://images.unsplash.com/photo-1547658719-da2b511591bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-64" },
    { id: 2, title: "Brand Identity - Eco", student: "Bob Smith", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-96" },
    { id: 3, title: "Mobile Banking App", student: "Charlie Davis", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-80" },
    { id: 4, title: "3D Illustration Pack", student: "Diana Prince", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-72" },
    { id: 5, title: "E-Commerce Web", student: "Evan Wright", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-96" },
    { id: 6, title: "Typography Poster", student: "Fiona Apple", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-64" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-blue-dark mb-4">Student Portfolio</h1>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Explore the incredible work crafted by our interns. A celebration of design applied to reality.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="break-inside-avoid relative group rounded-3xl overflow-hidden bg-white shadow-sm border border-blue-50">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: '250px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
              <p className="text-white/80 text-sm">By {item.student}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

