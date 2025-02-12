import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";

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

  const firstYear: Course[] = [
    {
      code: "AER 222",
      name: "Engineering Design and Graphics",
      grade: "A",
      term: "Fall 2022",
    },
    {
      code: "CEN 100",
      name: "Introduction to Engineering",
      grade: "A+",
      term: "Fall 2022",
    },
    {
      code: "CHY 102",
      name: "General Chemistry",
      grade: "A",
      term: "Fall 2022",
    },
    {
      code: "CMN 432",
      name: "Communication in the Engineering Professions",
      grade: "A+",
      term: "Fall 2022",
    },
    { code: "MTH 140", name: "Calculus I", grade: "A", term: "Fall 2022" },
    {
      code: "MTH 141",
      name: "Linear Algebra",
      grade: "A",
      term: "Winter 2023",
    },
    { code: "MTH 240", name: "Calculus II", grade: "A", term: "Winter 2023" },
    {
      code: "PCS 211",
      name: "Physics: Mechanics",
      grade: "A+",
      term: "Winter 2023",
    },
    {
      code: "PCS 125",
      name: "Physics: Waves and Fields",
      grade: "A",
      term: "Winter 2023",
    },
  ];

  const secondYear: Course[] = [
    {
      code: "AER 202",
      name: "Vector Calculus and Partial Differential Equations",
      grade: "A",
      term: "Fall 2023",
    },
    {
      code: "AER 215",
      name: "Scientific Computing for Mechanical and Aerospace Engineers",
      grade: "A+",
      term: "Fall 2023",
    },
    {
      code: "AER 301",
      name: "Engineering Design Project",
      grade: "A",
      term: "Fall 2023",
    },
    { code: "AER 303", name: "Fluid Mechanics", grade: "A", term: "Fall 2023" },
    {
      code: "AER 309",
      name: "Model-Based Design for Aerospace Systems",
      grade: "A",
      term: "Winter 2024",
    },
    {
      code: "AER 315",
      name: "Introduction to Aerospace Engineering",
      grade: "A+",
      term: "Winter 2024",
    },
    {
      code: "AER 322",
      name: "Engineering Design Project",
      grade: "In Progress",
      term: "Winter 2024",
    },
    {
      code: "MEC 411",
      name: "Mechanics of Machines and Mechanisms",
      grade: "In Progress",
      term: "Winter 2024",
    },
    {
      code: "MEC 516",
      name: "Mechanics of Materials",
      grade: "In Progress",
      term: "Winter 2024",
    },
  ];

  const specialization = {
    focus: "Aircraft Design & Avionics",
    details: [
      "Emphasis on flight control systems and autonomous aircraft",
      "Research in propulsion technology and aerodynamics",
      "Active participation in aerospace design teams",
    ],
    certifications: [
      "Canadian Private Pilot License (In Progress)",
      "Certified SolidWorks Associate (CSWA)",
      "Advanced Composite Manufacturing Workshop",
      "High-Pressure Systems Safety Certification",
    ],
  };

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
              className="text-primary hover:underline ml-2"
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
              <h4 className="font-semibold mb-3">First Year</h4>
              <div className="grid gap-2">
                {firstYear.map((course, index) => (
                  <div
                    key={index}
                    className="text-sm text-muted-foreground p-2 rounded-lg border"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Second Year</h4>
              <div className="grid gap-2">
                {secondYear.map((course, index) => (
                  <div
                    key={index}
                    className="text-sm text-muted-foreground p-2 rounded-lg border"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Third Year</h4>
              <div className="grid gap-2">
                {thirdYear.map((course, index) => (
                  <div
                    key={index}
                    className="text-sm text-muted-foreground p-2 rounded-lg border"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Fourth Year</h4>
              <div className="grid gap-2">
                {fourthYear.map((course, index) => (
                  <div
                    key={index}
                    className="text-sm text-muted-foreground p-2 rounded-lg border"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Additional Information</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Optional 12-16 month co-op/internship opportunity</li>
              <li>
                Accredited by the Canadian Engineering Accreditation Board
              </li>
              <li>Access to state-of-the-art aerospace facilities and labs</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
