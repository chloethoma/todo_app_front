<script>
    const date = new Date().toLocaleDateString();
    const src = "https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg";
</script>

<div class="header">
    <img {src} alt="background_img" class="img"/>
    <div class="date">{date}</div>
</div>

<style>
    .header {
        display:inline-block;
        position:relative;
    }

    .img{
        width:300px;
        height:auto;
        opacity:0.7;
    }

    .date {
        z-index: 1;
        position: absolute;
        text-align: center;
        font-weight:bold;
        font-size: 19px;;
        right: 10%;
        top: 80%;
    }

</style>
