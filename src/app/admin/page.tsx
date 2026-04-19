"use client";
import { useState, useEffect } from "react";
import { Users, Bell, FileText, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState<{id: number, text: string, time: string}[]>([
    { id: 1, text: "Alice uploaded Prototype_v1.fig", time: "2m ago" },
    { id: 2, text: "Bob completed Module 1", time: "1hr ago" },
  ]);

  useEffect(() => {
    if (!isLoggedIn) return;
    
    // Set up Supabase Realtime Listener (mocking the channel based on table 'uploads')
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "uploads",
        },
        (payload) => {
          setNotifications(prev => [
            { id: Date.now(), text: `New file uploaded: ${payload.new.filename}`, time: "Just now" },
            ...prev
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="canva-glass p-8 rounded-3xl shadow-xl border border-red-100 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-dark mb-6">Admin Portal</h1>
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-red-primary text-white py-3 rounded-xl font-bold hover:bg-red-dark transition-colors"
          >
            Login as Admin
          </button>
        </div>
      </div>
    );
  }

  const students = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "On Track", progress: "80%" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Needs Review", progress: "45%" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", status: "On Track", progress: "90%" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-red-dark">Admin Dashboard</h1>
        <div className="flex items-center gap-2 canva-glass px-4 py-2 rounded-full border border-red-light shadow-sm">
          <Bell className="w-5 h-5 text-red-primary" />
          <span className="font-semibold">{notifications.length} Alerts</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="canva-glass rounded-3xl shadow-sm border border-red-50 overflow-hidden">
            <div className="p-6 border-b border-surface/50 bg-red-light/10">
              <h2 className="text-xl font-bold text-red-dark flex items-center gap-2">
                <Users className="w-5 h-5" /> Student Management
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface/50 text-foreground/60 text-sm">
                  <tr>
                    <th className="p-4 pl-6 font-semibold">Student</th>
                    <th className="p-4 font-semibold">Email</th>
                    <th className="p-4 font-semibold">Progress</th>
                    <th className="p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface/50">
                  {students.map((s) => (
                    <tr key={s.id} className="hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
                      <td className="p-4 pl-6 font-medium">{s.name}</td>
                      <td className="p-4 text-foreground/60">{s.email}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-slate-200 rounded-full h-2 max-w-[100px]">
                            <div className="bg-red-primary h-2 rounded-full" style={{ width: s.progress }}></div>
                          </div>
                          <span className="text-sm font-medium text-foreground/70">{s.progress}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          s.status === 'On Track' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="canva-glass rounded-3xl shadow-sm border border-blue-50 p-6 h-full">
            <h2 className="text-xl font-bold text-blue-dark flex items-center gap-2 mb-6">
              <Bell className="w-5 h-5" /> Live Feed
            </h2>
            <div className="space-y-4">
              {notifications.map((n) => (
                <div key={n.id} className="p-3 bg-blue-light/20 border border-blue-100 rounded-xl flex gap-3 items-start animate-fade-in">
                  <div className="mt-1 flex-shrink-0">
                    <FileText className="w-4 h-4 text-blue-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{n.text}</p>
                    <p className="text-xs text-foreground/50 mt-1">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center text-xs text-foreground/40 gap-1 border-t border-surface/50 pt-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Connected to Supabase Realtime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

