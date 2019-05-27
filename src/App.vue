<template>
  <div id="app">
  		<div class="index" v-if="!login" :style="back">
  			<div class="index__header">
  				<img :src="'./src/img/logo_black.svg'">
  				<div class="header__links">
  					<ul>
  						<li><a href="">Donate</a></li>
  						<li><a href="">Use For Website</a></li>
  						<li><a href="">Download</a></li>
  					</ul>
  					<ul>
  						<li><a href="" @click.prevent="showRegister = true; showModal=true;showLogin = false">Sign In</a></li>
  						<li><a href="" @click.prevent="showLogin = true; showModal=true; showRegister=false">Log In</a></li>
  					</ul>
  				</div>
  			</div>
  			<div class="headline">
  				<h1>Find your own music!</h1>
  				<p>Millions of songs on your home!</p>
  				<button class="index__btn">Start your way</button>
  			</div>
  			<div class="index__main">
  				<div class="info">
  					<ul>
  						<li>
  							<img :src="'./src/img/index/premium-img1.jpg'" alt="Listen">
  							<div>
  								<b>Listen everywhere</b>
  								<p>Our site works on your computer, mobile, tablet and TV.</p>
  							</div>
  						</li>
  						<li>
  							<img :src="'./src/img/index/premium-img2.jpg'" alt="Unlimited">
  							<div>
  								<b>Unlimited, ad-free music</b>
  								<p>No ads. No interruptions. Just music.</p>
  							</div>
  						</li>
  						<li>
  							<img :src="'./src/img/index/premium-img3.jpg'" alt="Download">
  							<div>
  								<b>Download music & listen offline</b>
  								<p>Keep playing, even when you don't have a connection.</p>
  							</div>
  						</li>
  						<li>
  							<img :src="'./src/img/index/premium-img4.jpg'" alt="Premium">
  							<div>
  								<b>Premium sounds better</b>
  								<p>Get ready for incredible sound quality.</p>
  							</div>
  						</li>
  					</ul>
  				</div>
  				<div class="donate">
  					<h2>Donate For Our Project</h2>
  					<p>If you like everything, share money for the development of our project in the future</p>
  					<b>You can support us on</b>
  					<div class="cards">
  						<img :src="'./src/img/index/Visa.png'" alt="Visa">
  						<img :src="'./src/img/index/logo-mastercard-mobile.svg'" alt="Master-card">
  						<img class="paypal" :src="'./src/img/index/Pay Pal.png'" alt="Pay Pal">
  					</div>
  					<button class="index__btn">Donate</button>
  					<div class="stickers">
  						
  					</div>
  				</div>
  			</div>
  			<div class="index__footer">
  				<img :src="'./src/img/logo_white.svg'" alt="logo">
  				<div class="rightSide">
  					<div class="socialMedia">
	  					<a href=""><img :src="'./src/img/index/social/fb_logo_white.svg'" alt="Facebook"></a>
	  					<a href=""><img :src="'./src/img/index/social/instagram_logo_white.svg'" alt="Instagram"></a>
	  					<a href=""><img :src="'./src/img/index/social/twitter_logo_white.svg'" alt="Twitter"></a>
	  				</div>
	  				<div class="refs">
	  					<div class="companyList">
	  						<b>Company</b>
	  						<ul>
	  							<li><a href="">About</a></li>
	  							<li><a href="">Jobs</a></li>
	  							<li><a href="">For The Record</a></li>
	  						</ul>
	  					</div>
	  					<div class="communitiesList">
	  						<b>Communities</b>
	  						<ul>
	  							<li><a href="">For Artist</a></li>
	  							<li><a href="">Developers</a></li>
	  							<li><a href="">Brands</a></li>
	  							<li><a href="">Investors</a></li>
	  							<li><a href="">Vendors</a></li>
	  						</ul>
	  					</div>
	  				</div>
	  				<div class="company">
	  					<img :src="'./src/img/logo_company_white.svg'" alt="Kartash" width="400px" height="100px" class="companyLogo">
	  					<div class="language">
	  						<img :src="'./src/img/index/Flag_of_the_United_Kingdom.svg'" alt="UK" width="50px" height="20px">
	  						<p>United Kingdom</p>
	  					</div>
  				</div>
  				</div>
  			</div>
  			<div class="popup">
  				<div class="overlay" v-show="showModal" @click="showModal=false"></div>
  				<div class="modal_frame" v-show="showModal" ref="modal">
					<span class="modal_close" @click="showModal=false">X</span>
					<ul class="modal_links">
						<li class="login" :class="{form_active: showLogin}" @click="showLogin = !showLogin;showRegister = !showRegister">Log In</li>
						<li class="signin" :class="{form_active: showRegister}" @click="showRegister = !showRegister;showLogin = !showLogin">Sign In</li>
					</ul>
					<div class="modal_form">
						<div class="login_form" v-show="showLogin">
							<form action="https://echo.htmlacademy.ru" method="post">
								<label for="username">Login</label>
								<input ref="login" type="text" name="username" placeholder="">
								<label for="password">Password</label>
								<input ref="password" type="password" name="password" placeholder="">
								<div class="cellar">
									<label class="checkbox_spacing">
										<input type="checkbox">
										<span class="custom_checkbox"></span>
										<p>Remember Me</p>
									</label>
									<a href="">Forget Password?</a>
								</div>
								<button class="index__btn" type="submit" @click.prevent="logIn()">Enter</button>
							</form>
						</div>
						<div class="register_form" v-show="showRegister">
							<label for="email">E-Mail</label>
							<input type="text" name="email" placeholder="">
							<label for="username">Login</label>
							<input type="text" name="username" placeholder="">
							<label for="password">Password</label>
							<input type="password" name="password" placeholder="">
							<label for="password">Confirm Password</label>
							<input type="password" name="confirm_password" placeholder="">
							<button class="index__btn" type="submit" @click="showModal=false">Register</button>
						</div>
					</div>
				</div>
  			</div>
  		</div>
   	<div class="musicApp" v-else>
   		<div class="app__header">
   			<img :src="'./src/img/logo_black.svg'">
   			<div class="list">
   				<ul>
   					<li><a href="" class="current">Главная</a></li>
   					<li><a href="">Лучшее</a></li>
   					<li><a href="">Рекомендации</a></li>
   					<li><a href="">Избраное</a></li>
   				</ul>
   			</div>
   			<div class="search">
   				<input type="text">
   				<button :style="glass"></button>   			
   			</div>
   			<div class="user">
   				<p>User_Name</p>
   				<img :src="'./src/img/app/male-user-shadow-white.svg'">
   			</div>
   		</div>
   		<div class="app__main">
   			<div class="popularList musicList">
   				<div class="main_headline">
   					<p>Популярное</p>
   					<select v-model="popular">
   						<option value="music">Музыка</option>
   						<option value="album">Альбомы</option>
   					</select>
   				</div>
   				<div class="list">
	   				<div v-if="popular=='album'" @click="$store.commit('setNewAlbum',item), $store.commit('changeSong', $store.getters.someAlbum($store.getters.currentAlbumValue).songs[0]) ,changeSong()" v-for="(item, index) in $store.getters.popularAlbum" class="song" :key="index">
	   					<img :src="$store.getters.someAlbum(item).img">
	   					<div>
	   						<p class="name">{{$store.getters.someAlbum(item).name}}</p>
	   						<p>{{$store.getters.someAlbum(item).compositor}}</p>
	   					</div>
	   				</div>
	   				<div v-if="popular=='music'" @click="$store.commit('setNewAlbum',0), $store.commit('changePositin', index), $store.commit('changeSong', $store.getters.someSong(item).id), changeSong()" v-for="(item, index) in $store.getters.someAlbum(0).songs" class="song" :key="index" :class="'#'+index">
		   			  	<img :src="$store.getters.someSong(item).img">
		   			  	<div>
		   			  		<p class="name">{{$store.getters.someSong(item).song_name}}</p>
		   			  		<p>{{$store.getters.someSong(item).user}}</p>
		   			  	</div>
		   			</div>
   				</div>
   			</div>
   			<div class="recomendationList musicList">
   				<div class="main_headline">
   					<p>Рекомендации</p>
   					<select v-model="recomendation">
   						<option value="music">Музыка</option>
   						<option value="album">Альбомы</option>
   					</select>
   				</div>
   				<div class="list">
	   				<div v-if="recomendation=='album'" @click="$store.commit('setNewAlbum',item), $store.commit('changeSong', $store.getters.someAlbum($store.getters.currentAlbumValue).songs[0]) ,changeSong()" v-for="(item, index) in $store.getters.recomendationAlbum" class="song" :key="index">
	   					<img :src="$store.getters.someAlbum(item).img">
	   					<div>
	   						<p class="name">{{$store.getters.someAlbum(item).name}}</p>
	   						<p>{{$store.getters.someAlbum(item).compositor}}</p>
	   					</div>
	   				</div>
	   				<div v-if="recomendation=='music'" @click="$store.commit('setNewAlbum',1), $store.commit('changePositin', index), $store.commit('changeSong', $store.getters.someSong(item).id), changeSong()" v-for="(item, index) in $store.getters.someAlbum(1).songs" class="song" :key="index" :class="'#'+index">
		   			  	<img :src="$store.getters.someSong(item).img">
		   			  	<div>
		   			  		<p class="name">{{$store.getters.someSong(item).song_name}}</p>
		   			  		<p>{{$store.getters.someSong(item).user}}</p>
		   			  	</div>
		   			</div>
   				</div>
   			</div>
   			<div class="bestList musicList">
   				<div class="main_headline">
   					<p>Лучшее</p>
   					<select v-model="best">
   						<option value="music">Музыка</option>
   						<option value="album">Альбомы</option>
   					</select>
   				</div>
   				<div class="list">
	   				<div v-if="best=='album'" @click="$store.commit('setNewAlbum',item), $store.commit('changeSong', $store.getters.someAlbum($store.getters.currentAlbumValue).songs[0]) ,changeSong()" v-for="(item, index) in $store.getters.bestAlbum" class="song" :key="index">
	   					<img :src="$store.getters.someAlbum(item).img">
	   					<div>
	   						<p class="name">{{$store.getters.someAlbum(item).name}}</p>
	   						<p>{{$store.getters.someAlbum(item).compositor}}</p>
	   					</div>
	   				</div>
	   				<div v-if="best=='music'" @click="$store.commit('setNewAlbum',2), $store.commit('changePositin', index), $store.commit('changeSong', $store.getters.someSong(item).id), changeSong()" v-for="(item, index) in $store.getters.someAlbum(2).songs" class="song" :key="index" :class="'#'+index">
		   			  	<img :src="$store.getters.someSong(item).img">
		   			  	<div>
		   			  		<p class="name">{{$store.getters.someSong(item).song_name}}</p>
		   			  		<p>{{$store.getters.someSong(item).user}}</p>
		   			  	</div>
		   			</div>
   				</div>
   			</div>
   			 <player-app @startSong="changeSong()"></player-app>
   		</div>
	   </div>
	   <audio class="music">
	   	<source :src="'./src/music/Aaron_Smith-Dancin_(KRONO_Remix).mp3'" type="audio/mpeg">
	   </audio>
  </div>
