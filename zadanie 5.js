<!DOCTYPE HTML> 
<html lang='pl'> 
<head>
	<meta charset='utf-8'>
   <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

   <script>
$(document).ready(function(){
  $("#hide").click(function(){
    $("aside").hide();
  });
  $("#show").click(function(){
    $("aside").show();
  });
});

</script>
<script>
function drukuj(){
   if (!window.print){
      alert("Twoja przeglądarka nie drukuje!")
   return 0;
   }
 window.print(); 
}

</script>

   <style>

* {padding:0;margin:0;}

html {width:100%;height:100%;}
body {font-family:Arial, Helvetica, Sans-serif;font-size:14px;line-height:1.5;font-weight:400;color:#434343;background:#FFF;}

.container {margin:0 auto;}

header {margin:25px 0;}
header img {width:100%;}

aside {float:left;margin:0 0 25px;}
aside nav ul {list-style:none;}
aside nav ul li {margin-bottom:1px;}
aside nav ul li a {display:block;text-decoration:none;color:#000;background:#FFC000;padding:8px 20px;}
aside nav ul li a:hover{background:#212121;color:#FFF;}

#main {float:right;margin:0 0 25px;}

.section2 {
   height: 50px;
   margin: 0 auto;
}

footer {clear:both;color:#FFF;background:#121212;padding:15px 0 15px 30px;margin:0 0 25px;}

@media (min-width: 1100px) {
	.container {width:1050px;}
	aside {width:30%;}
	#main {width:65%;}
}
@media (max-width: 1100px) and (min-width: 1000px) {
	.container {width:950px;}
	aside {width:30%;}
	#main {width:65%;}
}
@media (max-width: 1000px) and (min-width: 800px) {
	.container {width:750px;}
	aside {width:30%;}
	#main {width:65%;}
}
@media (max-width: 800px) and (min-width: 500px) {
	.container {width:450px;}
	aside,
	#main {width:100%;}
}
@media (max-width: 500px) {
	.container {width:90%;}
	aside,
	#main {width:100%;}
}
   </style>

</head>
<body>
  


<div class='container'>

	<!-- header --> 
	<header>
		<img src="zarowki.jpg" alt=""/>
	</header>
	
	<!-- sidebar --> 
	<aside>
		<nav>
			<ul >
				<li><a href="#">Start</a></li>
				<li><a href="#">O firmie</a></li>
				<li><a href="#">Oferta</a></li>
				<li><a href="#">Galeria</a></li>
				<li><a href="#">Kontakt</a></li>
			</ul>
		</nav>
   </aside>

   <button id="hide">Hide</button>
   <button id="show">Show</button>

	<section id="main">
		
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum tempus mi, maximus volutpat urna sollicitudin vitae. Vivamus rutrum mi sit amet commodo rutrum. Suspendisse potenti. Sed a ullamcorper eros. Maecenas dapibus erat mi, a egestas ipsum cursus volutpat. Aliquam posuere mi at consectetur convallis. Cras vitae ligula eget leo ultrices hendrerit nec sed ex. Morbi at ipsum rhoncus, dictum elit in, consectetur lorem. Aliquam suscipit diam sit amet mauris luctus, a egestas magna pharetra. Donec laoreet viverra risus nec fermentum. Maecenas gravida lectus vel ante commodo bibendum. Donec ac pellentesque mi. </p>
      <p><a href="javascript:drukuj()">drukuj</a></p>
   </section>
   
	<section class="section2">

   </section>

   <footer>
		<p>Zadanie5 strony www</p>
	</footer>

</div>

</body>
</html>
