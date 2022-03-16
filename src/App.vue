<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'about'}">About</router-link>
    <router-link :to="{ name: 'jobs'}">Jobs</router-link>
  </nav>

  <button class="btn primary" @click="redirect">Redirect</button>
  <button class="btn primary" @click="back">Go back</button>
  <button class="btn primary" @click="forward">Go forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect(){
      this.$router.push({ name: 'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(+1)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 7px;
    border-radius: 7px;

    &.router-link-exact-active {
      color: white;
      background: crimson;
    }
  }
}
.primary {
  color: #42b983;
}

.danger {
  color: #e53935;
}

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn.primary {
  background: #42b983;
  color: #fff;
}


</style>