</template>

<script>
	import playerApp from './components/Player'

export default {

  name: 'app',
  data () {
    return {
    	back : {
    		background: "url('./src/img/hero-lg.jpg') center top no-repeat fixed",
    		backgroundSize: '100% 100%'
    	},
    	glass: {
    		background: "url('./src/img/app/magnifier-glass.png')",
    		backgroundSize: '100% 100%'
    	},
      login: false,
      showLogin: false,
      showRegister: false,
      showModal: false,
      popular: 'music',
      recomendation: 'music',
      best: 'music'
    }
  },
	methods: {
	  	changeSong(){
	  		var volume = document.querySelector(".music").volume
	  		if(document.querySelector(".music") != null){
	  			document.querySelector(".music").remove()
	  		}
	  		var music = document.createElement('audio')
	  		music.classList = "music"
	  		music.volume = volume
	  		music.innerHTML = `
				<source src=${this.$store.getters.currentSome('src')} type="audio/mpeg">
	  		`
	  		document.body.appendChild(music);
	  		if (this.$store.getters.plays == true){
	  			this.$store.commit('changePlays')
	  		}
	  		this.$store.commit('playPlays')
	  	},
	  	logIn(){
	  		if(this.$refs.login.value == "user" && this.$refs.password.value == "user"){
	  			this.login = true
	  		} else {
	  			setTimeout(()=>{
	  				this.$refs.modal.style = ""
	  			},510)
	  			this.$refs.modal.style = "animation: bounce .5s linear"
	  		}
	  	}
	},
	computed: {
	 	
	},
	components: {
	  	playerApp
	}
}
</script>

