var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '   <div class="box"><a href="https://www.apnafurniture.pk/product/radiant-rest-bed-set/"><img class="crs"src="image/1 design.webp" alt="Radiant Rest Bed Set"><div class="box"><br>Radiant Rest Bed Set</div>    <div class="box"><a href="https://www.apnafurniture.pk/product/coastal-calm-bet-set/">';
        l+=1;
    }
   
    else
    {
        alert('More COntent will be added Soon. Stay Tuned:)');
    }
}
function sub(){
    alert('Form Sent')
}