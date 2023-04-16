<template>

<div class="about">
    <label for="">Type user name</label>
    <input style="display:block;" v-model="username" placeholder="Type here">
    <button @click="getUser">Fetch</button>

    <div style="display:block; margin-top: 20px;" v-if="data != null">
    {{ JSON.stringify(data, undefined, 2) }}
    </div>

</div>

</template>


<script lang="ts">
import { Github } from '../api/Github';

export default {
  data() {
    return {
      username: '',
      data: null
    }
  },
  methods: {
    getUser(){
        this.data = null;
        Github.getUser(this.username).then(response => {
            this.data = response.data;
        })
        .catch(err => console.log(err))
        this.username = '';
    }
  }
}
</script>