<style lang="sass">
	.progress-volume-thumb,.progress-thumb
		position: absolute
		margin-left: -6px
		width: 16px
		height: 15px
		border-radius: 50%
		background-color: #6c6c6c
		border: 1px solid black
		transition: all .1s
		cursor: pointer
		&:hover
			background-color: #fff
	.progress-thumb
		top: -6px
		margin-left: -6px
	.progress-volume-thumb
		bottom: 180px
	.index
		height: 100vh
	.index__header
		display: flex
		justify-content: space-between
		box-sizing: border-box
		padding: 10px
		padding-right: 45px
		background-color: rgba(116, 189, 176, .5)
		height: 7vh
		@media screen and (max-device-width: 1400px)
		 &>img
		 	width: 80px
	.header__links
		display: flex
		flex-basis: 50%
		align-items: center
		ul
			display: flex
			justify-content: space-around
			font-size: 18px
			align-items: center
			width: 100%
			padding: 0
			margin: 0
			&:first-child:after
				content: ''
				width: 2px
				height: 50px
				background-color: #fff
				@media screen and (max-device-width: 1400px)
					height: 30px
			&:last-child
				width: 50%
			li
				display: inline-block
				cursor: pointer
				a
					text-decoration: none
					color: #eee
					padding: 10px
					&:hover
						color: #fff
	.headline
		text-align: center
		color: #fff
		padding: 10px
		font-size: 24px
		box-sizing: border-box
		height: 28vh
		h1
			font-size: 72px
			margin: 0
			@media screen and (max-device-width: 1400px)
				font-size: 48px
		@media screen and (max-device-width: 1400px)
			p
				font-size: 16px
	.index__btn
		font-family: Tahoma,Verdana,Segoe,sans-serif
		min-width: 310px
		width: 15%
		height: 46px
		font-size: 24px
		border-radius: 16.5px
		border: none
		background-color: #52ac62
		color: #fff
		letter-spacing: 7px
		cursor: pointer
		outline: none
		@media screen and (max-device-width: 1400px)
			font-size: 18px
			height: 35px
		&:hover
			background-color: #5ec571
	.index__main
		display: flex
		height: 65vh
		&>div
			color: #fff
			width: 50%
			box-sizing: border-box
		.info
			display: flex
			align-items: center
			background-color: rgba(152, 189, 211, .5)
			ul
				flex-wrap: wrap
				display: flex
				justify-content: center
				padding: 0
			li
				display: inline-block
				text-align: center
				width: 50%
			img
				width: 60%
				@media screen and (max-device-width: 1400px)
					width: 40%
			p
				font-size: 16px
				@media screen and (max-device-width: 1400px)
					font-size: 14px
			b
				font-size: 18px
				@media screen and (max-device-width: 1400px)
					font-size: 16px

		.donate
			background-color: rgba(159, 203, 163, .5)
			text-align: center
			display: flex
			flex-direction: column
			justify-content: center
			h2
				font-size: 48px
				margin: 0
				@media screen and (max-device-width: 1400px)
					font-size: 36px
			p,b
				font-size: 24px
				margin: 15px
				@media screen and (max-device-width: 1400px)
					font-size: 18px
			.cards
				display: flex
				align-items: center
				justify-content: center
				img
					width: 150px
					height: 150px
					margin: 15px
					@media screen and (max-device-width: 1400px)
						width: 100px
						height: 100px
				.paypal
					width: 75px
					height: 75px
					@media screen and (max-device-width: 1400px)
						width: 50px
						height: 50px
			button
				align-self:	center
	.index__footer 
		padding: 50px
		background-color: #000
		height: 12vh
		display: flex
		color: #fff
		@media screen and (max-device-width: 1400px)
			height: 8vh
			padding: 30px
			&>img
				width: 100px
		.rightSide
			flex-grow: 1
			display: flex
			justify-content: flex-end
			&>div
				width: 25%
		.socialMedia
			display: flex
			align-items: center
			justify-content: center	
			img
				padding: 0 15px
				width: 50px
				@media screen and (max-device-width: 1400px)
					width: 30px
		.refs
			display: flex
			@media screen and (max-device-width: 1400px)
				display: none
			ul
				padding: 0 50px 0 0
				margin: 0
				display: flex
				flex-wrap: wrap
				flex-direction: column
				height: 80%
				box-sizing: border-box
				li
					display: inline-block
					padding: 5px
					height: 100%
					a
						text-decoration: none
						color: #fff
						font-size: 12px
		.company
			display: flex
			flex-direction: column
			justify-content: center
			align-items: center
			.companyLogo
				padding-bottom: 20px
				@media screen and (max-device-width: 1400px)
					width: 150px
					padding: 0
			.language
				display: flex
				@media screen and (max-device-width: 1400px)
					display: none
			p
				margin: 0
	.popup
		.overlay
			margin: 0
			padding: 0
			box-sizing: border-box
			width: 100vw
			height: 100vh
			position: fixed
			top: 0
			left: 0
			z-index: 50
			background-color: rgba(0,0,0,.7)
		.modal_frame
			border: 3px #000 solid
			z-index: 5
			padding: 0 20px
			box-sizing: border-box
			background: linear-gradient(180deg, #044d60 72%, rgb(159, 203, 163) 100%)

			display: block
			margin: auto
			position: fixed
			top: 10vh
			z-index: 51
			width: 600px
			background-color: #fff
			margin-left: auto
			margin-right: auto
			left: 0
			right: 0
			.modal_close
				font-size: 25px
				width: 21px
				height: 21px
				position: absolute
				top: 10px
				right: 10px
				cursor: pointer
				display: block
				color: #6c6c6c
				&:hover
					color: #fff
		.modal_links
			padding: 0 40px
			li
				display: inline-block
				padding: 10px 20px
				cursor: pointer
				font-size: 18px
		.signin,.login
			color: #6c6c6c
			&:hover
				color: #fff
		.form_active
			border-bottom: solid 2px #fff
			color: #fff
		.modal_form
			padding: 10px 40px
			text-align: center
			label
				font-size: 18px
				color: #c6c6c6
				&[for=keepme]
					display: inline-block
					vertical-align: middle
					margin-left: 20px
			input[type=text], input[type=password]
				font-weight: 700
				font-size: 18px
				line-height: 24px
				vertical-align: center
				border: 1px solid #000
				
				text-align: center
				box-sizing: border-box
				opacity: .5
				margin: 10px 0
				padding: 10px
				height: 30px
				width: 100%
				display: block
				border-radius: 20px
				outline: none
				&:focus
					opacity: 1
			input[type=password]
				margin-bottom: 10px
			input[type=checkbox]
				display: none
			.custom_checkbox
				position: relative
				width: 14px
				height: 14px
				border: 1px solid #000
				border-radius: 5px 
				display: inline-block
				vertical-align: middle
			.cellar
				text-align: left
				p,a
					color: #000
					line-height: 24px
					font-weight: 700
					text-decoration: none
					font-size: 14px
					vertical-align: middle
					display: inline-block
					margin: 0
				a
					padding-bottom: 1px
					text-decoration: underline
					&:hover
						text-decoration: none
			p
				padding-left: 2px
				padding-right: 25px
			input[type=checkbox]:checked + .custom_checkbox::before
				content: '\2714'
				position: absolute
				left: 2px
				bottom: -3px
				font-size: 18px
			button
				margin: 40px 0 20px 0
				display: blocks
				width: 100%
	@keyframes bounce 
		0%,40%,80%,100%
			transform: translateX(-10px)
		20%,60%
			transform: translateX(10px)
	.musicApp
		background: #2d2d2d
		height: 100vh
		.app__header
			display: flex
			justify-content: space-between
			align-items: center
			box-sizing: border-box
			padding: 10px 20px 10px 40px
			background-color: #272727
			height: 7vh
			@media screen and (max-device-width: 1400px)
				height: 6vh
			&>img
				height: 100%
			.list
				.current
					color: #fff
				ul
					padding: 0
					li
						display: inline-block
						a
							padding: 0 15px
							text-decoration: none
							color: #c6c6c6
							font-size: 24px
							@media screen and (max-device-width: 1400px)
								font-size: 18px
							&:hover
								color: #fff
			.search
				input
					width: 400px
					font-size: 16px
					padding: 5px
					outline: none
					background-color: rgba(55,55,55,.7)
					border: none
					border-radius: 5px
					color: #fff
					@media screen and (max-device-width: 1400px)
						font-size: 14px
				button
					width: 16px
					height: 16px
					position: relative
					left: -30px
					cursor: pointer
					border: none
					outline: none
					opacity: .5
					&:hover
						opacity: .7
					&:active
						opacity: 1
			.user
				display: flex
				align-items: center
				cursor: pointer
				color: #6c6c6c
				&:hover
					color: #fff 
				img
					width: 50px
					height: 50px
					border-radius: 100%
					@media screen and (max-device-width: 1400px)
						width: 40px
						height: 40px
				p
					font-size: 18px
					padding-right: 20px
					@media screen and (max-device-width: 1400px)
						font-size: 16px
		.app__main
			margin-top: 40px
			display: flex
			justify-content: space-around
			@media screen and (max-device-width: 1400px)
				margin-top: 10px
			.main_headline
				display: flex
				justify-content: space-between
				align-items: center
				p
					font-size: 28px
					color: #fff
					@media screen and (max-device-width: 1400px)
						font-size: 20px
				select
					font-family: Tahoma,Verdana,Segoe,sans-serif
					font-size: 18px
					border: none
					outline: none
					color: #c0c0c0
					background-color: transparent
					@media screen and (max-device-width: 1400px)
						font-size: 14px
					option
						background-color: #6c6c6c
			.musicList
				background-color: #373737
				width: 25vw
				padding: 0 25px 0 45px
				box-sizing: border-box
				@media screen and (max-device-width: 1400px)
					width: 33vw
				.list
					overflow-y: scroll
					display: flex
					flex-direction: column
					height: 70vh
					padding-right: 20px
					.song
						display: inline-flex
						height: 85px
						align-items: center
						cursor: pointer
						&:hover 
							background-color: #555
						img
							width: 75px
							height: 75px
							margin: 5px 15px 5px 5px
						p
							font-weight: 700
							font-size: 14px
							margin: 0
							color: #c0c0c0
							@media screen and (max-device-width: 1400px)
								font-size: 12px
						.name
							font-size: 16px
							margin-bottom: 15px
							max-width: 400px
							@media screen and (max-device-width: 1400px)
								font-size: 14px
	body
		margin: 0
		font-family: Tahoma,Verdana,Segoe,sans-serif
		::-webkit-scrollbar
			width: 10px
		::-webkit-scrollbar-track
			background: #2d2d2d
		::-webkit-scrollbar-thumb
			 background: #7b7b7b
			 width: 12px
			 border-radius: 5px
		::-webkit-scrollbar-thumb:hover
			background: #f1f1f1
	.album
		width: 90px
		height: 90px
		background-size: 100% 100%
		margin-right: 20px
		box-sizing: content-box
		@media screen and (max-device-width: 1400px)
			width: 85px
			height: 65px
	.player
		position: fixed
		width: 100vw
		height: 100px
		bottom: 0
		left: 0
		display: flex
		align-items: center
		transition: opacity .3s
		background-color: rgb(55,55,55)
		@media screen and (max-device-width: 1400px)
			height: 75px
		.name
			color:#fff
			p
				margin: 0 0 5px 0
				font-size: 18px
				max-width: 400px
				@media screen and (max-device-width: 1400px)
					font-size: 14px
			b
				font-size: 14px
				text-decoration: underline
				@media screen and (max-device-width: 1400px)
					font-size: 12px
		.volume
			position: relative
		.volumeBar
			transition: all .3s
			width: 50px
			height: 200px
			border: 1px solid black
			position: absolute
			left: 20px
			bottom: 40px
			.progress-volume
				display: flex
				width: 5px
				height: 90%
				border: 1px solid #000
				border-radius: 20px
				margin: 10px 20px
				.progress-volume-bar
					align-self: flex-end
					width: 100%
					background-color: #6c6c6c
					position: relative
					height: 180px
		.progress
			width: 50%
			height: 5px
			border: 1px solid #000
			border-radius: 20px
			margin: 20px
			position: relative
			.progress-bar
				height: 100%
				background-color: #6c6c6c
				transition: all .3s
				position: relative
		button
			margin: 0 12px
			border: none
			background: none
			width: 2.5vw
			height: 2.5vh
			outline: none
			img
				width: 100%
				height: 100%
				cursor: pointer
				transition: all .1s
				&:active
					margin-top: 10%
		.play
			width: 2.7vw
			height: 2.7vw
	.albumList
		overflow-y: scroll
		max-height: 400px
		width: 600px
		min-height: 250px
		border: 1px solid black
		position: absolute
		bottom: 100px
		left: 10%
		display: flex
		flex-direction: column
		background-color: #373737
		color: #fff
		@media screen and (max-device-width: 1400px)
		 max-height: 200px
		 width: 400px
		p
			font-weight: 700
			font-size: 16px
			margin: 0
			@media screen and (max-device-width: 1400px)
				font-size: 12px
		.name
			font-size: 20px
			margin-bottom: 15px
			@media screen and (max-device-width: 1400px)
				font-size: 14px
			p
				max-width: 400px
		.song
			display: inline-flex
			height: 100px
			align-items: center
			cursor: pointer
			&:hover 
				background-color: #555
			img
				width: 90px
				height: 90px
				margin: 5px
				@media screen and (max-device-width: 1400px)
				 height: 40px
				 width: 40px
</style>
