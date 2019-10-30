export interface Course {
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  imageUrl: string
  slug: string
  featured: boolean
  priority: number
  instructorId?: string
  date?: Date
  location?: string
  price?: number
  enrolUrl?: string
  // details?: CourseDetails
}

export interface CourseDetails {
  date: Date
  location: string
  price: number
  enrolUrl: string
}
