SELECT given_name,family_name,mark 
	FROM enrolment.Enrolments, enrolment.Students
	WHERE Students.student_id = Enrolments.student_id AND
	 Enrolments.subject_code = 'COMP SCI 2000' AND Enrolments.mark < 50
	
