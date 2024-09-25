<?php
// Database connection
// (Same as in register.php)

// Get user input
$email = $_POST['email'];
$password = $_POST['password'];

// Retrieve user data from the database
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        // Login successful
        echo "Login successful!";
    } else {
        echo "Incorrect password.";
    }
} else {
    echo "User not found.";
}

$conn->close();
?>