"use client"

export default function LandingPage({ onProceed }) {
  return (
    <main className="relative h-screen w-full overflow-hidden" >
      
      {/* Background Image */}
      <div className="absolute inset-0" >
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000"
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> 
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I am <strong style={{color:'#00d492'}}> Shivam Glotra</strong>
        </h1>
        <h2 className="!text-3xl md:text-2xl mb-6 !pt-4 !text-green-400">
          Computer Science Student & Frontend Developer
        </h2>
        <p className="text-lg md:text-2xl !text-white/90 max-w-2xl mb-8">
          Welcome to my portfolio! Explore my projects, skills, and experiences as a passionate developer.
        </p>

        <button 
          onClick={onProceed}
          className="px-8 py-3 text-lg bg-red-900 hover:bg-teal-900 rounded-full shadow-lg transition"
          style={{ width: '200px' , height: '50px'}}
        >
          Go to Portfolio
        </button>
      </div>
    </main>
  )
}
