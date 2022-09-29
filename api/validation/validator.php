<?php
    class Validator
    {
        private $data;
        private $validation;
        private $responce_of_validation = array();

        function __construct($data, $action_to_validate)
        {
            $this->data = $data;
            $this->validation = new Validation();

            $this->$action_to_validate . '_validation'();
        }
        private function read_validation()
        {
            array_push($this->responce_of_validation, $this->validation->validateName($this->data));
            array_push($this->responce_of_validation, $this->validation->validatePassword($this->data));
        }
    }
?>