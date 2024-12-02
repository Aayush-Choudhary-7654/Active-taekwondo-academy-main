import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Student {
  name: string;
  belt: string;
  achievements: string;
  imageUrl: string;
  joinedYear: string;
}

const students: Student[] = [
  {
    name: "Aishwary sahu",
    belt: "Black Belt",
    achievements: "National Gold Medalist 2023",
    imageUrl: "/students/rahul.jpg",
    joinedYear: "2019"
  },
  {
    name: "Prakhar sao",
    belt: "Black Belt",
    achievements: "National Gold Medalist 2023",
    imageUrl: "/students/prakhar.jpg",
    joinedYear: "2021"
  },
  {
    name: "Vikas sahu",
    belt: "Blue Belt",
    achievements: "State Champion 2023",
    imageUrl: "/students/vikas.jpg",
    joinedYear: "2020"
  },
  {
    name: "Jiya sahu",
    belt: "Red Belt",
    achievements: "International Bronze Medalist",
    imageUrl: "/students/jiya.jpg",
    joinedYear: "2018"
  },
  {
    name: "Tulika garhewal",
    belt: "Red I Belt",
    achievements: "Rising Star Award 2023",
    imageUrl: "/students/tulika.jpg",
    joinedYear: "2021"
  },
  {
    name: "Smriti pal",
    belt: "Red I Belt",
    achievements: "Rising Star Award 2023",
    imageUrl: "/students/smriti.jpg",
    joinedYear: "2021"
  },
{
    name: "Tanmay sahu",
    belt: "Red Belt",
    achievements: "Rising Star Award 2023",
    imageUrl: "/students/tanmay.jpg",
    joinedYear: "2021"
  },
{
    name: "Chetany sahu",
    belt: "Red Belt",
    achievements: "Rising Star Award 2023",
    imageUrl: "/students/chetany.jpg",
    joinedYear: "2021"
  },

];

export default function StudentsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold text-gray-900 mb-4">
            Our Star Students
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated practitioners who embody the spirit of martial arts through their achievements and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student) => (
            <Card key={student.name} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-2">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={student.imageUrl} alt={student.name} />
                  <AvatarFallback className="bg-red-800 text-white text-2xl">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="font-cinzel text-xl text-red-800">
                  {student.name}
                </CardTitle>
                <CardDescription className="font-semibold">
                  {student.belt}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">{student.achievements}</p>
                  <p className="text-sm text-gray-500">
                    Training since {student.joinedYear}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
