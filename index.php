<?php

?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Audio Player</title>
		<link rel="stylesheet" href="css/font-awesome.css" />
		<link rel="stylesheet" href="style/reset-style.css" />
		<link rel="stylesheet" href="style/style.css" />
		<script type="text/javascript" src="js/ajax.js"></script>
		<script type="text/javascript" src="js/logic.js"></script>
	</head>
	<body>
	    <div id="wrapper">
	        <div id="playingSong">
	            <div id="image">
	                <img src="" id="showingImage">
	            </div>
	            <div id="info">
	            	<audio src="" id="myAudio"></audio>
	                <p id="name"></p>
	                <div id="bar">
	                	<div></div>
	                </div>
	                <div id="menu">
	                	<div>
	                		<p id="timePlaying">00 : 00</p>
	                	</div>
	                	<div>
	                    	<button type="button" class="fa fa-step-backward fa-2x" id="button"></button>
	                    	<button type="button" class="fa fa-play fa-2x" id="button"></button>
	                    	<button type="button" class="fa fa-step-forward fa-2x" id="button"></button>
	                    </div>
	                    <div>
	                    	<p id="songLength">00 : 00</p>
	                    </div>	
	                </div>
	            </div>
	        </div>
	        <div id="result"></div>
	    </div>
	</body>
</html>
