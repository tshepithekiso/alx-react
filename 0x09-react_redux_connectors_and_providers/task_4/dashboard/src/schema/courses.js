// task_4/dashboard/src/schema/courses.js

import { schema, normalize } from 'normalizr';

// Define the course schema
const course = new schema.Entity('courses');

// Create a function to normalize the courses data
export const coursesNormalizer = (data) => normalize(data, [course]);

