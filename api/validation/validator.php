<?php
    class Validator
    {
        private $username;
        private $password;
        private $validation;
        private $responce_of_validation = array();

        function __construct($data)
        {
            $this->username = $data->user;
            $this->password = $data->password;
            $this->validation = new Validation();

        }
        public function get_validation()
        {
            array_push($this->responce_of_validation, $this->validation->validateName($this->username));
            array_push($this->responce_of_validation, $this->validation->validatePassword($this->password));
            return $this->responce_of_validation;
        }
        public function post_validation()
        {
            array_push($this->responce_of_validation, $this->validation->validateName($this->username));
            array_push($this->responce_of_validation, $this->validation->validatePassword($this->password));
            return $this->responce_of_validation;
        }
    }
?>