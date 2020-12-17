class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Bouh!"
            ,"C'est mort ici, haha."
            ,"Vous avez vu Mockey?"
            ,"..."
            ,"Zzz.."
            ,"Pas trop mal."
            ,"Wow!"
            ,"C'est beau putain."
            ,"vive moi!"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}
