<template>

  <div class="job" v-for="job in jobs" :key="job.id">
   <router-link :to="{name: 'jobDetails', params: { id: job.id}}">
     <h2> {{ job.title }} - {{job.details}}</h2>
   </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobs: [
        {title: 'Frontend Developer Angular', id:1, details: '2 year exp.'},
        {title: 'Backend Developer Node', id: 2, details: '1 year exp.'},
        {title: 'UI/UX', id: 3, details: 'Years of exp.'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
 .job{

 h2{
   background: crimson;
   padding: 20px;
   border-radius: 10px;
   margin: 10px auto;
   max-width: 600px;
   cursor: pointer;
   color: white;
   opacity: 0.8;
   &:hover{
     opacity: 1;
   }
 }
 a{
   text-decoration: none;
 }
 }
</style>