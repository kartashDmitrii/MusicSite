 <template>
  	<div class="player">
      <button @click="switchSong($event, 'prev')"><img :src="'./src/img/music_player/prev_player.svg'"></button>
      <button @click="$store.commit('changePlays')" class="play"><img :src="checkplay" alt=""></button>
      <button @click="switchSong($event, 'next')"><img :src="'./src/img/music_player/next_player.svg'"></button>
      <button @click="showAlbumFlag = !showAlbumFlag"><img :src="'./src/img/music_player/album_player.svg'"></button>
      <div class="album" :style="{backgroundImage: 'url('+$store.getters.currentSome('img')+')'}"></div>
      <div class="name">
        <p>{{$store.getters.currentSome('song_name')}}</p>
        <b>{{$store.getters.currentSome('user')}}</b>
      </div>
      <button><img :src="'./src/img/music_player/add_player.svg'" style="opacity: .1"></button>
      <button><img :src="'./src/img/music_player/like_player.svg'" style="opacity: .1"></button>
      <button><img :src="'./src/img/music_player/dislike_player.svg'" style="opacity: .1"></button>
      <div class="progress" @mousedown.stop.prevent="dragDuration">
        <div class="progress-bar" :style="{width: currentTime}"></div>
        <div class="progress-thumb"  :style="{left: currentTime}"></div>
      </div>
      {{currentTime}}
      <button><img :src="'./src/img/music_player/shuffle_player.svg'" style="opacity: .1"></button>
      <button><img :src="'./src/img/music_player/repeat_player.svg'" style="opacity: .1"></button>
      <div class="volume">
        <button @click="showVolume()"><img :src="'./src/img/music_player/music_player.svg'"></button>
        <div @mousedown.stop.prevent="dragMusic" class="volumeBar" style="display: none">
          <div class="progress-volume">
            <div class="progress-volume-bar"></div>
            <div class="progress-volume-thumb"></div>
          </div>
        </div>
      </div>
      {{startAudio}}
      
      <div class="albumList" v-show="showAlbumFlag">
        <div @click="$store.commit('changeSong', $store.getters.someSong(item).id), $store.commit('changePositin', index), $emit('startSong')" v-for="(item, index) in $store.getters.someAlbum($store.getters.currentAlbumValue).songs" class="song" :key="index" :class="'#'+item.id">
          <img :src="$store.getters.someSong(item).img">
          <div>
            <p class="name">{{$store.getters.someSong(item).song_name}}</p>
            <p>{{$store.getters.someSong(item).user}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      showVolumeFlag: false,
      intervalTime: null,
      currentTime: 0,
      showAlbumFlag: false
      }
   },
   methods: {
      switchSong(event, value){
        if(value == "next"){
          if(this.$store.getters.currentPositionValue < this.$store.getters.albums[this.$store.getters.currentAlbumValue].songs.length-1){
            this.$store.commit('changePositin', this.$store.getters.currentPositionValue+1)
            this.$store.commit('changeSong', this.$store.getters.albums[this.$store.getters.currentAlbumValue].songs[this.$store.getters.currentPositionValue])
            this.$emit('startSong')
          }
        } else if (value == "prev") {
          if(this.$store.getters.currentPositionValue > 0){
            this.$store.commit('changePositin', this.$store.getters.currentPositionValue-1)
            this.$store.commit('changeSong', this.$store.getters.albums[this.$store.getters.currentAlbumValue].songs[this.$store.getters.currentPositionValue])
            this.$emit('startSong')
          }
        }
      },
      showVolume(){
        if(this.showVolumeFlag){
          document.querySelector('.volumeBar').style.display = 'none'
          this.showVolumeFlag = !this.showVolumeFlag
        }else {
          document.querySelector('.volumeBar').style.display = 'block'
          this.showVolumeFlag = !this.showVolumeFlag
        }
      },
      dragMusic(event){
      let dragFunction = function(event){
        let eventBottom = parseFloat(getComputedStyle( document.querySelector(".progress-volume-thumb")).bottom)
        if(eventBottom > 180){
          document.querySelector(".progress-volume-thumb").style.bottom = "180px"
        }else if(eventBottom < 10){
          document.querySelector(".progress-volume-thumb").style.bottom = "10px"
        } else {
          document.querySelector(".progress-volume-thumb").style.bottom = eventBottom - event.movementY * 4.5 + "px"
        }
        document.querySelector(".progress-volume-bar").style.height = parseFloat(getComputedStyle( document.querySelector(".progress-volume-thumb")).bottom) + "px"
        let appVolume = (((parseFloat(getComputedStyle( document.querySelector(".progress-volume-thumb")).bottom) - 10) / 1.7) / 100).toFixed(2)
        if(appVolume > 1){
          document.querySelector(".music").volume = 1
        } else if(appVolume < 0) {
          document.querySelector(".music").volume = 0
        } else {
          document.querySelector(".music").volume = appVolume
        }
      }

      event.target.addEventListener("mousemove", dragFunction)
      event.target.addEventListener("mouseup", function(event){
        this.removeEventListener("mousemove", dragFunction)
      })
     },
     dragDuration(event){
        var newDuration;
        let dragFunction = function(event){
            
            document.querySelector(".progress-thumb").style.left = event.offsetX + "px"
            let eventLeft = parseFloat(getComputedStyle(document.querySelector(".progress-thumb")).left)
            let maxLeft = parseFloat(getComputedStyle(document.querySelector(".progress")).width)
            newDuration = ((eventLeft / maxLeft) * document.querySelector(".music").duration).toFixed(6)
        }
       event.target.addEventListener("mousemove", dragFunction)
       event.target.addEventListener("mouseup", function(event){
        document.querySelector(".music").currentTime = newDuration
        this.removeEventListener("mousemove", dragFunction)
       })
     }
   },
   computed: {
    checkplay(){
      if(this.$store.getters.plays){
        if(document.querySelector(".music") != null){
          document.querySelector(".music").play();
        }
        return "./src/img/music_player/pause_player.svg"
      } else {
        if(document.querySelector(".music") != null){
          document.querySelector(".music").pause();
        }
        return "./src/img/music_player/play_player.svg"
      }
    },
    startAudio(){
      if(this.$store.getters.plays){
        this.intervalTime = setInterval(()=>{
          var music = document.querySelector(".music");
          this.currentTime = ((music.currentTime / music.duration) * 100).toFixed(2) + '%'
          if (this.currentTime == "100.00%"){
            clearInterval(this.intervalTime)
            if(this.$store.getters.currentPositionValue < this.$store.getters.someAlbum(this.$store.getters.currentAlbumValue).songs.length-1) {
              this.$store.commit('changePositin', this.$store.getters.currentPositionValue+1)
              this.$store.commit('changeSong', this.$store.getters.someAlbum(this.$store.getters.currentAlbumValue).songs[this.$store.getters.currentPositionValue])
              this.$emit("startSong")
            }           
          }
        },100)
      } else {
        clearInterval(this.intervalTime)
      }
    }
   }
  }
</script>
