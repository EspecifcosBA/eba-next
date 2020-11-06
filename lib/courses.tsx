import CoursesData from 'data/courses.json';

export type Course = {
  name: string,
  duration: string,
  type: string,
  time: string,
  location: string,
  description: string,
  certificates?: string[],
  requirements?: string,
  day?: string,
  periods?: {
    startDay: string,
    time: string,
    type: string,
  }[]
}

export const getCourses = () => {
  return CoursesData as Course[]
};

export default {
  getCourses
}