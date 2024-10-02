<script>

</script>

<template>
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <!--Modifica articoli in evidenza-->
        <div class="carousel-inner">
            <div class="carousel-item active caption">
                <img src="../../img/inEvidenza/iphone16.jpg" class="d-block w-100" alt="...">
                <span>
                    <strong>Iphone 16 & 16 pro</strong>
                    Leggi l'ultima recensione del nuovo Iphone 16 & 16 pro
                </span>
            </div>
            <div class="carousel-item caption">
                <img src="../../img/inEvidenza/S24-ultra.jpg" class="d-block w-100" alt="...">
                <span>
                    <strong>Samsung S24 Ultra</strong>
                    Leggi l'ultima recensione del Samsung Galaxy S24 Ultra
                </span>
            </div>
            <div class="carousel-item caption">
                <img src="../../img/inEvidenza/surface.jpg" class="d-block w-100" alt="...">
                <span>
                    <strong>Surface</strong>
                    Leggi l'ultima recensione dell'ultimo Microsfot Sufrace
                </span>
            </div>
        </div>
        <!---------------------------------->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.caption {
    font-family: Verdana, sans-serif;
    font-size: 10px;
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
}

.caption img {
    float: left;
    margin: 0;
    padding: 0;
    background: #fff;
    border: none;
}

.caption span {
    float: left;
    margin: 0;
    padding: 10px;
    width: 100%;
    color: #dedede;
    background: #222;
    /* browser che non supportano rgba */
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    bottom: 0;
}

.caption span strong {
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    display: block;
    padding-bottom: 5px;
}
</style>
