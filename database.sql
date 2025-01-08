drop table if exists user_information;
CREATE TABLE user_information(
	user_id SERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(255),
	middle_name VARCHAR(255),
	last_name VARCHAR(255),
	address_line1 TEXT,
	address_line2 TEXT,
	city_address VARCHAR(255),
	provincial_address VARCHAR(255),
	regional_address VARCHAR(255),
	country VARCHAR(255),
	gender varchar(255),
	contacno VARCHAR(255),
	column course varchar(255),
	column year varchar(255).
	rfid varchar(255)
);

drop table if exists authentication_user;
CREATE TABLE authentication_user(
	auth_id SERIAL NOT NULL PRIMARY KEY,
	user_id BIGINT REFERENCES user_information(user_id),
	user_name VARCHAR(255),
	password_user VARCHAR(255),
	role_user VARCHAR(255),
	project_code VARCHAR(255)
);

drop table if exists activity_logs;
CREATE TABLE activity_logs(
	activity_id SERIAL NOT NULL PRIMARY KEY,
	user_id BIGINT REFERENCES user_information(user_id),
	time_in TIME,
	time_out TIME,
	activity_date DATE,
	type_activity VARCHAR(255)
);

drop table if exists guardian_information;
CREATE TABLE guardian_information(
	guardian_id SERIAL NOT NULL PRIMARY KEY,
	user_id BIGINT REFERENCES user_information(user_id),
	first_name VARCHAR(255),
	middle_name VARCHAR(255),
	last_name VARCHAR(255),
	contactno VARCHAR(255)
);

drop table if exists request_information;
CREATE TABLE request_information(
	request_id SERIAL NOT NULL PRIMARY KEY,
	user_id BIGINT REFERENCES user_information(user_id),
	request_type VARCHAR(255),
	reason_request TEXT,
	med_request VARCHAR(255),
	 is_approved boolean,
	quantity int
);

drop table if exists approval_request;
CREATE TABLE approval_request(
	approval_id SERIAL NOT NULL PRIMARY KEY,
	request_id BIGINT REFERENCES request_information(request_id),
	explanation TEXT,
	decision_date DATE
);

drop table if exists medicine_stocks;
CREATE TABLE medicine_stocks(
	med_stocks_id SERIAL NOT NULL PRIMARY KEY,
	med_name VARCHAR(255),
	item_code int,
	description TEXT,
	stock_count int
);

drop table if exists curfew_schedule;
CREATE TABLE curfew_schedule(
	curfew_schedule_id SERIAL NOT NULL PRIMARY KEY,
	curfew_time TIME,
	description TEXT
);
drop table if exists student_subject_matching;
CREATE TABLE student_subject_matching(
	student_subject_matching_id SERIAL NOT NULL PRIMARY KEY,
	user_id BIGINT REFERENCES user_information(user_id),
    subject_schedule_id BIGINT REFERENCES subject_schedule(subject_schedule_id)
);