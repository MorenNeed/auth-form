<?php
    class Database
    {
        private $host = "127.0.0.1";
        private $db_name = "auth_form";
        private $username = "root";
        private $password = "root";
        public $conn;

        public function getConnection()
        {
            $this->conn = null;

            $this->conn = mysqli_connect($this->host, $this->username, $this->password, $this->db_name, 3306);

            if(!$this->conn)
            {
                die("Could not connect to database!");
            }
            return $this->conn;
        }
    }
?>