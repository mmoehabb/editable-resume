import React from "react";
import { Resume } from "@/types/resume";
import { Mail, Globe, Phone, MapPin } from "lucide-react";

interface ResumeDisplayProps {
  resume: Resume;
}

export default function ResumeDisplay({ resume }: ResumeDisplayProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white p-12 shadow-lg print:shadow-none">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-200">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {resume.fullName}
          </h1>
          <p className="text-xl text-gray-600">{resume.jobTitle}</p>
        </div>
        <div className="text-right text-sm text-gray-600 space-y-1">
          <div className="flex items-center justify-end gap-2">
            <Mail size={14} />
            <a href={`mailto:${resume.contactInfo.email}`} className="hover:text-blue-600">
              {resume.contactInfo.email}
            </a>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Globe size={14} />
            <a href={resume.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              {resume.contactInfo.website}
            </a>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Phone size={14} />
            <span>{resume.contactInfo.phone}</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <MapPin size={14} />
            <span>{resume.contactInfo.location}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed text-sm">
          {resume.summary}
        </p>
      </div>

      {/* Projects Section */}
      {resume.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Projects
          </h2>
          <div className="space-y-4">
            {resume.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience Section */}
      {resume.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Experience
          </h2>
          <div className="space-y-4">
            {resume.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mt-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Section */}
      {resume.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Education
          </h2>
          <div className="space-y-4">
            {resume.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                  <span className="text-sm text-gray-600">{edu.date}</span>
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  {edu.degree} {edu.major && `- ${edu.major}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages Section */}
      {resume.languages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Languages
          </h2>
          <div className="text-sm text-gray-700">
            {resume.languages.map((lang, idx) => (
              <span key={idx}>
                <span className="font-semibold">{lang.name}</span> ({lang.proficiency})
                {idx < resume.languages.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certificates Section */}
      {resume.certificates.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300">
            Certificates
          </h2>
          <div className="space-y-4">
            {resume.certificates.map((cert) => (
              <div key={cert.id}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{cert.title}</h3>
                  <span className="text-sm text-gray-600">{cert.date}</span>
                </div>
                <p className="text-sm text-gray-600">{cert.organization}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
