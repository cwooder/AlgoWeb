package kr.ac.jj.algo.dto;

import kr.ac.jj.algo.domain.Authority;

import java.time.LocalDate;

public class UserDTO {
    private String username;
    private String name;
    private LocalDate birth;
    private char gender;
    private byte grade;
    private String status;
    private Authority authority;

    public UserDTO() {}

    public UserDTO(String username, String name, LocalDate birth, char gender, byte grade, String status, Authority authority) {
        this.username = username;
        this.name = name;
        this.birth = birth;
        this.gender = gender;
        this.grade = grade;
        this.status = status;
        this.authority = authority;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirth() {
        return birth;
    }

    public void setBirth(LocalDate birth) {
        this.birth = birth;
    }

    public Authority getAuthority() {
        return authority;
    }

    public void setAuthority(Authority authority) {
        this.authority = authority;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public byte getGrade() {
        return grade;
    }

    public void setGrade(byte grade) {
        this.grade = grade;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public static class Request {

    }

    public static class Response {
        private boolean success;
        private String message;
        private UserDTO user;

        public Response() {}

        public Response(boolean success, String message, UserDTO user) {
            this.success = success;
            this.message = message;
            this.user = user;
        }

        public boolean isSuccess() {
            return success;
        }

        public void setSuccess(boolean success) {
            this.success = success;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public UserDTO getUser() {
            return user;
        }

        public void setUser(UserDTO user) {
            this.user = user;
        }
    }
}
