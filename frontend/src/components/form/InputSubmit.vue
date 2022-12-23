<template>
    <input type="submit" :value="text">
</template>

<script>
export default {
    name: "InputSubmit",
    props: {
        text: ""
    }
}

</script>

<style scoped>
    input {
        width: 200px;
        margin: 0 auto;
        text-transform: uppercase;
        color: #FFF;
        background-color: #25282E;
        border: 0;
        padding: 12px;
        cursor: pointer;
        transition: .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding: 10px 20px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        border-radius: 4px;
        background: #000000;
        background: -webkit-linear-gradient(to right,  #0733e4, #8d65ec );
        background: linear-gradient(to right,#5274ff, #7641f1 );
        color: #fff;
        transition: all 0.3s ease;
    }
    

    input:hover {
        background-color: #141619;
    }
</style>