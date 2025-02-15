import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

interface EducationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EducationDialog({ isOpen, onClose }: EducationDialogProps) {
  interface Course {
    code: string;
    name: string;
    grade?: string;
    term?: string;
  }

  const [courses, setCourses] = useState<{
    thirdYear: Course[];
    fourthYear: Course[];
    specialization: {
      focus: string;
      details: string[];
    };
  }>({
    thirdYear: [],
    fourthYear: [],
    specialization: {
      focus: "",
      details: [],
    },
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/data/courses.txt");
        const text = await response.text();
        const lines = text.split("\n");

        const parsedCourses = {
          thirdYear: [] as Course[],
          fourthYear: [] as Course[],
          specialization: {
            focus: "",
            details: [] as string[],
          },
        };

        let currentSection = "";

        lines.forEach((line) => {
          if (line.startsWith("[")) {
            currentSection = line.slice(1, -1);
          } else if (line && !line.startsWith("#")) {
            if (
              currentSection === "Third Year" ||
              currentSection === "Fourth Year"
            ) {
              const parts = line.split("|").map((s) => s.trim());
              if (parts.length >= 2) {
                const courseInfo = parts[0];
                const grade = parts[1];
                const term = parts[2] || "";

                const [code, ...nameParts] = courseInfo.split(" - ");
                const name = nameParts.join(" - ").trim();

                const course = {
                  code: code.trim(),
                  name: name || code, // Use code as name if name is empty
                  grade: grade || "",
                  term,
                };

                if (currentSection === "Third Year") {
                  parsedCourses.thirdYear.push(course);
                } else if (currentSection === "Fourth Year") {
                  parsedCourses.fourthYear.push(course);
                }
              }
            } else if (currentSection === "Specialization") {
              if (line.startsWith("Specialization:")) {
                parsedCourses.specialization.focus = line.split(":")[1].trim();
              } else if (line.startsWith(">")) {
                parsedCourses.specialization.details.push(line.slice(2).trim());
              }
            }
          }
        });

        setCourses(parsedCourses);
      } catch (error) {
        console.error("Error loading courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Bachelor of Engineering - Aerospace Engineering
          </DialogTitle>
          <DialogDescription>
            Toronto Metropolitan University (2022 - 2026)
            <a
              href="https://www.torontomu.ca/calendar/2024-2025/programs/feas/aerospace/"
              className="text-blue-500 hover:text-blue-600 hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Course Calendar →
            </a>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold mb-3">Program Overview</h4>
            <p className="text-sm text-muted-foreground">
              The Aerospace Engineering program at TMU provides comprehensive
              education in aircraft and spacecraft design, analysis,
              manufacturing and maintenance. The curriculum combines theoretical
              foundations with practical experience through design projects and
              laboratory work.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3">Third Year</h4>
              <div className="grid gap-2">
                {courses.thirdYear.map((course, index) => {
                  const getBadgeColor = (grade: string) => {
                    switch (grade) {
                      case "Passed":
                        return "bg-green-500 text-white hover:bg-green-600";
                      case "Current":
                        return "bg-blue-500 text-white hover:bg-blue-600";
                      case "Upcoming":
                        return "bg-yellow-500 text-white hover:bg-yellow-600";
                      default:
                        return "bg-muted";
                    }
                  };

                  return (
                    <div
                      key={index}
                      className="text-sm p-3 rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-sm"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <div className="font-medium text-base mb-1">
                            {course.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {course.code}
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`text-xs whitespace-nowrap ${getBadgeColor(course.grade || "")}`}
                        >
                          {course.grade}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Fourth Year</h4>
              <div className="grid gap-2">
                {courses.fourthYear.map((course, index) => {
                  const getBadgeColor = (grade: string) => {
                    switch (grade) {
                      case "Passed":
                        return "bg-green-500 text-white hover:bg-green-600";
                      case "Current":
                        return "bg-blue-500 text-white hover:bg-blue-600";
                      case "Upcoming":
                        return "bg-yellow-500 text-white hover:bg-yellow-600";
                      default:
                        return "bg-muted";
                    }
                  };

                  return (
                    <div
                      key={index}
                      className="text-sm p-3 rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-sm"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <div className="font-medium text-base mb-1">
                            {course.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {course.code}
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`text-xs whitespace-nowrap ${getBadgeColor(course.grade || "")}`}
                        >
                          {course.grade}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Specialization</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border">
                <h5 className="font-medium mb-2">
                  Focus: {courses.specialization.focus}
                </h5>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {courses.specialization.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
