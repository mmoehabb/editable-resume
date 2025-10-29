import React from "react";
import { Resume, Project, EducationItem, Certificate, Language, Experience } from "@/types/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";

interface ResumeEditorProps {
  resume: Resume;
  onChange: (resume: Resume) => void;
}

export default function ResumeEditor({ resume, onChange }: ResumeEditorProps) {
  const updateField = <K extends keyof Resume>(field: K, value: Resume[K]) => {
    onChange({ ...resume, [field]: value });
  };

  const updateContactInfo = (field: keyof typeof resume.contactInfo, value: string) => {
    onChange({
      ...resume,
      contactInfo: { ...resume.contactInfo, [field]: value },
    });
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    onChange({
      ...resume,
      projects: resume.projects.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "New Project",
      date: new Date().getFullYear().toString(),
      description: "",
    };
    onChange({ ...resume, projects: [...resume.projects, newProject] });
  };

  const removeProject = (id: string) => {
    onChange({ ...resume, projects: resume.projects.filter((p) => p.id !== id) });
  };

  const updateEducation = (id: string, updates: Partial<EducationItem>) => {
    onChange({
      ...resume,
      education: resume.education.map((e) => (e.id === id ? { ...e, ...updates } : e)),
    });
  };

  const addEducation = () => {
    const newEducation: EducationItem = {
      id: Date.now().toString(),
      institution: "New Institution",
      date: new Date().getFullYear().toString(),
      degree: "Degree",
      major: "Major",
    };
    onChange({ ...resume, education: [...resume.education, newEducation] });
  };

  const removeEducation = (id: string) => {
    onChange({ ...resume, education: resume.education.filter((e) => e.id !== id) });
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    onChange({
      ...resume,
      experience: resume.experience.map((exp) => (exp.id === id ? { ...exp, ...updates } : exp)),
    });
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "New Company",
      position: "Position",
      startDate: new Date().getFullYear().toString(),
      endDate: "Present",
      description: "",
    };
    onChange({ ...resume, experience: [...resume.experience, newExperience] });
  };

  const removeExperience = (id: string) => {
    onChange({ ...resume, experience: resume.experience.filter((exp) => exp.id !== id) });
  };

  const updateCertificate = (id: string, updates: Partial<Certificate>) => {
    onChange({
      ...resume,
      certificates: resume.certificates.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    });
  };

  const addCertificate = () => {
    const newCertificate: Certificate = {
      id: Date.now().toString(),
      title: "New Certificate",
      date: new Date().getFullYear().toString(),
      organization: "Organization",
    };
    onChange({ ...resume, certificates: [...resume.certificates, newCertificate] });
  };

  const removeCertificate = (id: string) => {
    onChange({ ...resume, certificates: resume.certificates.filter((c) => c.id !== id) });
  };

  const updateLanguage = (index: number, updates: Partial<Language>) => {
    onChange({
      ...resume,
      languages: resume.languages.map((l, i) => (i === index ? { ...l, ...updates } : l)),
    });
  };

  const addLanguage = () => {
    const newLanguage: Language = {
      name: "New Language",
      proficiency: "Proficiency Level",
    };
    onChange({ ...resume, languages: [...resume.languages, newLanguage] });
  };

  const removeLanguage = (index: number) => {
    onChange({ ...resume, languages: resume.languages.filter((_, i) => i !== index) });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 space-y-8">
      {/* Header Section */}
      <div className="space-y-4 pb-6 border-b border-gray-200">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            value={resume.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="text-2xl font-bold"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <Input
            value={resume.jobTitle}
            onChange={(e) => updateField("jobTitle", e.target.value)}
            className="text-lg"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              value={resume.contactInfo.email}
              onChange={(e) => updateContactInfo("email", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <Input
              value={resume.contactInfo.website}
              onChange={(e) => updateContactInfo("website", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <Input
              value={resume.contactInfo.phone}
              onChange={(e) => updateContactInfo("phone", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <Input
              value={resume.contactInfo.location}
              onChange={(e) => updateContactInfo("location", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">Professional Summary</h3>
        <Textarea
          value={resume.summary}
          onChange={(e) => updateField("summary", e.target.value)}
          rows={4}
        />
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Projects</h3>
          <Button onClick={addProject} size="sm" variant="outline">
            <Plus size={16} className="mr-2" />
            Add Project
          </Button>
        </div>
        <div className="space-y-4">
          {resume.projects.map((project) => (
            <div key={project.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <Input
                      value={project.title}
                      onChange={(e) => updateProject(project.id, { title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <Input
                      value={project.date}
                      onChange={(e) => updateProject(project.id, { date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <Textarea
                      value={project.description}
                      onChange={(e) => updateProject(project.id, { description: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
                <Button
                  onClick={() => removeProject(project.id)}
                  size="sm"
                  variant="ghost"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Experience</h3>
          <Button onClick={addExperience} size="sm" variant="outline">
            <Plus size={16} className="mr-2" />
            Add Experience
          </Button>
        </div>
        <div className="space-y-4">
          {resume.experience.map((exp) => (
            <div key={exp.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    <Input
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <Input
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                      </label>
                      <Input
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
                <Button
                  onClick={() => removeExperience(exp.id)}
                  size="sm"
                  variant="ghost"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Education</h3>
          <Button onClick={addEducation} size="sm" variant="outline">
            <Plus size={16} className="mr-2" />
            Add Education
          </Button>
        </div>
        <div className="space-y-4">
          {resume.education.map((edu) => (
            <div key={edu.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Institution
                    </label>
                    <Input
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                      </label>
                      <Input
                        value={edu.date}
                        onChange={(e) => updateEducation(edu.id, { date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Degree
                      </label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Major
                    </label>
                    <Input
                      value={edu.major}
                      onChange={(e) => updateEducation(edu.id, { major: e.target.value })}
                    />
                  </div>
                </div>
                <Button
                  onClick={() => removeEducation(edu.id)}
                  size="sm"
                  variant="ghost"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Languages</h3>
          <Button onClick={addLanguage} size="sm" variant="outline">
            <Plus size={16} className="mr-2" />
            Add Language
          </Button>
        </div>
        <div className="space-y-3">
          {resume.languages.map((lang, idx) => (
            <div key={idx} className="flex justify-between items-end gap-3">
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <Input
                    value={lang.name}
                    onChange={(e) => updateLanguage(idx, { name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Proficiency
                  </label>
                  <Input
                    value={lang.proficiency}
                    onChange={(e) => updateLanguage(idx, { proficiency: e.target.value })}
                  />
                </div>
              </div>
              <Button
                onClick={() => removeLanguage(idx)}
                size="sm"
                variant="ghost"
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Certificates</h3>
          <Button onClick={addCertificate} size="sm" variant="outline">
            <Plus size={16} className="mr-2" />
            Add Certificate
          </Button>
        </div>
        <div className="space-y-4">
          {resume.certificates.map((cert) => (
            <div key={cert.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <Input
                      value={cert.title}
                      onChange={(e) => updateCertificate(cert.id, { title: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                      </label>
                      <Input
                        value={cert.date}
                        onChange={(e) => updateCertificate(cert.id, { date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Organization
                      </label>
                      <Input
                        value={cert.organization}
                        onChange={(e) => updateCertificate(cert.id, { organization: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => removeCertificate(cert.id)}
                  size="sm"
                  variant="ghost"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
