<script>
export default {
    data() {
        return {
            navLinks: [
                {
                    label: 'Home',
                    name: 'Home'
                },
                {
                    label: 'Smartphone',
                    name: 'Smartphone'
                },
                {
                    label: 'Tablet',
                    name: 'Tablet'
                },
                {
                    label: 'PC',
                    name: 'PC'
                }
            ],

            otherLinks : [
                {
                    label: 'Altro',
                    name: 'Altro'
                }
            ],

            dropdownOthers: [
                {
                    label: 'Smartwatch',
                    name: 'Smartwatch'
                },
                {
                    label: 'Cuffie wirless',
                    name: 'Cuffie-wirless'
                }
            ]
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler my_bg-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li v-for="navLink in navLinks" class="nav-item">
                        <a class="nav-link active my_color-nav" aria-current="page" href="#">
                            {{ navLink.label }}
                        </a>
                    </li>
                    <li v-for="otherLink in otherLinks" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle my_color-nav" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{ otherLink.label }}
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="dropdownOther in dropdownOthers">
                                <a class="dropdown-item" href="#">
                                    {{ dropdownOther.label }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search">
                    <button class="btn btn-outline my-btn my_color-nav" type="submit">Cerca</button>
                </form>
            </div>
        </div>
    </nav>

    <img src="../img/logo2.jpg" alt="">

</template>

<style scoped lang="scss">
*{
    font-size: 1rem;
}

button.my-btn{
    border: solid .1rem;
}

nav{
    background-color: #003390 !important;
}

.my_color-nav{
    color: white !important;
}

.my_bg-btn{
    margin-top: 1rem;
    background-color: white;
}

</style>