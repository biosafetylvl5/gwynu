<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="UTF-8">
	<meta name="author" content="GWYNU">
	<meta name="viewport" content="witdh=device-width, initial-scale=1.0">	
		<title>GWYNU</title>
		<style>
		body {
			font-family: Garamond, sans-serif;
		}
		.big-central-text {
			font-family: Verdana, sans-serif;
                        font-size: min(10vw, 40px);
			position: absolute;
			top: 47%;
			left: 50%;
			transform: translate(-50%, -50%);
			word-spacing: 0.5em;
			white-space: nowrap;
                        text-align:center;
		}
                .row{
                    display: grid;
                          grid-template-columns: auto auto auto auto auto;
                    margin:0;
                }
                .item{
                    display: grid;
                    text-align: center;
                    width: min(15vw, 50px);
                    height: min(15vw, 50px);
                    vertical-align: middle;
                }
		#y-anchor{
			transform:rotate(-180deg);

		}
                a{
                        text-decoration: none;
                }
		.welcome{
			font-size: 5pt;
			word-spacing: 0.25em; /* default */
		}
		</style>
	</head>
	<body>
		<?php
			      $layouts = array(
			      			array(
			      				array("","","","",""),
			      				array("","","","",""),
			      				array("G","W","","N","U"),
			      				array("","","","",""),
			      				array("","","","",""),
			      			),
			      			array(
			      				array("","","","",""),
			      				array("","G","","",""),
			      				array("","W","","N","U"),
			      				array("","","","",""),
			      				array("","","","",""),
			      			),
			      			array(
			      				array("","","","",""),
			      				array("","G","W","",""),
			      				array("","","","N","U"),
			      				array("","","","",""),
			      				array("","","","",""),
			      			),
			      			array(
			      				array("","","","",""),
			      				array("","","","",""),
			      				array("","","","N","U"),
			      				array("","G","W","",""),
			      				array("","","","",""),
			      			),
			      			array(
			      				array("","","G","",""),
			      				array("","","W","",""),
			      				array("","","","N","U"),
			      				array("","","","",""),
			      				array("","","","",""),
			      			),
			      			array(
			      				array("","","G","",""),
			      				array("","","W","",""),
			      				array("","","","N",""),
			      				array("","","","U",""),
			      				array("","","","",""),
			      			),
			      			array(
			      				array("","","G","",""),
			      				array("","","W","",""),
			      				array("","","","",""),
			      				array("","","N","",""),
			      				array("","","U","",""),
			      			),
			      			array(
			      				array("","","G","",""),
			      				array("","","W","",""),
			      				array("","","","",""),
			      				array("","","N","U",""),
			      				array("","","","",""),
			      			)
			      		);
			      $mode = mt_rand(1, count($layouts));
			      $mode = $mode-2;
			      ?>
		<div class="big-central-text">
                        <div id="gwynu">
                            <div class="row">
				<div class="item"><?php echo $layouts[$mode][0][0]?></div>
				<div class="item"><?php echo $layouts[$mode][0][1]?></div>
				<div class="item"><?php echo $layouts[$mode][0][2]?></div>
				<div class="item"><?php echo $layouts[$mode][0][3]?></div>
				<div class="item"><?php echo $layouts[$mode][0][4]?></div>

				<div class="item"><?php echo $layouts[$mode][1][0]?></div>
				<div class="item"><?php echo $layouts[$mode][1][1]?></div>
				<div class="item"><?php echo $layouts[$mode][1][2]?></div>
				<div class="item"><?php echo $layouts[$mode][1][3]?></div>
				<div class="item"><?php echo $layouts[$mode][1][4]?></div>
				
				<div class="item"><?php echo $layouts[$mode][2][0]?></div>
				<div class="item"><?php echo $layouts[$mode][2][1]?></div>
                                <div class="item"><a href="home.html">&#0165;</a></div>
				<div class="item"><?php echo $layouts[$mode][2][3]?></div>
				<div class="item"><?php echo $layouts[$mode][2][4]?></div>

				<div class="item"><?php echo $layouts[$mode][3][0]?></div>
				<div class="item"><?php echo $layouts[$mode][3][1]?></div>
				<div class="item"><?php echo $layouts[$mode][3][2]?></div>
				<div class="item"><?php echo $layouts[$mode][3][3]?></div>
				<div class="item"><?php echo $layouts[$mode][3][4]?></div>

				<div class="item"><?php echo $layouts[$mode][4][0]?></div>
				<div class="item"><?php echo $layouts[$mode][4][1]?></div>
				<div class="item"><?php echo $layouts[$mode][4][2]?></div>
				<div class="item"><?php echo $layouts[$mode][4][3]?></div>
				<div class="item"><?php echo $layouts[$mode][4][4]?></div>
                        </div>
		</div>
		<div class="welcome"><?php echo $_SERVER['SERVER_ADDR'] ?></div>
	</body>
</html>
