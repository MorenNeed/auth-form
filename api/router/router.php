<?php
    class Router
    {
        private $data;
        private $action;
        private $Controller;

        function __construct()
        {
            $this->Controller = new Controller();
        }
        private function set($action)
        {
            $this->Controller->$action($this->data);
        }
        public function get()
        {
            $this->data = json_decode(file_get_contents("php://input"));
            $this->action = $this->data->action;

            $this->set($this->action);
        }
    }
?>