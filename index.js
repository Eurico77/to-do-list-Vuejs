new Vue({
  el: "#app",
  template: `
  <div class="container">
  <h1>Minha lista</h1>
  <hr>
  <div class="form-todo form-group">
    <p>
      <input type="text" name="title" placeholder="Título" class="form-control" v-model="title">
    </p>
    <p>
      <textarea placeholder="Descrição" name="description" class="form-control" v-model="description">
     </textarea>
    </p>
    <button class="btn btn-primary" v-on:click="addTolist"> Adicionar</button>
  </div>
  
  <div class="list-group">
  
    <div class="list-group-item" v-for="(description, index) in descriptions">
      <span class="comment__author">Titulo: <strong>{{description.title}}</strong>
      </span>
      <p>Descrição: {{description.description}}</p>
      
      <a href="" v-on:click.prevent="remove(index)" >Excluir</a>
      
    </div>
    
    
    
  </div>
</div>
</div>
   
    `,
  data() {
    return {
      descriptions: [],

      title: "",
      description: "",
    };
  },
  methods: {
    addTolist() {
      if(this.title.trim() ==='' || this.description.trim() === ''){
        return alert('Preencha todos os campos');
      } 
      this.descriptions.push({
        title: this.title,
        description: this.description,
      });
      
      this.title="",
      this.description=""
    },
    remove(index) {
      this.descriptions.splice(index,1);
  
    }
  },

  computed:{
    
  }

  
});
