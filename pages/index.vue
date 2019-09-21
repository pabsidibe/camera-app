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
              
                 <a-select   v-decorator="['compression',{rules: [{ required: true, message: 'La compression est requise' }]}]" placeholder="Compression">
        <a-select-option value="50">
         50
        </a-select-option>
        <a-select-option value="60">
         60
        </a-select-option>
        <a-select-option value="70">
        70
        </a-select-option>
        
      </a-select>
            </a-form-item>
             <a-row>
              <a-col  :span="12">
                <a-form-item>

                   <a-select @change="onChange" placeholder="Grilles" v-decorator="['grille',{rules: [{ required: true, message: 'La resolution est requise' }]}]">
        <a-select-option value="2">
         2 x 2
        </a-select-option>
        <a-select-option value="3">
          3 x 3
        </a-select-option>
        <a-select-option value="4">
          4 x 4
        </a-select-option>
         <!-- <a-select-option value="5">
         5 x 5
        </a-select-option>
        <a-select-option value="6">
          6 x 6
        </a-select-option>
        <a-select-option value="7">
         7 x 7
        </a-select-option> -->
      </a-select>
               
              <!-- <a-input-number  :min="1" :max="10" v-model="value" @change="onChange" /> {{value}} * {{value}} -->
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
       
      }
    },
    computed:{
   
    },
    methods:{
       onChange(value) {
        console.log('changed', value);
        // this.value = value;
      },
      Authentifier(e){
        e.preventDefault();
        this.form.validateFields((err,values)=>{
          console.log(values)
         let args = Object.assign(values ,{grille:parseInt(values.grille)})
           console.log(args)
          this.$store.$warehouse.set('connexionCamera',args);
          this.$router.push(`/admin`);
        });
        
      }
    }
  }
</script>
<style>
.loginF{
  padding-top: 250px;
}
</style>
