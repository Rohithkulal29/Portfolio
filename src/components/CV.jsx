// Download icon as SVG component
const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 16l-5-5h3V4h4v7h3l-5 5z"/>
    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"/>
  </svg>
);

// PDF icon as SVG component
const PDFIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
  </svg>
);

export default function CV() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rohith_Kulal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="p-10 backdrop-blur-sm bg-black/30 rounded-xl shadow-lg m-4">
      <div className="text-center space-y-8">
        {/* Changed text-red-400 to text-cyan-400 for a cyan glow */}
        <h2 className="text-3xl font-bold mb-6 neon-glow text-cyan-400">
          My Resume
        </h2>

        <div className="space-y-6">
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Download my complete resume to get detailed information about my skills,
            experience, education, and projects. Available in PDF format for easy viewing and printing.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25"
            >
              <DownloadIcon />
              <span>Download Resume</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* View Button */}
            <button
              onClick={handleView}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
            >
              <PDFIcon />
              <span>View Resume</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}