<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Password Generator</title>
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .box {
            background: white;
            padding: 25px;
            border-radius: 10px;
            width: 280px;
            text-align: center;
        }

        input {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            margin-bottom: 15px;
            text-align: center;
        }

        button {
            padding: 10px;
            width: 100%;
            font-size: 16px;
            border: none;
            border-radius: 6px;
            background-color: black;
            color: white;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>Password Generator</h2>
    <input type="text" id="password" readonly placeholder="Your password">
    <button onclick="generatePassword()">Generate</button>
</div>

<script>
    function generatePassword() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!";
        let password = "";
        let length = 10;

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        document.getElementById("password").value = password;
    }
</script>

</body>
</html>