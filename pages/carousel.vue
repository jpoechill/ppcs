<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row panel">
                  <div class="col-md-4 p-4">
                    <div class="p-4 bg-dark">
                      Col 1
                    </div>
                  </div>
                  <div class="col-md-4 bg-dark">
                    Col 2
                  </div>
                  <div class="col-md-4 bg-dark">
                    Col 3
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row panel">
                  <div class="col-md-4 bg-dark">
                    Col 1
                  </div>
                  <div class="col-md-4 bg-dark">
                    Col 2
                  </div>
                  <div class="col-md-4 bg-dark">
                    Col 3
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row panel">
                  <div class="col-md-4 bg-dark">
                    Col 1
                  </div>
                  <div class="col-md-4 bg-dark">
                    Col 2
                  </div>
                  <div class="col-md-4 bg-dark">
                    Col 3
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.panel {
  min-height: 200px;
}
</style>