import React from 'react';

// Add interface for student type
interface Student {
  name: string;
  age: number;
  belt: string;
  achievements: string[];
}

// Add color mapping for belts
const getBeltColor = (belt: string): string => {
  const beltLower = belt.toLowerCase();
  if (beltLower.includes('black')) {
    return 'border-gray-800 group-hover/item:border-gray-900 group-hover/item:shadow-[0_0_30px_rgba(0,0,0,0.4)]';
  }
  if (beltLower.includes('red')) {
    return 'border-red-500 group-hover/item:border-red-600 group-hover/item:shadow-[0_0_30px_rgba(239,68,68,0.4)]';
  }
  if (beltLower.includes('blue')) {
    return 'border-blue-500 group-hover/item:border-blue-600 group-hover/item:shadow-[0_0_30px_rgba(59,130,246,0.4)]';
  }
  return 'border-gray-200';
};

// Update the belt section colors (remove borders)
const getBeltSectionColor = (belt: string): string => {
  if (belt === 'black') {
    return 'bg-black';  // Removed border and shadow
  }
  if (belt === 'red') {
    return 'bg-red-600';  // Removed border and shadow
  }
  if (belt === 'blue') {
    return 'bg-blue-700';  // Removed border and shadow
  }
  return '';
};

const About = () => {
  const coachInfo = {
    name: "Mr. Chandra kumar sahu",
    age: 20,
    degree: "1st Dan Black Belt",
    experience: "14+ years",
    certifications: ["National Gold Medalist", "National Referee"],
  };

  const students: Student[] = [
    {
      name: "Aishwary sahu",
      age: 19,
      belt: "Black Belt",
      achievements: ["National player", "State Champion"],
    },
    {
      name: "Prakhar sao",
      age: 19,
      belt: "Black Belt",
      achievements: ["National Champion", "State champion"],
    },
    {
      name: "Jiya sahu",
      age: 14,
      belt: "Red Belt",
      achievements: ["National player", "State champion"],
    },
    {
      name: "Tulika garhewal",
      age: 19,
      belt: "Red I Belt",
      achievements: ["National player", "State champion"],
    },
    {
      name: "Smriti pal",
      age: 14,
      belt: "Red I Belt",
      achievements: ["National Champion", "State champion"],
    },
    {
      name: "Vikas sahu",
      age: 13,
      belt: "Blue Belt",
      achievements: ["State player"],
    },
    {
      name: "Chetany sahu",
      age: 10,
      belt: "blue Belt",
      achievements: ["State player"],
    },
    {
        name: "Tanmay sahu",
        age: 9,
        belt: "blue Belt",
        achievements: ["District player"],
      },
  ];

  const studentsByRank = {
    black: students.filter(s => s.belt.toLowerCase().includes('black')),
    red: students.filter(s => s.belt.toLowerCase().includes('red')),
    blue: students.filter(s => s.belt.toLowerCase().includes('blue')),
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Coach Card */}
        <div className="relative flex flex-col items-center">
          <div className="w-full sm:w-80 bg-red-50 rounded-lg p-4 sm:p-6 
            shadow-lg border-2 border-red-300 mb-8 
            hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]
            transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-red-800 mb-4 
              border-b-2 border-red-200 pb-2">Head Coach</h3>
            <div className="flex flex-col space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Name:</span>
                <span className="text-right">{coachInfo.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Age:</span>
                <span>{coachInfo.age}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Degree:</span>
                <span>{coachInfo.degree}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Experience:</span>
                <span>{coachInfo.experience}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold mb-2">Certifications:</span>
                <ul className="list-disc ml-8 sm:ml-11 space-y-2 bg-white/50 p-2 sm:p-3 rounded-md">
                  {coachInfo.certifications.map((cert, index) => (
                    <li key={index} className="pl-4 sm:pl-6 marker:text-red-500">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Vertical connector line */}
          <div className="w-0.5 h-8 sm:h-12 bg-red-300"></div>

          {/* Belt Ranks Sections */}
          <div className="w-full max-w-7xl">
            {/* Black Belts */}
            {studentsByRank.black.length > 0 && (
                <div className="bg-black">
              <div className={`relative mb-12 sm:mb-16 rounded-lg p-6 ${getBeltSectionColor('black')}`}>
                <div className="w-full h-0.5 bg-gray-400/50 absolute top-0"></div>
                <h4 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8 pt-6 sm:pt-8 text-white">
                  Black Belts
                </h4>
                <div className={`grid gap-4 sm:gap-6 group/belt relative isolate ${
                  studentsByRank.black.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
                  studentsByRank.black.length === 2 ? 'grid-cols-2 max-w-2xl mx-auto' :
                  studentsByRank.black.length === 3 ? 'grid-cols-3 max-w-4xl mx-auto' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
                }`}>
                  {studentsByRank.black.map((student, index) => (
                    <StudentCard key={index} Students={student} />
                  ))}
                </div>
              </div>
              </div>
            )}

            {/* Red Belts */}
            {studentsByRank.red.length > 0 && (
                <div className="bg-red-600">
              <div className={`relative mb-12 sm:mb-16 rounded-lg p-6 ${getBeltSectionColor('red')}`}>
                <div className="w-full h-0.5 bg-red-300/50 absolute top-0"></div>
                <h4 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8 pt-6 sm:pt-8 text-white">
                  Red Belts
                </h4>
                <div className={`grid gap-4 sm:gap-6 group/belt relative isolate ${
                  studentsByRank.red.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
                  studentsByRank.red.length === 2 ? 'grid-cols-2 max-w-2xl mx-auto' :
                  studentsByRank.red.length === 3 ? 'grid-cols-3 max-w-4xl mx-auto' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
                }`}>
                  {studentsByRank.red.map((student, index) => (
                    <StudentCard key={index} Students={student} />
                  ))}
                </div>
              </div>
            </div>
            )}

            {/* Blue Belts */}
            {studentsByRank.blue.length > 0 && (
                <div className="bg-blue-700">
              <div className={`relative mb-12 sm:mb-16 rounded-lg p-6 ${getBeltSectionColor('blue')}`}>
                <div className="w-full h-0.5 bg-blue-300/50 absolute top-0"></div>
                <h4 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8 pt-6 sm:pt-8 text-white">
                  Blue Belts
                </h4>
                <div className={`grid gap-4 sm:gap-6 group/belt relative isolate ${
                  studentsByRank.blue.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
                  studentsByRank.blue.length === 2 ? 'grid-cols-2 max-w-2xl mx-auto' :
                  studentsByRank.blue.length === 3 ? 'grid-cols-3 max-w-4xl mx-auto' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
                }`}>
                  {studentsByRank.blue.map((student, index) => (
                    <StudentCard key={index} Students={student} />
                  ))}
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Update the StudentCard component
const StudentCard = ({ Students }: { Students: Student }) => {
  const beltColorClasses = getBeltColor(Students.belt);
  
  return (
    <div className="relative group/item">
      <div className={`bg-gray-50 rounded-lg p-3 sm:p-4 border-2 
        transition-all duration-300 relative
        group-hover/item:scale-110 sm:group-hover/item:scale-125 group-hover/item:shadow-2xl
        group-hover/item:z-50 hover:!opacity-100
        group-hover/item:translate-y-[-0.5rem] sm:group-hover/item:translate-y-[-1rem]
        [.group/belt:hover_&]:opacity-30
        hover:!scale-110 sm:hover:!scale-125
        ${beltColorClasses}`}>
        <h4 className="text-base sm:text-lg font-semibold mb-2">{Students.name}</h4>
        <div className="space-y-1 text-xs sm:text-sm">
          <p>Age: {Students.age}</p>
          <p className={`font-semibold ${
            Students.belt.toLowerCase().includes('black') ? 'text-gray-800' :
            Students.belt.toLowerCase().includes('red') ? 'text-red-600' :
            Students.belt.toLowerCase().includes('blue') ? 'text-blue-600' : ''
          }`}>Belt: {Students.belt}</p>
          <div className="mt-2">
            <p className="font-semibold">Achievements:</p>
            <ul className="list-disc pl-3 sm:pl-4">
              {Students.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black/60 opacity-0 -z-10 transition-opacity duration-300
        group-hover/item:opacity-100 pointer-events-none"></div>
    </div>
  );
};

export default About; 