<template>
    <section>
   
          <table border="1" v-if="cnx && cnx.grille">
                <tr  v-for="item in parseInt(cnx.grille)" :key="item" >
                    <td style="width:200px" v-for="detail in  parseInt(cnx.grille)" :key="detail">
                           
                      
                        <div v-if="getCameraById(item,detail) && getCameraById(item,detail).id">
                         {{cnx.ip+'/axis-cgi/mjpg/video.cgi?user='+cnx.login+'&pwd='+cnx.password+'&cameraId='+getCameraById(item,detail).id+'&fps=1&compression='+cnx.compression+'&resolution='+cnx.width+'x'+cnx.width}}
                       
                        </div>
                        <div v-else>{{getCameraById(item,detail)}} </div>
                    </td>
                </tr>

      <!-- <tr>
        <td><p>
            
            <img :src="'https://demo.tinycammonitor.com:8083/axis-cgi/mjpg/video.cgi?user='+cnx.login+'&pwd='+cnx.login+'&cameraId=182399567&fps=1&compression=60&resolution=320x240'" alt="Camera 1" /><br/>
            Camera 1 [320x240, 1fps]</p></td>
        <td><p><img src="http://10.0.1.12:8083/axis-cgi/mjpg/video.cgi?camera=2&fps=1&compression=60&resolution=320x240" alt="Camera 2" /><br/>
            Camera 2 [320x240, 1fps]</p></td>
             <td><p><img src="http://10.0.1.12:8083/axis-cgi/mjpg/video.cgi?camera=2&fps=1&compression=60&resolution=320x240" alt="Camera 2" /><br/>
            Camera 2 [320x240, 1fps]</p></td>
      </tr>
      <tr>
        <td><p><img src="http://10.0.1.12:8083/axis-cgi/mjpg/video.cgi?camera=3&fps=5&compression=60&resolution=320x240" alt="Camera 3" /><br/>
            Camera 3 [320x240, 5fps]</p></td>
        <td><p><img src="http://10.0.1.12:8083/axis-cgi/mjpg/video.cgi?camera=6&fps=5&compression=60&resolution=320x240" alt="Camera 4" /><br/>
            Camera 6 [320x240, 5fps]</p></td>
             <td><p><img src="http://10.0.1.12:8083/axis-cgi/mjpg/video.cgi?camera=2&fps=1&compression=60&resolution=320x240" alt="Camera 2" /><br/>
            Camera 2 [320x240, 1fps]</p></td>
      </tr>
      <tr>
        <td><p><img src="http://10.0.1.12:8083/axis-cgi/mjpg/video.cgi?camera=3&fps=5&compression=60&resolution=320x240" alt="Camera 3" /><br/>
            Camera 3 [320x240, 5fps]</p></td>
        <td><p><img src="http://10.0.1.12:8083/axis-cgi/mjpg/video.cgi?camera=6&fps=5&compression=60&resolution=320x240" alt="Camera 4" /><br/>
            Camera 6 [320x240, 5fps]</p></td>
             <td><p><img src="http://10.0.1.12:8083/axis-cgi/mjpg/video.cgi?camera=2&fps=1&compression=60&resolution=320x240" alt="Camera 2" /><br/>
            Camera 2 [320x240, 1fps]</p></td>
      </tr> -->
    </table>
    </section>
</template>
<script>
const cameras=[
  
        {
        id:1,
        nom:"SENEGAL JAPON"
    },
        {
        id:2,
        nom:"G 15"
    },
        {
        id:3,
        nom:"ENSEA"
    },
        {
        id:4,
        nom:"UGB"
    },
        {
        id:5,
        nom:"Ensup"
    },
        {
        id:6,
        nom:"Ucao"
    },
        {
        id:7,
        nom:"SupdeCo"
    },
        {
        id:8,
        nom:"Ucad"
    },
      {
        id:9,
        nom:"simplify"
    },
      {
        id:10,
        nom:"simplify"
    },
      {
        id:11,
        nom:"simplify"
    },
      {
        id:12,
        nom:"simplify"
    },
]
export default {
    data() {
    return {
     
   
      cameras,
      cnx:{}
    };
  },
  
    mounted() {
       
      this.cnx = this.$store.$warehouse.get('connexionCamera');
        // console.log(cnx.login+'ouica')
    },
      methods: {
 getCameraById(item,detail){
     const t = this.calculateFunct(item,detail);
     let bool = "Ce camera not found"
       this.cameras.forEach(elt => {
             if(elt.id === t){
                bool = elt
             }
       });
       return bool;
  },
  calculateFunct(item,detail){

      return (this.cnx.grille * item) - (this.cnx.grille - detail)
  }
  },
}
</script>
<style>
/* .colP{
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    height: 350px;
} */
</style>


