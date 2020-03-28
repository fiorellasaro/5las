<template>
  <section class="content">
    <p class="bold font-25">¡Listo!</p>
    <p class="medium">Su ticket es válido por 1 hora</p>
    <div>
      <Row type="flex" justify="center">
        <div class="timer">
          <img src="../assets/icons/border.png" />
          <div class="semi-bold">
            <span id="minutes">{{ minutes }}</span>
            <span id="middle">:</span>
            <span id="seconds">{{ seconds }}</span>
          </div>
        </div>
      </Row>
      <Row type="flex" justify="center" align="bottom" style="margin-top:40vh">
        <Col>
          <Button type="success" class="heigth50">FINALIZAR VISITA</Button>
        </Col>
      </Row>
    </div>
  </section>
</template>
<script>
export default {
  name: "yourTime",
  created() {
    this.startTimer();
  },
  data() {
    return {
      timer: null,
      totalTime: 60 * 60,
      resetButton: false
    };
  },
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
      }
    }
  },
  head() {
    return {
      link: [
        {
          href:
            "https://fonts.googleapis.com/css?family=Montserrat&display=swap",
          rel: "stylesheet"
        }
      ]
    };
  },
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    }
  }
};
</script>
<style>
@import "../assets/style.css";
.content {
  padding: 30px;
}
.timer {
  position: relative;
}
.timer div {
  position: absolute;
  font-size: 5em;
  top: 30%;
  left: 20%;
}
.height50 {
  height: 50px;
}
</style>
