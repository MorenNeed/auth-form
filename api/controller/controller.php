<?php
    class Controller
    {
        private $Validator;
        private $responce_of_validation;
        public function get($data)
        {
            $this->Validator = new Validator($data);
            $this->responce_of_validation = $this->Validator->get_validation();
            if($this->responce_of_validation === array("", ""))
            {
                
            }
            else
            {
                http_response_code(400);
            }
            return json_encode($this->responce_of_validation);
        }
        public function post($data)
        {
            $this->Validator = new Validator($data);
            $this->responce_of_validation = $this->Validator->post_validation();
            if($this->responce_of_validation === array("", ""))
            {

            }
            else
            {
                http_response_code(400);
            }
            return json_encode($this->responce_of_validation);
        }
    }
?>