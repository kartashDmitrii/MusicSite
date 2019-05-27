import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		music: [
		{
			id: 0,
			user: 'dance_guy',
			song_name: 'Aaron Smith - Dancin (KRONO Remix)',
			src: './src/music/Aaron_Smith-Dancin_(KRONO_Remix).mp3',
			img: './src/img/logo/Aaron_Smith.jpg'
		},
		{
			id: 1,
			user: 'asian_kfg',
			song_name: 'Asian Kung Fu Generation - Re Re',
			src: './src/music/Asian_Kung_Fu_Generation-Re_Re.mp3',
			img: './src/img/logo/Asian_Kung_Fu_Generation-Re_Re.jpg'
		},
		{
			id: 2,
			user: 'askingalexandria',
			song_name: 'Asking Alexandria - Room 138',
			src: './src/music/Asking_Alexandria-Room_138.mp3',
			img: './src/img/logo/Asking_Alexandria-Room_138.jpg'
		},
		{
			id: 3,
			user: 'askingalexandria',
			song_name: 'Asking Alexandria - The Black',
			src: './src/music/Asking_Alexandria-The_Black.mp3',
			img: './src/img/logo/Asking_Alexandria-The_Black.png'
		},
		{
			id: 4,
			user: 'atl_official',
			song_name: 'ATL - 1000',
			src: './src/music/ATL-1000.mp3',
			img: './src/img/logo/atl_limb.jpg'
		},
		{
			id: 5,
			user: 'atl_official',
			song_name: 'ATL - Астронавт',
			src: './src/music/ATL-Астронавт.mp3',
			img: './src/img/logo/atl_limb.jpg'
		},
		{
			id: 6,
			user: 'atl_official',
			song_name: 'ATL - В Унисон',
			src: './src/music/ATL-ВУнисон.mp3',
			img: './src/img/logo/atl_limb.jpg'
		},
		{
			id: 7,
			user: 'atl_official',
			song_name: 'ATL - Танцуйте',
			src: './src/music/ATL-Танцуйте.mp3',
			img: './src/img/logo/atl_limb.jpg'
		},
		{
			id: 8,
			user: 'atl_official',
			song_name: 'ATL - Шаман',
			src: './src/music/ATL-Шаман.mp3',
			img: './src/img/logo/atl_limb.jpg'
		},
		{
			id: 9,
			user: 'badOmens',
			song_name: 'Bad Omens - The Worst In Me',
			src: './src/music/Bad_Omens-The_Worst_In_Me.mp3',
			img: './src/img/logo/Bad_Omens-The_Worst_In_Me.jpg'
		},
		{
			id: 10,
			user: 'bill_hater',
			song_name: 'Billie Eilish - Bad Guy',
			src: './src/music/Billie_Eilish-Bad_Guy.mp3',
			img: './src/img/logo/Billie_Eilish-Bad_Guy.png'
		},
		{
			id: 11,
			user: 'breathecarolina',
			song_name: 'Breathe Carolina – Sellouts',
			src: './src/music/Breathe_Carolina–Sellouts_(feat._Danny_Worsnop_of_Asking_Alexandria).mp3',
			img: './src/img/logo/Breathe_Carolina–Sellouts.jpg'
		},
		{
			id: 12,
			user: 'bmth_official',
			song_name: 'Bring Me The Horizon - Avalanche',
			src: './src/music/Bring_Me_The_Horizon-Avalanche.mp3',
			img: './src/img/logo/Bring_Me_The_Horizon-Avalanche.png'
		},
		{
			id: 13,
			user: 'bmth_official',
			song_name: 'Bring Me The Horizon - Can You Feel My Heart',
			src: './src/music/Bring_Me_The_Horizon-Can_You_Feel_My_Heart.mp3',
			img: './src/img/logo/Bring_Me_The_Horizon-Can_You_Feel_My_Heart.png'
		},
		{
			id: 14,
			user: 'iamsleepless',
			song_name: 'Bring Me The Horizon - Can You Feel My Heart',
			src: './src/music/Bring_Me_The_Horizon-Can_You_Feel_My_Heart_(Iamsleepless_Remix).mp3',
			img: './src/img/logo/Bring_Me_The_Horizon-Can_You_Feel_My_Heart.jpg'
		},
		{
			id: 15,
			user: 'bmth_official',
			song_name: 'Bring Me The Horizon - Doomed',
			src: './src/music/Bring_Me_The_Horizon-Doomed.mp3',
			img: './src/img/logo/Bring_Me_The_Horizon-Avalanche.png'
		},
		{
			id: 16,
			user: 'bmth_official',
			song_name: 'Bring Me The Horizon - Drown',
			src: './src/music/Bring_Me_The_Horizon-Drown.mp3',
			img: './src/img/logo/Bring_Me_The_Horizon-Avalanche.png'
		},
		{
			id: 17,
			user: 'bmth_official',
			song_name: 'Bring Me The Horizon - Run',
			src: './src/music/Bring_Me_The_Horizon-Run.mp3',
			img: './src/img/logo/Bring_Me_The_Horizon-Avalanche.png'
		},
		{
			id: 18,
			user: 'eminemvevo',
			song_name: 'Eminem - Venom',
			src: './src/music/Eminem-Venom.mp3',
			img: './src/img/logo/Eminem-Venom.jpg'
		},
		{
			id: 19,
			user: 'Eskimo Callboy',
			song_name: 'Eskimo Callboy - My Own Summer',
			src: './src/music/Eskimo_Callboy-My_Own_Summer.mp3',
			img: './src/img/logo/Eskimo_Callboy-My_Own_Summer.jpg'
		},
		{
			id: 20,
			user: 'FACE',
			song_name: 'Face – Юморист',
			src: './src/music/Face–Юморист.mp3',
			img: './src/img/logo/Face–Юморист.jpg'
		},
		{
			id: 21,
			user: 'g-eazy',
			song_name: 'G-Eazy - I Mean It ft.Remo',
			src: './src/music/G-Eazy-I_Mean_It_ft._Remo.mp3',
			img: './src/img/logo/G-Eazy-I_Mean_It_ft._Remo.jpg'
		},
		{
			id: 22,
			user: 'ghoste',
			song_name: 'GHOSTEMANE - Mercury Retrograde',
			src: './src/music/GHOSTEMANE-Mercury_Retrograde.mp3',
			img: './src/img/logo/GHOSTEMANE-Mercury_Retrograde.jpg'
		},
		{
			id: 23,
			user: 'black_Star',
			song_name: 'HammAli And Navai - Пустите Меня На Танцпол',
			src: './src/music/HammAli_And_Navai-Пустите_Меня_На_Танцпол.mp3',
			img: './src/img/logo/HammAli_And_Navai-Пустите_Меня_На_Танцпол.jpg'
		},
		{
			id: 24,
			user: 'movieMan',
			song_name: 'Lil Wayne, Ty Dolla, XXXTENTACION - Scared of the Dark',
			src: './src/music/Lil_Wayne,_Ty_Dolla_$ign_&_XXXTENTACION-Scared_of_the_Dark.mp3',
			img: './src/img/logo/Lil_Wayne,_Ty_Dolla_$ign_&_XXXTENTACION-Scared_of_the_Dark.jpg'
		},
		{
			id: 25,
			user: 'mgk_vevo',
			song_name: 'Machine Gun Kelly - Till I Die',
			src: './src/music/Machine_Gun_Kelly-Till_I_Die.mp3',
			img: './src/img/logo/Machine_Gun_Kelly-Till_I_Die.jpg'
		},
		{
			id: 26,
			user: 'maruv',
			song_name: 'MARUV & BOOSIN - Drunk Groove',
			src: './src/music/MARUV_&_BOOSIN-Drunk_Groove.mp3',
			img: './src/img/logo/MARUV_&_BOOSIN-Drunk_Groove.jpg'
		},
		{
			id: 27,
			user: 'summer_fest',
			song_name: 'Mike Posner - I Took A Pill In Ibiza',
			src: './src/music/Mike_Posner-I_Took_A_Pill_In_Ibiza.mp3',
			img: './src/img/logo/Mike_Posner-I_Took_A_Pill_In_Ibiza.jpg'
		},
		{
			id: 28,
			user: 'Miyagi',
			song_name: 'Miyagi & Эндшпиль feat. Рем Дигга - I Got Love',
			src: './src/music/Miyagi_&_Эндшпиль_feat._Рем_Дигга-I_Got_Love.mp3',
			img: './src/img/logo/Miyagi_&_Эндшпиль_feat._Рем_Дигга-I_Got_Love.jpg'
		},
		{
			id: 29,
			user: 'TranceMusic',
			song_name: 'Na zare - Witch House Remix',
			src: './src/music/Na_zare-Witch_House_Remix.mp3',
			img: './src/img/logo/Na_zare-Witch_House_Remix.jpg'
		},
		{
			id: 30,
			user: 'nbt_vevo',
			song_name: 'Nothing But Thieves - Amsterdam',
			src: './src/music/Nothing_But_Thieves-Amsterdam.mp3',
			img: './src/img/logo/Nothing_But_Thieves-Amsterdam.jpg'
		},
		{
			id: 31,
			user: 'rasa_official',
			song_name: 'RASA - Под Фонарем',
			src: './src/music/RASA-Под_Фонарем.mp3',
			img: './src/img/logo/RASA-Под_Фонарем.jpg'
		},
		{
			id: 32,
			user: 'TranceMusic',
			song_name: 'Rompasso - Angetenar',
			src: './src/music/Rompasso-Angetenar.mp3',
			img: './src/img/logo/Rompasso-Angetenar.jpg'
		},
		{
			id: 33,
			user: 'scars_X_X',
			song_name: 'Scarlxrd – 6 Feet',
			src: './src/music/Scarlxrd–6_Feet.mp3',
			img: './src/img/logo/Scarlxrd–6_Feet.jpg'
		},
		{
			id: 34,
			user: 't-fest',
			song_name: 'T-Fest & Скриптонит – Ламбада',
			src: './src/music/T-Fest_&_Скриптонит–Ламбада.mp3',
			img: './src/img/logo/T-Fest_&_Скриптонит–Ламбада.jpg'
		},
		{
			id: 35,
			user: 't-fest',
			song_name: 'T-Fest – Улети',
			src: './src/music/T-Fest–Улети.mp3',
			img: './src/img/logo/T-Fest–Улети.jpg'
		},
		{
			id: 36,
			user: '21Pilots',
			song_name: 'Twenty One Pilots - Chlorine',
			src: './src/music/Twenty_One_Pilots-Chlorine.mp3',
			img: './src/img/logo/Twenty_One_Pilots-Chlorine.jpg'
		},
		{
			id: 37,
			user: 'wildways_vevo',
			song_name: 'Wildways - Self Riot',
			src: './src/music/Wildways-Self_Riot.mp3',
			img: './src/img/logo/Wildways-Self_Riot.jpg'
		}
		],
		albums: [
			{
				name: 'popular',
				songs: [9,36,28,18,29,26,7,33,6,25,23]
			},
			{
				name: 'recomendation',
				songs: [20,34,1,14,3,37,31,21,27,24,19]
			},
			{
				name: 'best',
				songs: [30,32,22,4,8,15,13,10,12,35,16,11,5,2,37]
			},
			{
				name: 'my_list',
				compositor: 'User_Name',
				img: './src/img/logo/Kartinki_500x500_1.jpg',
				songs: [37,12,27,25,19,32,17,8,18,10,21,29,14,13,16]
			},
			{
				name: 'Best Music Mix 2019',
				compositor: 'Music Mix',
				img: './src/img/logo/da16db98ddabeae42495ff003d1efbc8.jpg',
				songs: [8,19,3,11,13,20,5,29,18,12,26,7,21,28,6,34,30,36,35,15]
			},
			{
				name: 'Рок 1990-2000 годов',
				compositor: 'teleFFka',
				img: './src/img/logo/nif7ztU.jpg',
				songs: [35,8,37,24,22,13,31,14,28,34]
			},
			{
				name: 'Музыка для отдыха на море',
				compositor: 'Current_user_2014',
				img: './src/img/logo/Kartinki_500x500_5.jpg',
				songs: [13,22,17,29,34,23,19,20,28]
			}
		],
		popularAlbum: [3,6],
		recomendationAlbum: [4],
		bestAlbum: [5],
		currentSong: 0,
		currentAlbum: 0,
		currentPosition: 0,
		plays: false
	},
	getters: {
		popularAlbum: state => {
			return state.popularAlbum
		},
		recomendationAlbum: state => {
			return state.recomendationAlbum
		},
		bestAlbum: state => {
			return state.bestAlbum
		},
		plays: state=>{
			return state.plays
		},
		albums: state=>{
			return state.albums
		},
		someAlbum: state => index => {
			return state.albums[index]
		},
		musicList: state => {
			return state.music
		},
		currentSome: state => a => {
			let items = state.music
			return items[state.currentSong][a]
		},
		currentSongValue: state=>{
			return state.currentSong
		},
		currentAlbumValue: state => {
			return state.currentAlbum
		},
		currentPositionValue: state => {
			return state.currentPosition
		},
		currentSong: state=> {
			let song
			for(let i = 0; i < state.music.length; i++ ){
				if(state.music[i].id == state.currentSong){
					song = state.music[i]
					continue;
				}
			}
			if(typeof(song)==undefined){
				console.log('sorry =(')
				return "sorry =<"
			} else {
				return song
			}
		},
		someSong: state => a => {
			let song
			for(let i = 0;i < state.music.length; i++){
				if(state.music[i].id == a){
					song = state.music[i];
					continue;
				}
			}
			if(typeof(song)==undefined){
				console.log('sorry =(')
				return "sorry =<"
			} else {
				return song
			}
		}
	},
	mutations: {
		changeSong(state, value){
			state.currentSong = value
		},
		changePositin(state, value){
			state.currentPosition = value
		},
		changeAlbum(state, value){
			state.currentAlbum = value
		},
		changePlays(state){
			state.plays = !state.plays
		},
		playPlays(state){
			state.plays = true;
		},
		setNewAlbum(state, value){
			state.currentAlbum = value;
			state.currentPosition = 0;
		}
	},
	actions: {

	}
});