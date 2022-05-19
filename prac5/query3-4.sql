SELECT given_name,family_name
	FROM enrolment.Students,enrolment.Enrolments
	WHERE Students.student_id = Enrolments.student_id AND 
	subject_code = 'COMP SCI 2207';