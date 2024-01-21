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
	gender varchar(255)
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
	last_name VARCHAR(255)
);

drop table if exists request_information;
CREATE TABLE request_information(
	request_id SERIAL NOT NULL PRIMARY KEY,
	user_id BIGINT REFERENCES user_information(user_id),
	request_type VARCHAR(255),
	reason_request TEXT,
	med_request VARCHAR(255),
	 is_approved boolean
);

drop table if exists approval_request;
CREATE TABLE approval_request(
	approval_id SERIAL NOT NULL PRIMARY KEY,
	request_id BIGINT REFERENCES request_information(request_id),
	explanation TEXT,
	decision_date DATE
);