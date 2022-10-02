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
        public function find($data)
        {

        }
    }
?>