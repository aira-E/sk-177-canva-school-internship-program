"use client";
import { useState, useRef } from "react";
import { Upload, File, CheckCircle } from "lucide-react";
import { uploadFile } from "../actions";

export default function StudentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedBlob, setUploadedBlob] = useState<{ url: string } | null>(null);

  if (!isLoggedIn) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="canva-glass p-8 rounded-3xl shadow-xl w-full max-w-md text-center border border-blue-100">
          <h1 className="text-2xl font-bold text-blue-dark mb-6">Student Portal</h1>
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-blue-primary text-white py-3 rounded-xl font-bold hover:bg-blue-dark transition-colors"
          >
            Login as Student
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 w-full">
      <h1 className="text-4xl font-bold text-blue-dark mb-8">Welcome back, Student</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="canva-glass rounded-3xl p-8 shadow-sm border border-blue-50">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Current Modules</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-red-light/30 rounded-2xl border border-red-light">
                <div className="flex items-center gap-3">
                  <div className="bg-red-primary text-white p-2 rounded-lg">1</div>
                  <span className="font-semibold">Design Fundamentals</span>
                </div>
                <span className="text-red-dark font-medium bg-white px-3 py-1 rounded-full text-sm">Completed</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-light/30 rounded-2xl border border-blue-light">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-primary text-white p-2 rounded-lg">2</div>
                  <span className="font-semibold">Interactive Prototypes</span>
                </div>
                <span className="text-blue-dark font-medium bg-white px-3 py-1 rounded-full text-sm">Due in 2 days</span>
              </div>
            </div>
          </div>

          <div className="canva-glass rounded-3xl p-8 shadow-sm border border-blue-50">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Submit Work</h2>
            <form action={async (formData) => {
              setUploading(true);
              try {
                const result = await uploadFile(formData);
                setUploadedBlob({ url: result.url });
              } catch (e) {
                console.error("Upload failed", e);
              }
              setUploading(false);
            }} className="border-2 border-dashed border-blue-light rounded-2xl p-8 text-center bg-blue-50/50 hover:bg-blue-50 hover:border-blue-primary transition-all group">
              <input type="file" name="file" id="file" className="hidden" />
              <label htmlFor="file" className="cursor-pointer flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-primary mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Upload className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg mb-1 block">Drag & drop your file</span>
                <span className="text-foreground/50 text-sm">or click to browse from computer</span>
              </label>
              <div className="mt-6 flex justify-center">
                <button type="submit" disabled={uploading} className="bg-blue-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-dark disabled:opacity-50">
                  {uploading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </form>
            {uploadedBlob && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>File uploaded successfully!</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-red-dark/80 backdrop-blur-md border border-red-dark/50 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Deadlines</h2>
            <ul className="space-y-4">
              <li className="flex justify-between pb-4 border-b border-white/20">
                <span>Prototype V1</span>
                <span className="font-bold">Oct 12</span>
              </li>
              <li className="flex justify-between pb-4 border-b border-white/20">
                <span>Peer Review</span>
                <span className="font-bold">Oct 15</span>
              </li>
            </ul>
          </div>
          
          <div className="canva-glass rounded-3xl p-8 shadow-sm border border-blue-50">
            <h2 className="text-xl font-bold mb-4">FAQ</h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="font-medium cursor-pointer list-none flex justify-between items-center text-blue-dark">
                  Need an extension?
                  <span className="transition group-open:rotate-180">+</span>
                </summary>
                <p className="text-sm text-foreground/70 mt-2">Reach out to your mentor at least 24h before the deadline.</p>
              </details>
              <details className="group">
                <summary className="font-medium cursor-pointer list-none flex justify-between items-center text-blue-dark">
                  File size limits?
                  <span className="transition group-open:rotate-180">+</span>
                </summary>
                <p className="text-sm text-foreground/70 mt-2">Uploads via Vercel Blob support up to 50MB per file in this module.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

