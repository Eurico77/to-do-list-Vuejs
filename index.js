new Vue({
  el: "#app",
  template: `
      <div class="container">
        <h1>Minha lista</h1>
        <hr>
        <div class="form-todo form-group" >
          <p>
            <input type="text" name="title" placeholder="Título" 
            class="form-control" v-model="title">
          </p>
          <p>
            <textarea placeholder="Descrição" name="description" class="form-control" v-model="description">
            </textarea>
          </p>
          <button class="btn btn-primary" v-on:click="addTolist"> Adicionar</button>
        </div>

        <div class="list-group" v-for="(description, index) in descriptions">
           <span class="title__autor">Titulo: <strong>{{description.title}}</strong>
           </span>
          <p>Descrição: {{description.description}}</p>
         </div>
        <a href="#" title="Excluir">Excluir</a>
       </div>
     </div>
    </div>
    `,
  data() {
    return {
        descriptions:[
            {
                title: 'Lavar o carro',
                description: 'Lavar o carro para ir pro culto hoje a noite com a minha bela namorada'
            }
        ],
        title: '',
        description:''
    };
  },
  methods:{
    addTolist() {
        console.log(this.title)
        console.log(this.description)

    }
  }
});
