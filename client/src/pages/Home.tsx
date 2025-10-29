import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Edit2, Eye } from "lucide-react";
import ResumeDisplay from "@/components/ResumeDisplay";
import ResumeEditor from "@/components/ResumeEditor";
import { Resume } from "@/types/resume";
import { defaultResume } from "@/data/defaultResume";

const STORAGE_KEY = "resume-data";

export default function Home() {
  const [resume, setResume] = useState<Resume>(defaultResume);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load resume from local storage on mount
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.experience) {
          parsed.experience = [];
        }
        setResume(parsed);
      } catch (error) {
        console.error("Failed to load resume from storage", error);
      }
    }
  }, []);

  // Save resume to local storage whenever it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
    }
  }, [resume, isMounted]);

  const handleDownloadPDF = () => {
    const element = document.querySelector(".resume-container");
    if (element) {
      window.print();
    }
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset the resume to the default content?")) {
      setResume(defaultResume);
    }
  };

  if (!isMounted) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Editable Resume</h1>
          <div className="flex gap-2">
            <Button
              onClick={() => setIsEditMode(!isEditMode)}
              variant={isEditMode ? "default" : "outline"}
              size="sm"
            >
              {isEditMode ? (
                <>
                  <Eye size={16} className="mr-2" />
                  Preview
                </>
              ) : (
                <>
                  <Edit2 size={16} className="mr-2" />
                  Edit
                </>
              )}
            </Button>
            <Button
              onClick={handleDownloadPDF}
              variant="outline"
              size="sm"
              className="print:hidden"
            >
              <Download size={16} className="mr-2" />
              Print/PDF
            </Button>
            <Button
              onClick={handleReset}
              variant="ghost"
              size="sm"
              className="print:hidden"
            >
              Reset
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="print:p-0">
        <div className="resume-container">
          {isEditMode ? (
            <ResumeEditor resume={resume} onChange={setResume} />
          ) : (
            <ResumeDisplay resume={resume} />
          )}
        </div>
      </main>
    </div>
  );
}
