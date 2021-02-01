<template>
  <div class="container" v-if="data[0]">
    <div class="parallax-img1">
      <div class="context">
        <span>Scroll Down</span>
      </div>
    </div>

    <div class="title">
      專案名稱: {{ data[0].name }}
    </div>
    <div class="parallax-img2">
      <div class="context-data">
        <p>專案描述: {{ data[0].description }} </p>
        <p>專案網址: {{ data[0].html_url }} </p>
        <p>專案建立: {{ data[0].created_at }} </p>
        <p>專案更新: {{ data[0].updated_at }} </p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      index: 1,
    };
  },
  methods: {
    getApi() {
      const url = 'https://api.github.com/users/ningningccn/repos';
      const vm = this;
      vm.axios.get(url).then((response) => {
        vm.data = response.data;
      });
    },
    createPost(data, index) {
      const container = document.getElementsByClassName('container')[0];
      const title = document.createElement('div');
      title.className = 'title';
      const parallax = document.createElement('div');
      const context = document.createElement('div');
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      const p3 = document.createElement('p');
      const p4 = document.createElement('p');
      parallax.className = 'parallax-img2';
      context.className = 'context-data';
      title.innerHTML = `專案名稱: ${data[index].name}`;
      p1.innerHTML = `專案網址: ${data[index].html_url}`;
      p2.innerHTML = `專案建立: ${data[index].created_at}`;
      p3.innerHTML = `專案更新: ${data[index].updated_at}`;
      p4.innerHTML = `專案描述: ${data[index].description}`;
      container.appendChild(title);
      container.appendChild(parallax);
      parallax.appendChild(context);
      context.appendChild(p4);
      context.appendChild(p1);
      context.appendChild(p2);
      context.appendChild(p3);
    },
    createLastPost() {
      const container = document.getElementsByClassName('container')[0];
      const parallax = document.createElement('div');
      const context = document.createElement('div');
      const span = document.createElement('span');
      const title = document.createElement('div');
      title.className = 'title';
      parallax.className = 'parallax-img3';
      context.className = 'context';
      parallax.appendChild(context);
      context.appendChild(span);
      span.innerHTML = 'End';
      container.appendChild(title);
      container.appendChild(parallax);
    },
  },
  created() {
    this.getApi();
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const vm = this;
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight > scrollHeight - 5) {
        if (vm.data.length > vm.index) {
          vm.createPost(vm.data, vm.index);
          this.index += 1;
        } else if (vm.data.length === vm.index) {
          this.index += 1;
          vm.createLastPost();
        }
      }
    });
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.container{
  width: 100%;
  height: 100%;
}
.container .parallax-img1{
  background-image: url('~@/assets/Image/demo-1.jpeg');
}
.container .parallax-img2{
  background-image: url('~@/assets/Image/demo-2.jpeg');
}
.container .parallax-img3{
  background-image: url('~@/assets/Image/demo-3.jpeg');
}
.parallax-img1,.parallax-img2,.parallax-img3 {
  height: 100vh;
  opacity: 0.7;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
/* context */
.container .context {
  position:absolute;
  width: 100%;
  font-size: 30px;
  letter-spacing: 10px;
  top: 50%;
  text-align:center;
}
.container .context span {
  background-color: rgba(59, 17, 17, 0.8);
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;
}
/* contex-data */
.container .context-data {
  position: absolute;
  background-color: rgba(212, 91, 91, 0.87);
  color: #fff;
  padding: 40px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container .context-data p{
  margin: 20px 0px;
  font-size: 26px;
}
.title {
  width: 100%;
  height: 25vh;
  background-color: rgba(0, 0, 0, 0.726);
  color: #fff;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 10px;
}
</style>
