<script>

</script>

<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <h3>
                Articoli in evidenza
            </h3>
            <hr>
            <div class="carousel-item active my_text-img">
                <img src="../img/inEvidenza/iphone16.jpg" class="d-block w-100" alt="Iphone 16 e 16 pro">
                <span>
                    <strong>Iphone 16 & 16 pro</strong>
                    Leggi l'ultimo articolo sulle caratteristiche dell'iphone 16 e 16 pro.
                </span>
            </div>
            <div class="carousel-item my_text-img">
                <img src="../img/inEvidenza/surface.jpg" class="d-block w-100" alt="Surface Pro">
                <span>
                    <strong>Surface Pro</strong>
                    Leggi l'ultimo articolo sul Surface Pro 11ª generazione.
                </span>
            </div>
            <div class="carousel-item my_text-img">
                <img src="../img/inEvidenza/S24-ultra.jpg" class="d-block w-100" alt="Samsung S24 Ultra">
                <span>
                    <strong>Samsung S24 Ultra</strong>
                    Leggi l'ultimo articolo sul Samsung Galaxy S24 Ultra.
                </span>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
h3 {
    font-family: Verdana, sans-serif;
}

.my_text-img {
    font-family: Verdana, sans-serif;
    font-size: 10px;
    float: left;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
}

.my_text-img img {
    float: left;
    margin: 0;
    padding: 0;
    background: #fff;
    border: none;
}

.my_text-img span {
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

.my_text-img span strong {
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    display: block;
    padding-bottom: 5px;
}
</style>
