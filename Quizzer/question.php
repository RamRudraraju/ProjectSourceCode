<?php include 'database.php'; ?>
<?php session_start(); ?>
<?php
	//Set question number 
	// Getting the Question Number From URL by using GET Super Global
	$number = (int) $_GET['n'];
	
	/*
	*	Get total questions
	*/
	$query = "SELECT * FROM `questions`";
	//Get result
	$results = $mysqli->query($query) or die($mysqli->error.__LINE__);
	$total = $results->num_rows;
		
	/*
	*	Get Question
	*/
	$query = "SELECT * FROM `questions`
				WHERE question_number = $number";
				
	//Get result
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
	
	$question = $result->fetch_assoc();
	
	/*
	*	Get Choices
	*/
	$query = "SELECT * FROM `choices`
				WHERE question_number = $number";
	//Get results
	$choices = $mysqli->query($query) or die($mysqli->error.__LINE__);
?>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8" />
	<title>PHP Quizzer</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
	<header>
		<div class="container">
			<h1>PHP Quizzer</h1>
		</div>
	</header>
	<main>                    <!-- Everything was same as Index.html except "Main" -->
		<div class="container">
			<div class="current">Question <?php echo $question['question_number']; ?> of <?php echo $total; ?></div>
			
			<!-- Question -->
			<p class="question">                      
				<?php echo $question['text']; ?>   <!-- It Will display the Question Coming From Database -->
			</p>
			<!-- Starting of Form -->
			<form method="post" action="process.php">
				<ul class="choices">
					<?php while($row = $choices->fetch_assoc()): ?>
						<li>                                 <!-- It Will display the Choices -->
							<input name="choice" type="radio" value="<?php echo $row['id']; ?>" />
							<?php echo $row['text']; ?>
						</li>
					<?php endwhile; ?>
				</ul>
				<!-- It is a Button -->
				<input type="submit" value="Submit" />  
				<input type="hidden" name="number" value="<?php echo $number; ?>" /> <!-- Hooking Up the Question Number -->
			</form>
		</div>
	</main>
	<footer>
		<div class="container">
			Copyright &copy; Rama 2018, PHP Quizzer
		</div>
	</footer>
</body>
</html>