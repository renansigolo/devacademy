import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { Course } from 'app/interfaces/course.model'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private db: AngularFirestore) {}

  /**
   * Get all featured courses ordered by priority
   */
  getFeaturedCourses() {
    return this.db
      .collection<Course>('courses', ref =>
        ref.where('featured', '==', true).orderBy('priority')
      )
      .valueChanges()
  }

  /**
   * Get course by ID
   */
  getCourse(courseId: string) {
    return this.db.doc<Course>(`courses/${courseId}`).valueChanges()
  }
}
