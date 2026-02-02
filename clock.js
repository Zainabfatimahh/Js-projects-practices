<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Digital Clock</title>
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: black;
            color: white;
            font-family: Arial, sans-serif;
        }

        .clock {
            font-size: 60px;
            letter-spacing: 3px;
        }
    </style>
</head>
<body>

<div class="clock" id="clock">00:00:00</div>

<script>
    function showTime() {
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Add zero if less than 10
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("clock").innerText =
            hours + ":" + minutes + ":" + seconds;
    }

    setInterval(showTime, 1000);
    showTime(); // run immediately
</script>

</body>
</html>