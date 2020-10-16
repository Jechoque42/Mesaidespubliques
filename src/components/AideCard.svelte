<script>
    export let aide
    console.log(aide)
</script>

<div class="card-container">
    <div class="card">
        <div class="aid-infos">
            <div class="aid-nature">
                {aide.nature.title}
            </div>
            <img src={aide.picture} alt="aid" class="aid-picture"/>
        
            <div class="aid-name">
                {aide.title}
            </div>

            <div class="aid-description">
                <p>{@html aide.description}</p>
            </div>
        </div>
        <div class="aid-link">
            <button class="card-button">Vérifier l'éligibilité &emsp; &gt;</button>

            <a href=none target="blank" class="card-link">En savoir plus</a>
        </div>
    </div>
</div>

<style>
    .card-container {
        position: relative;
        margin : 5vh auto;
        min-width: 25%;
    }
    .card {
        width: 235px;
        border: 2px solid #FC9F5B;
        border-radius: 5px;
        padding: 15px;
        font-family: Ubuntu, Helvetica, Arial, sans-serif;
        line-height: 16px;
        text-align: center;
        height: 325px;
        margin: auto;
    }
    .aid-infos {
        height: 75%;
        overflow: scroll;
    }
    .aid-nature {
        font-size: 12px;
        color:#9a9a9e;
        height: auto;
    }
    .aid-picture {
        max-width: 66px;
        max-height: 66px;
        margin-top: 15px;
        margin-bottom: 15px;
        height: auto;
    }
    .aid-name {
        font-size: 16px;
        color:#FC9F5B;
        height: auto;
    }
    .aid-description {
        font-size: 12px;
        color: #626263;
        margin: 15px 0px;
    }
    .aid-link {
        height: 25%;
        margin-top:10px;
    }
    .card-button { 
        font-size: 15px;
        color: white;
        border-radius: 30px;
        background-color: #5794D5;
        padding: 8px 15px;
    }
    .card-link {
        font-size: 12px;
        color: #5794D5;
        display:block;
        margin-top:10px;
    }
</style>