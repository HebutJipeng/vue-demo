<template>
<p>{{message}}</p>	
</template>

<script>
export default {
  data () {
    return {
      message: 'hello world!'
    }
  }
}

</script>

<style lang="scss" scoped>
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
</style>
