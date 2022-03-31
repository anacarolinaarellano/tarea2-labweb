<template>
    <div class="my-navbar">
        Mascotas
        <div class="links">
            <a class="link">Canvas</a> <a class="link">Mail</a>
        </div>
    </div>
</template>

<style scoped>
    .my-navbar{
        display: flex;
        width: 100%;
        background-color: black;
        color: white;
        font-family: 'Trebuchet MS';
        font-size: 2.5em;
        padding: 25px;
        margin-bottom: 25px;
        justify-content: space-between;
    }
    .links{
        text-align: right;
    }
    .link{
        margin-right: 20px;
    }
</style>