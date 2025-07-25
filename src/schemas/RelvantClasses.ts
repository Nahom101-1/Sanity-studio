import {defineField, defineType} from 'sanity'

export const relevantClasses = defineType({
  name: 'relevantClasses',
  title: 'Relevant Classes',
  type: 'document',
  fields: [
    defineField({
      name: 'courseCode',
      title: 'Course Code',
      type: 'string',
      description: 'e.g., CS101, MATH201, etc.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'courseName',
      title: 'Course Name',
      type: 'string',
      description: 'Full name of the course',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      description: 'University or institution where the course was taken',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'semester',
      title: 'Semester/Term',
      type: 'string',
      description: 'e.g., Fall 2023, Spring 2024, etc.',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Year when the course was taken',
      validation: (rule) => rule.required().min(2000).max(2030),
    }),
    defineField({
      name: 'credits',
      title: 'Credit',
      type: 'number',
      description: 'Number of credit for the course',
      validation: (rule) => rule.min(0).max(10),
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string',
      description: 'Grade received in the course',
      options: {
        list: [
          {title: 'A', value: 'A'},
          {title: 'B', value: 'B'},
          {title: 'C', value: 'C'},
          {title: 'D', value: 'D'},
          {title: 'F', value: 'F'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'text',
      description: 'Brief description of what the course covered',
      rows: 3,
    }),
    defineField({
      name: 'linkToGithub',
      title: 'Link to Github',
      type: 'url',
      description: 'Link to the project or assignment on Github',
    }),
    defineField({
      name: 'skillsLearned',
      title: 'Skills Learned',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of skills and technologies learned in this course',
    }),
    defineField({
      name: 'projects',
      title: 'Projects/Assignments',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Notable projects or assignments completed',
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'string',
      description: 'Name of the course instructor',
    }),
    defineField({
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Courses that were prerequisites for this course',
    }),
    defineField({
      name: 'category',
      title: 'Course Category',
      type: 'string',
      options: {
        list: [
          {title: 'Computer Science', value: 'computer-science'},
          {title: 'Mathematics', value: 'mathematics'},
          {title: 'Engineering', value: 'engineering'},
          {title: 'Business', value: 'business'},
          {title: 'Design', value: 'design'},
          {title: 'Data Science', value: 'data-science'},
          {title: 'Machine Learning', value: 'machine-learning'},
          {title: 'Web Development', value: 'web-development'},
          {title: 'Mobile Development', value: 'mobile-development'},
          {title: 'Database', value: 'database'},
          {title: 'Networking', value: 'networking'},
          {title: 'Cybersecurity', value: 'cybersecurity'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
          {title: 'Graduate Level', value: 'graduate'},
        ],
      },
    }),
    defineField({
      name: 'certificate',
      title: 'Certificate',
      type: 'file',
      description: 'Certificate of completion (if applicable)',
    }),
    defineField({
      name: 'certificateUrl',
      title: 'Certificate URL',
      type: 'url',
      description: 'Link to online certificate (Coursera, edX, etc.)',
    }),
    defineField({
      name: 'isOnline',
      title: 'Online Course',
      type: 'boolean',
      description: 'Whether this was an online course',
      initialValue: false,
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'Platform where the course was taken (if online)',
      options: {
        list: [
          {title: 'University Campus', value: 'university'},
          {title: 'Coursera', value: 'coursera'},
          {title: 'edX', value: 'edx'},
          {title: 'Udemy', value: 'udemy'},
          {title: 'Udacity', value: 'udacity'},
          {title: 'freeCodeCamp', value: 'freecodecamp'},
          {title: 'Codecademy', value: 'codecademy'},
          {title: 'Pluralsight', value: 'pluralsight'},
          {title: 'LinkedIn Learning', value: 'linkedin-learning'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this course should appear (lower numbers appear first)',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible on Website',
      type: 'boolean',
      description: 'Whether this course should be displayed on your website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'courseCode',
      subtitle: 'courseName',
      institution: 'institution',
      grade: 'grade',
      year: 'year',
    },
    prepare(selection) {
      const {title, subtitle, institution, grade, year} = selection
      return {
        title: `${title || 'No Code'} - ${subtitle || 'No Name'}`,
        subtitle: `${institution || 'No Institution'} • ${year || 'No Year'} • ${grade || 'No Grade'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Order (Lowest First)',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Year (Most Recent)',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Course Code',
      name: 'courseCodeAsc',
      by: [{field: 'courseCode', direction: 'asc'}],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{field: 'category', direction: 'asc'}],
    },
  ],
})

