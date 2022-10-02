<?php
    class Validation
    {
        private $message = "";
        public function validateName($data)
        {
            if(!(strlen($data) > 0))
            {
                $this->message = "Please, submit Name!";
            }
            return $this->message;
        }
        public function validatePassword($data)
        {
            if(!(strlen($data) > 0))
            {
                $this->message = "Please, submit Password!";
            }
            return $this->message;
        }
    }
?>