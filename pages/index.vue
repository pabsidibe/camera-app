<template>
  <section>
    <div class="loginF">
      <a-row type="flex" justify="space-around" align="middle" >
        <a-col :span="8" :offset="0">
                
          <a-form layout="horizontal"
                  :form="form"
                  @submit="Authentifier">
            <a-form-item>
              <a-input v-decorator="['login',{rules: [{ required: true, message: 'login requis' }]}]" placeholder="Votre login">
               
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input v-decorator="['password',{rules: [{ required: true, message: 'Mot de passe requis' }]}]" placeholder="votre mot de passe" type="password">
                
              </a-input>
            </a-form-item>
              <a-form-item>
              <a-input v-decorator="['ip',{rules: [{ required: true, message: 'L\'addresse IP du serveur est requise' }]}]" placeholder="L'addresse IP du serveur">
              
              </a-input>
            </a-form-item>
              <a-form-item>
              <a-input v-decorator="['compression',{rules: [{ required: true, message: 'La compression est requise' }]}]" placeholder="Compression">
               
              </a-input>
            </a-form-item>
             <a-row>
              <a-col  :span="12">
                <a-form-item>
               
              <a-input-number  :min="1" :max="10" v-model="value" @change="onChange" /> {{value}} * {{value}}
            </a-form-item>
              </a-col>
              <a-col  :span="12">
               
              </a-col>
            </a-row>
            <a-row :gutter="5">
              <a-col  :span="12">
                <a-form-item>
              <a-input v-decorator="['width',{rules: [{ required: true, message: 'La largeur de la grille est requise' }]}]" placeholder="Largeur de la grille">
               
              </a-input>
            </a-form-item>
              </a-col>
              <a-col  :span="12">
                <a-form-item>
              <a-input v-decorator="['height', {rules: [{ required: true, message: 'La longueur de la grille est requise' }]}]" placeholder="Longueur  de la grille" >
               
              </a-input>
            </a-form-item>
              </a-col>
            </a-row>
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit" block>
                Login
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
  // import Nav from "~/components/nav.vue"
  export default {
    data() {
      return{
        form:this.$form.createForm(this),
        value : 3
      }
    },
    computed:{
      session (){
        return this.$store.state.session.user;
      }
    },
    methods:{
       onChange(value) {
        console.log('changed', value,this.value);
        this.value = value;
      },
      Authentifier(e){
        e.preventDefault();
        this.form.validateFields((err,values)=>{
          //this.$store.$warehouse('session/setSession',values);
          let args = Object.assign({grille:this.value},values)
          this.$warehouse.set('connexionCamera',args);
          this.$router.push(`/admin`);
        });
        //console.log(this.$store.state.session.user);
        
      }
    }
  }
</script>
<style>
.loginF{
  padding-top: 250px;
}
</style>
