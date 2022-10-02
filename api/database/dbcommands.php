<?php
    class DBCommands
    {
        private $query;
        private $stmt;
        private $conn;

        function __construct()
        {
            $this->conn = (new Database())->getConnection();
        }
        protected function find($name, $password)
        {
            $this->query = file_get_contents(__DIR__ . "/../database/find.sql");

            $this->stmt = $this->conn->prepare($this->query);

            $name = htmlspecialchars(strip_tags($name));
            $password = htmlspecialchars(strip_tags($password));

            $this->stmt->bind_param("ss", $name, $password);
            $this->stmt->execute();
            $this->stmt->store_result();

            if($this->stmt->num_rows() != 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
?>