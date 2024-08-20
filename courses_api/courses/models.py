# Create your models here.
from django.db import models

# This represents a Course like "Math 101"
class Course(models.Model):
    title = models.CharField(max_length=100)
    course_code = models.CharField(max_length=10)
    description = models.TextField()

    def __str__(self):
        return self.title

# This represents when a Course is offered (like Spring 2023)
class CourseInstance(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='instances')
    year = models.IntegerField()
    semester = models.IntegerField()

    def __str__(self):
        return f"{self.course.title} - {self.year} (Semester {self.semester})"
